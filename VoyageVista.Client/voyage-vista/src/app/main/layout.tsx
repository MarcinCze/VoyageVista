"use client";
import MainNavbar from '@/components/mainNavbar/MainNavbar';
import Sidebar from '@/components/sidebar/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <MainNavbar />

            <Container style={{ marginTop: '1em' }}>
                <Row>
                    <Col xs={3}>
                        <Sidebar />
                    </Col>
                    <Col xs={6}>{children}
                    </Col>
                </Row>
            </Container>

        </>
    );
}
