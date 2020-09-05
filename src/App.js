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
import { Jumbotron } from 'reactstrap';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation />
          <Jumbotron id="about" className="jumbotron">
              <h1 className="display-3">OR<span className="ig">IG</span>IN<span className="ig">2020</span></h1>
              <p className="lead"><span className="green">COLLABORATION</span> | <span className="orange">COMMUNITY</span> | <span className="blue">INNOVATION</span> | <span class="style">STYLED</span>  | <span class="style">CULTURED</span> | <span class="style">SOPHISTICATED</span> </p>
              <hr className="my-2" />
              <p className="para2">Solving Problems. Using Design Thinking Processes to achive our Goals. <em>Every Project is Special.</em></p>
              <p className="para">The prime matter of fact is <em>Rad User Interaction </em>. The second, <em>Delivery of Great User Experience,</em> and what we do best, <em>Origin8</em>.</p>
              <p className="lead">
                  {/* <Button color="primary">Connect</Button> */}
              </p>
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
