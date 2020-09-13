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
                                <div data-aos="fade-right" data-aos-duration="4000">
                                    <Media>
                                        <Media className="profile-pic" left>
                                                <Media className="Media" object src={coding} height="250px" alt="web dev" />
                                        </Media>
                                    </Media>
                                </div> 
                            </Col>
                            <Col sm="6">
                                <div data-aos="fade-left" className="text-box">
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
                                <div data-aos="fade-right" data-aos-duration="4000">
                                    <Media>
                                        <Media className="profile-pic" left>
                                            <Media className="Media" object src={mp} height="250px" alt="photography" />
                                        </Media>
                                    </Media>
                                </div> 
                            </Col>
                            <Col sm="6">
                                <div data-aos="fade-left" className="text-box">
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
                                <div data-aos="fade-right" data-aos-duration="4000">
                                    <Media>
                                        <Media className="profile-pic" left>
                                            <Media className="Media" object src={origin} height="250px" alt="mobile solutions" />
                                        </Media>
                                    </Media>
                                </div> 
                            </Col>
                            <Col sm="6">
                                <div data-aos="fade-left" className="text-box">
                                    <Media body>
                                        <Media className="media-heading" heading>
                                            Mobile Apps Solving Problems
                                        </Media>
                                        <h5><em>"The Idea of using the Internet with Things is Fascinating."</em></h5>
                                        Android Based Applications. Transform the way we use Smartphones.
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
                    <p>
                    The main purpose behind <em>this</em> name <strong>ORIGIN2020</strong> is not only because of its original relevant name design. But it's existence was founded from the driving force or desire production, that it must be a platform, a community, or an ideal node / point-of-interest for creators, creating for everyone. However wide possible it can get.
                    </p>
                    <hr />
                    <p className="mb-0">
                    Whenever you need to, be sure to contact us with regards to building revolutionary solutions.
                    </p>
                </Alert>
            </div>
 

        </div>
    );
}

export default TeamList;