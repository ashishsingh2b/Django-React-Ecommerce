import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <Container className="my-5">
            <Row className="text-center mb-4">
                <Col>
                    <h1>Contact Us</h1>
                    <p>We’d love to hear from you. Fill out the form below or reach us via email.</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h5>Our Contact Information</h5>
                    <p>Email: support@shopvista.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 ShopVista St, Shopping City, SC 12345</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
