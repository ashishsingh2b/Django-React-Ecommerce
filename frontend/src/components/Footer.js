// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'

// function Footer() {
//     return (
//         <footer>
//             <Container>
//                 <Row>
//                     <Col className="text-center py-3">Copyright &copy; ShopVista</Col>
//                 </Row>
//             </Container>
//         </footer>
//     )
// }

// export default Footer

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <style>
                {`
                    footer {
                        background-color: #343a40; /* Dark background */
                    }
                    .footer-text-white {
                        color: white !important; /* White text color */
                    }
                    .footer-text-white a {
                        color: white; /* Ensure links are also white */
                    }
                    .footer-text-white a:hover {
                        color: #d3d3d3; /* Slightly lighter color on hover */
                    }
                    .footer-item {
                        margin-bottom: 1rem;
                    }
                    @media (min-width: 768px) {
                        .footer-item {
                            margin-bottom: 0;
                        }
                    }
                    .social-icons {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                    }
                `}
            </style>
            <Container>
                <Row className="footer-text-white">
                    <Col md={4} className="footer-item text-center text-md-start mb-3 mb-md-0">
                        <h5 className="footer-text-white">ShopVista</h5>
                        <p>Your one-stop shop for all your needs.</p>
                        <Nav className="flex-column">
                            <Nav.Link href="#/privacy" className="footer-text-white">Privacy Policy</Nav.Link>
                            <Nav.Link href="#/serviceterm" className="footer-text-white">Terms of Service</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="footer-item text-center text-md-start mb-3 mb-md-0">
                        <h5 className="footer-text-white">Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/home" className="footer-text-white">Home</Nav.Link>
                            <Nav.Link href="/products" className="footer-text-white">Products</Nav.Link>
                            <Nav.Link href="#/about" className="footer-text-white">About Us</Nav.Link>

                            <Nav.Link href="#/contact" className="footer-text-white">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="footer-item text-center text-md-start">
                        <h5 className="footer-text-white">Follow Us</h5>
                        <div className="social-icons">
                            <Nav.Link href="https://facebook.com" target="_blank" className="footer-text-white">
                                <FaFacebookF />
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com" target="_blank" className="footer-text-white">
                                <FaTwitter />
                            </Nav.Link>
                            <Nav.Link href="https://instagram.com" target="_blank" className="footer-text-white">
                                <FaInstagram />
                            </Nav.Link>
                            <Nav.Link href="https://linkedin.com" target="_blank" className="footer-text-white">
                                <FaLinkedinIn />
                            </Nav.Link>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3 footer-text-white">
                    <Col className="text-center">
                        <p className="mb-0">Copyright &copy; {new Date().getFullYear()} Ashish Singh. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
