import React from 'react';
import { ListGroup, ListGroupItem, Media, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import sf from '../../media/sinekamva.png';
import hh from '../../media/happy-hour.png'



const Sponsors = (props) => {
    return (
        <div id="orgs" className="container">
            <br />
            <h1 className="h1-custom">Organizations</h1>
            <hr className="heading-horizon" />
            <br />
            <Container>
                <Row>
                    <Col sm="6">
                        <div data-aos="fade-up" data-aos-duration="4000">
                            <Card className="notice-sponsor">
                                <CardHeader> Organizations and Business Websites </CardHeader>
                                <CardBody>
                                    <CardTitle>Constantly refining Technological skills to build Enterprise Web Applications </CardTitle>
                                   
                                    <CardText>
                                        Check out the links below for Organisation website Developed by ORIGIN2020
                                    </CardText>
                                </CardBody>
                                <CardFooter className="middleclass"> Example: <a target="__blank" href="https://radlee.github.io/happyhour/"> <span className="hhf" >Happy Hour Foundation Website</span></a></CardFooter>
                                <CardText>
                                        Check out Aselmo-Mafanga-Photography website below for more content.
                                </CardText>
                                <CardFooter> Example: <a target="__blank" href="https://radlee.github.io/amp/"> <span className="hhf" >AM-Photography Website</span></a></CardFooter>
                            </Card>
                        </div>
                    </Col>
                    <Col sm="6">
                    
                        <ListGroup className="team" flush>
                            <div data-aos="fade-up" data-aos-duration="4000">
                                <ListGroupItem className="list-g">
                                    <Media>
                                        <Media className="profile-pic" left>
                                            <Media className="Media" object src={hh} height="70px" alt="Sponsor Photo" />
                                        </Media>
                                        <Media body>
                                            <Media className="media-heading" heading>
                                                Happy Hour Foundation
                                            </Media>
                                            <h5>Supporting underprivileged communities</h5>
                                            <em>It is a Home of kindness in our lifetime</em>
                                        </Media>
                                    </Media>
                                </ListGroupItem>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="4000">
                            <ListGroupItem className="list-g">
                                <Media>
                                    <Media className="profile-pic" left>
                                        <Media className="Media" object src={sf} height="70px" alt="Sponsor Photo" />
                                    </Media>
                                    <Media body>
                                        <Media className="media-heading" heading>
                                            Sinekamva Foundation
                                        </Media>
                                        <h5>Youth Organisation</h5>
                                        Social Welfare.
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            </div>
                        </ListGroup>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;