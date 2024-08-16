import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="my-5">
            <Row className="text-center mb-4">
                <Col>
                    <h1>About Us</h1>
                    <p>Learn more about our company and team.</p>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                At ShopVista, our mission is to provide top-quality products and exceptional customer service. We aim to be the go-to destination for all your shopping needs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Our Team</Card.Title>
                            <Card.Text>
                                Our team is dedicated and passionate about delivering the best shopping experience. From our customer support specialists to our logistics team, everyone at ShopVista is committed to excellence.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
