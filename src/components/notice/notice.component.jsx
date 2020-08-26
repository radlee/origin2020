import React , { Component } from 'react';
import { Row, Col, Container, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';

export default class Notice extends Component { 
   render () {
    return (

        <Container id="objectives">
            <h1 className="h1">The Philosophy</h1>
            <hr className="heading-horizon" />
            <br />
            <br />
            <Row>
                <Col sm="6">
                    <div>
                        <Card className="notice-one">
                            <CardHeader> React and NodeJs </CardHeader>
                            <CardBody>
                                <CardTitle className="card-title">Agile Web Development</CardTitle>
                                <CardText>
                                    Planning. Prototyping. Creating. Testing. Repeat.
                                </CardText>
                                <CardText>
                                    <em className="emphasis">"Solving people's problems with Technology"</em>
                                </CardText>
                            </CardBody>
                            <CardFooter>Proffessional. Business. Educational.</CardFooter>
                        </Card>
                    </div>
                </Col>

                <Col sm="6">
                    <div>
                        <Card className="notice-two">
                            <CardHeader> Collaboration </CardHeader>
                            <CardBody>
                                <CardTitle className="card-title">By joining workforce with innovative creators we solve problems. By Creators For Everyone</CardTitle>
                                <CardText>
                                    Everyone with interest to change the community for the good is welcome.
                                </CardText>
                                <CardText>
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