import React from 'react';
import profPic from '../Images/ER-prof-pic.jpg';
import linkedInLogo from '../Images/LinkedIn-Logos/LI-Logo.png';
import ContactLinks from '../Contact/ContactLinks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Header = () => (
    <Container className="pf-header pf-bg-primary" fluid >
        <Row className="center-parent" >
            <Col className="ui-test center-content top-padding center-child" ><Image  src={profPic} className="profilePic" /></Col>
            <Col xs={6} className="ui-test center-content top-padding center-child" ><h1>Eric Riley</h1></Col>
            <Col className="ui-test extra-space center-content top-padding center-child" >
                <ContactLinks />
            </Col>
        </Row>
        <Row className="mobile-only center-content top-padding">
            <Col className="ui-test" >
                <ContactLinks />
            </Col>
        </Row>
    </Container>
);

export default Header;
