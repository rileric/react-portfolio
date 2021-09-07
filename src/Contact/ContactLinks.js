import React from 'react';
import linkedInLogo from '../Images/LinkedIn-Logos/linkedin.png';
import gitHubLogo from '../Images/GitHub-Mark/PNG/GitHub-Mark-64px.png';
import resumeIcon from '../Images/headhunting.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ContactLinks = () => (
    <Container fluid >
        <Row>
            <Col className="ui-test logo-col center-child" >
                <a href="https://github.com/rileric">
                    <Image  src={gitHubLogo} className="logo" />
                </a>
            </Col>
            <Col className="ui-test logo-col" >
                <a href="https://www.linkedin.com/in/eric-riley-b5575342/">
                    <Image  src={linkedInLogo} className="logo" />
                </a>
            </Col>
            <Col className="ui-test logo-col" >
                <a href="https://docs.google.com/document/d/1ig_isBidiYAomhP636FkMeP32dzMCqW9aM4-lwP1NxM/edit?usp=sharing">
                    <Image  src={resumeIcon} className="logo" />
                </a>
            </Col> 
        </Row>
    </Container>
);

export default ContactLinks;
