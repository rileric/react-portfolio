import React from 'react';
import wfdPic from '../Images/whats-for-dinner-recipe.jpg';
import wfd2Pic from '../Images/whats-for-dinner2-meal.jpg';
import retrackPic from '../Images/retrack.jpg';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
// styling done in custom.scss

const Projects = () => (
    <Container className="pf-projects ui-test" fluid  >
        <Carousel>
            <CarouselItem className="ui-test project-item pf-bg-black" >

                <CarouselCaption className="ui-test project-caption" >
                    <img 
                        className="project-thumbnail"
                        src={wfdPic}
                        alt="What's for Dinner (1.0)"
                    />
                    <h3>What's for Dinner (1.0)</h3>
                    <p><b><u>Description</u></b></p>
                    <p>My first capstone using a third-party API. This app is for anyone hungry and curious! It finds recipes based off the category, cuisine, or list of ingredients. Still can't decide What's for Dinner? Try one of the ten random recipes!</p>
                    <p><b><u>Technology</u></b></p>
                    <p>HTML, CSS, Javascript with JQuery</p>
                    <a href="https://rileric.github.io/WhatsForDinner/" class='item'>Visit</a>
                    <br />
                    <a href="https://github.com/rileric/WhatsForDinner" class='item'>GitHub</a>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="ui-test project-item pf-bg-black" >
                
                <CarouselCaption className="ui-test project-caption" >
                    <img 
                        className="project-thumbnail"
                        src={retrackPic}
                        alt="Retrack"
                    />
                    <h3>Retrack</h3>
                    <p><b><u>Description</u></b></p>
                    <p>Retrack was initially designed for release date tracking. Anyone can post an event that they would like to track. Timelines are lists of events sorted by their date. With Retrack, I wanted to explore different styles and experiment with grids.</p>
                    <p><b><u>Technology</u></b></p>
                    <p>React, CSS, Express, Node, and PostgreSQL</p>
                    <a href="https://retrack-client.vercel.app/" class='item'>Visit</a>
                    <br />
                    <a href="https://github.com/rileric/retrack-client" class='item'>Client GitHub</a>
                    <br /> 
                    <a href="https://github.com/rileric/retrack-server" class='item'>Server GitHub</a> 
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="ui-test project-item pf-bg-black" >
                
                <CarouselCaption className="ui-test project-caption" >
                    <img 
                        className="project-thumbnail"
                        src={wfd2Pic}
                        alt="What's for Dinner (2.0)"
                    />
                    <h3>What's for Dinner (2.0)</h3>
                    <p><b><u>Description</u></b></p>
                    <p>An upgrade of my first project. I converted the HTML to the React framework, added a login system, and everyone can now add their own custom recipes! This is a long-term project that I plan on continuing to upgrade in the future.</p>
                    <p><b><u>Technology</u></b></p>
                    <p>React, CSS, Express, Node, Auth0, and PostgreSQL</p>
                    <a href="https://wfd-client.vercel.app/" class='item'>Visit</a>
                    <br />
                    <a href="https://github.com/rileric/wfd-client" class='item'>Client GitHub</a>
                    <br /> 
                    <a href="https://github.com/rileric/wfd-server" class='item'>Server GitHub</a>  
                </CarouselCaption>
            </CarouselItem>
        </Carousel>
    </Container>
);

export default Projects;