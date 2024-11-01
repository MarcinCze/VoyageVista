"use client";
import MainNavbar from '@/components/mainNavbar/MainNavbar';
import Sidebar from '@/components/sidebar/Sidebar';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TripService from '@/services/Trip.service';
import { useRouter } from 'next/navigation'

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const router = useRouter();
    
    useEffect(() => {
        if (!TripService.isTripChosen()) {
            router.push('/main/trips');
        }
    }, [router]);

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
