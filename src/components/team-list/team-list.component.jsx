import React from 'react';
import { ListGroup, ListGroupItem, Alert, Media, Container, Row, Col, } from 'reactstrap';
import origin from '../../media/origin.jpg';
import mp from '../../media/mp.jpg';
import coding from '../../media/coding.jpg';


const TeamList = (props) => {
    return (
        
        <div id="services" className="container">
            <br />
            <h1 data-aos="fade-up" data-aos-duration="4000" className="h1">Other-Projects</h1>
            <hr className="heading-horizon" />
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem>
                    <Container>
                        <Row>
                            <Col sm="6">
                                <div data-aos="fade-up" data-aos-duration="4000">
                                    <Media>
                                        <Media className="profile-pic" left>
                                                <Media className="Media" object src={coding} height="250px" alt="web dev" />
                                        </Media>
                                    </Media>
                                </div> 
                            </Col>
                            <Col sm="6">
                                <div data-aos="fade-up" className="text-box">
                                    <Media body>
                                        <Media className="media-heading" heading>
                                            Web Development and Mentoring
                                        </Media>
                                        <h5>Using the latest Technology tools</h5>
                                        Among the many great leaning platforms out there, we focus on 2 great leaning platforms we know will make you like programming;
                                        If you like music, you will like <a href="https://sonic-pi.net/" target="__blank">Sonic Pi</a> and if you like telling a computer what to do for you then <a href="https://codecademy.org/" target="__blank">Codecademy</a> will set you up straight to it.
                                    </Media>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>

                <ListGroupItem>
                    <Container>
                        <Row>
                            <Col sm="6">
                                <div data-aos="fade-up" data-aos-duration="4000">
                                    <Media>
                                        <Media className="profile-pic" right>
                                            <Media className="Media" object src={mp} height="250px" alt="photography" />
                                        </Media>
                                    </Media>
                                </div> 
                            </Col>
                            <Col sm="6">
                                <div data-aos="fade-up" className="text-box">
                                    <Media body>
                                        <Media className="media-heading" heading>
                                            Aselmo Mafanga Photography
                                        </Media>
                                        <h5><em>"Passionate Hobbyist Photographer"</em></h5>
                                        Friendly Photographer always  available for photoshoot or videography.
                                        Visit <a href="https://radlee.github.io/amp/">AMP</a> Website for more informantion.
                                    </Media>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>

                <ListGroupItem>
                    <Container>
                        <Row>
                            <Col sm="6">
                                <div data-aos="fade-up" data-aos-duration="4000">
                                    <Media>
                                        <Media className="profile-pic" left>
                                            <Media className="Media" object src={origin} height="250px" alt="mobile solutions" />
                                        </Media>
                                    </Media>
                                </div> 
                            </Col>
                            <Col sm="6">
                                <div data-aos="fade-up" className="text-box">
                                    <Media body>
                                        <Media className="media-heading" heading>
                                            Responsive Design | W.O.T | I.O.T | Design Thinking
                                        </Media>
                                        <h5><em>"The Idea of using the Internet with Things is Fascinating."</em></h5>
                                        Android Based Applications. Transform the way we use Smartphones.
                                        <p>The best way to encapsulate ORIGIN2020's interests is <a href="#https://radlee.github.io/wot/">Tech & Innovation</a>.</p>
                                    </Media>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>
            </ListGroup>

            <hr className="my-2"/>

            <div data-aos="fade-up" data-aos-duration="4000">
                <Alert color="success">
                    <h4 className="alert-heading">The Origins</h4>
                    <p className="paragraph">
                    The main purpose behind <em>this</em> name <strong>ORIGIN2020</strong> is not only because of its relevant original name design. It is a project aimed for Freelance Web Design and Development based in Delft South, Cape Town. 
                    </p>
                    <hr />
                    <p className="paragraph">
                    I am Mafanga Lolito. I'm an Agile Full-Stack React Developer. 
                    </p>
                    <p className="paragraph">
                    ORIGIN2020 is the initiative that is constantly developing.
                    </p>
                </Alert>
            </div>
 

        </div>
    );
}

export default TeamList;