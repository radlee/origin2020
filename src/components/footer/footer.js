import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Footer extends Component {

    render() {


        return (
           
                <div className="container">
                     <Container>
      
                        <Row>
                            <Col sm="4"></Col>
                            <Col sm="4">

                                <hr />

                                <div className="twelve columns">        
                                    <div class="widget">
                                        <hr className="my-2" />

                                        <div class="fb-like" data-href="https://radlee.github.io/origin2020/" data-width="" data-layout="button_count" data-action="like" data-size="large" data-share="true"></div>
                                        
                                        <hr className="my-2" /> 
                                        
                                        <h1 className="footer-text">OR<span className="ig">IG</span>IN<span className="ig">2020</span></h1>
                                    </div>
                                </div>

                                <hr />
                                
                            </Col>
                            <Col sm="4"></Col>
                        </Row>
                        
                        </Container>
                    </div>
       
        );
      }
};