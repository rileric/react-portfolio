import React from 'react';
import Projects from '../Projects/Projects';

import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// styling done in custom.scss

const Intro = () => (
    <TabContainer id="pf-intro" className="pf-intro" defaultActiveKey="about" >
        <Row className="ui-test" >
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <NavItem>
                        <NavLink eventKey="about">About Me</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="interests">Interests</NavLink>
                    </NavItem>
                </Nav>
            </Col>
            <Col sm={6}>
                <TabContent>
                    <TabPane eventKey="about">
                        <p>I started programming in high school where I learned TI-Basic and C++. I focused on pre-med courses in college which led to a quality assurance position at Epic Systems. During my time at Epic, I enjoyed taking Udemy classes about game development with C#. I also learned MUMPs (aka 'M') and attended night classes at UW-Madison through Epic.</p>
                    </TabPane>
                    <TabPane eventKey="interests">
                        <ul>
                            <li>Ballroom and Swing Dancing - I danced competitively in college then learned social dances to relax. Overall, I've learned at least 15 different styles.</li>
                            <li>Video Games - My favorite media because it expresses in so many ways! My first programming project was a role-playing game for the TI-83. I am familiar with Unity and C#.</li>
                            <li>Worldbuilding - I am a fantasy nerd. My bucket list includes creating my own language and writing stories.</li>
                        </ul>
                    </TabPane>
                </TabContent>
            </Col>
            <Col sm={3} />
        </Row>
    </TabContainer>
);

export default Intro;
