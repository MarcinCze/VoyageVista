'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function Login() {

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchUserData() {
            try {
              const response = await fetch('http://example.com/user');
              const data = await response.json();
              console.log('User data:', data);
            } catch (error) {
              console.error('Error fetching user data:', error);
            } finally {
              setLoading(false); // Set loading to false when the request completes
            }
          }

        if (isLoading) {
            fetchUserData();
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

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

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" disabled={isLoading} onClick={!isLoading ? handleClick : undefined}>
                            {isLoading ? 'Loading…' : 'Click to load'}
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
