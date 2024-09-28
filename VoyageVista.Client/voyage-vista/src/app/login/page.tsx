'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

interface LoginFormData {
    user: string;
    password: string;
}

export default function Login() {

    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const loginData: LoginFormData = { user, password };

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(response);
                console.log(result);
                router.push('/dashboard');
            } else {
                setShowAlert(true);
                setLoading(false);
                console.log(response);
            }
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
            setShowAlert(true);
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="justify-content-center">
                <Col>
                    <div className="text-center mb-4">
                        <img
                            className="mb-4 img-fluid rounded"
                            src="https://via.placeholder.com/72x72"
                            alt="Bootstrap logo"
                            width="72"
                            height="72"
                        />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    </div>

                    <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
                        <Alert.Heading>Login failed</Alert.Heading>
                        <p>Oops! Looks like something went wrong. Please double-check your username and password, and try again!</p>
                    </Alert>

                    <Form onSubmit={handleClick}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUser(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Log in'}
                        </Button>
                    </Form>

                    <footer className="mt-4 text-center">
                        <p className="mt-5 mb-3 text-muted">© VoyageVista 2025</p>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}
