import React , { Component } from 'react';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';

export default class Notice extends Component { 
   render () {
    return (

        <Container id="objectives">
            <h1 className="h1">About </h1>
            <hr className="heading-horizon" />
            <br />
            <br />
            <Row>
                <Col sm="6">
                    <div data-aos="fade-up" data-aos-duration="4000">
                        <Card className="notice-one">
                            <CardHeader> Vission + Mission </CardHeader>
                            <CardBody>
                                <CardTitle className="card-title">Agile Web Development</CardTitle>
                                <CardText className="card-text">
                                    Planning. Prototyping. Creating. Testing. Repeat.
                                </CardText>
                                <CardText className="card-text">
                                    Using the latest technology tools to build next generation web-applications. 
                                </CardText>
                                <CardText>
                                    <em className="emphasis">"Affirmative with solving real life problems with Technology"</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Industrial. Proffessional. Business. Educational.</CardFooter>
                        </Card>
                    </div>
                </Col>

                <Col sm="6">
                    <div data-aos="fade-up" data-aos-duration="4000">
                        <Card className="notice-two">
                            <CardHeader> Collaboration </CardHeader>
                            <CardBody>
                                <CardTitle className="card-title">By joining workforce with innovative creators we solve problems. By Creators For Everyone</CardTitle>
                                <CardText className="card-text">
                                    Everyone with interest to change the community for the good is welcome.
                                </CardText>
                                <CardText className="card-text">
                                    <em className="emphasis">"Build a Revolution. Build a Legacy. Build a Life Style."</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Artists. Bloggers. Writers. Designers. Musicians and Podcasters</CardFooter>
                        </Card>
                    </div>
               
                </Col>
            </Row>
        </Container>
    )
   }
}