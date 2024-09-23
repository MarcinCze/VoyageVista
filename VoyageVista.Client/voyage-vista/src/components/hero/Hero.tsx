import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface HeroProps {
  title: string;
  subtitle: string;
  isButtonVisible: boolean;
  buttonText: string;
  buttonLink: string;
}

function Hero(props: HeroProps) {
  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-4 fw-bold">{props.title}</h1>
            <p className="lead">{props.subtitle}</p>

            {props.isButtonVisible ? <Button variant="primary" size="lg" href={props.buttonLink}> {props.buttonText} </Button> : null}

          </Col>
          <Col md={5}>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Hero"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
