import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import Notice from './components/notice/notice.component';
import Spinner from './components/spinner/spinner.component';
import TeamList from './components/team-list/team-list.component';
import Sponsors from './components/sponsors/sponsors.component';
import ContactForm from './components/contact-us/contact.component';
import './App.css';
import Navigation from "./components/Navigation"
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

import Typical from 'react-typical'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation />
          <Jumbotron id="about" className="jumbotron">
              <h1 className="display-3">OR<span className="ig">IG</span>IN<span className="ig">2020</span></h1>
              <p className="lead"><span className="green">COLLABORATION</span> | <span className="orange">COMMUNITY</span> | <span className="blue">INNOVATION</span> | <span class="style">STYLED</span>  | <span class="style">CULTURED</span> | <span class="style">SOPHISTICATED</span> </p>
              <hr className="my-2" />
              <h1 className="dev-des">
              <Typical
                steps={['Development and Design', 1000, 'Mobile-1st - Responsive Design', 500, 'Conceptual Photography', 1000]}
                loop={Infinity}
                wrapper="p"
              />
              </h1>
              <hr className="my-2" />
              <p className="para2">Solving Problems. Using Design Thinking Processes to achive our Goals. <em>Every Project is Special.</em></p>
              <p className="para">The prime matter of fact is <em>Rad User Interaction </em>. The second, <em>Delivery of Great User Experience,</em> and what we do best, <em>Origin8</em>.</p>
              <br />
              <hr className="my-2" />
              <p className="lead-two"><span className="tags">COLLABORATION</span> | <span className="style">COMMUNITY</span> | <span className="tags">INNOVATION</span> | <span class="style">STYLED</span>  | <span class="tags">CULTURED</span> | <span class="style">SOPHISTICATED</span> </p>
              <Container>
              <Row>
                <Col sm="4"></Col>
                  <Col xs="12" sm="4">

                  <p className="lead">
                    <Button outline size="lg" color="danger" href="#objectives" className="a" block>Let's Go</Button>
                  </p>

                  </Col>
                <Col sm="4"></Col>
                </Row>
              </Container>
             
          </Jumbotron>
          <br />
          <Notice />
          <br />
          <TeamList />
          <br />
          <Sponsors />
          <br />
          <ContactForm />
          <br />
          <Spinner />
          <br />
          <Footer />
        </div>
    );
  }
}

export default App;
