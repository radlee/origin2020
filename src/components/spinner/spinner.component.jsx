import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import sinekamvaLogo from '../../media/circles.png';

export default class Spinner extends Component {
   render () {
       return (

         <Jumbotron id="about" className="jumbotron">
           <div data-aos="fade-down" data-aos-duration="4000">

          
             <Container>
                
                <Row>
                <Col sm="4"></Col>
                <Col xs="12" sm="4">

                <img src={sinekamvaLogo} className="App-logo" alt="logo" />

                </Col>
                <Col sm="4"></Col>
                </Row>
            
            </Container>
            </div>
          </Jumbotron>
                
       )
   }
}