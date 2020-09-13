import React from 'react';
import { ListGroup, ListGroupItem, Alert, Media } from 'reactstrap';
import origin from '../../media/origin.jpg';
import mp from '../../media/mp.jpg';
import coding from '../../media/coding.jpg';


const TeamList = (props) => {
    return (
        
        <div id="services" className="container">
            <br />
            <h1 data-aos="fade-up" data-aos-duration="4000" className="h1">Extra Projects</h1>
            <hr className="heading-horizon" />
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem>
                    <div data-aos="fade-up" data-aos-duration="4000">
                        <Media>
                            <Media className="profile-pic" left>
                                <Media className="Media" object src={coding} height="64px" alt="web dev" />
                            </Media>
                            <Media body>
                                <Media className="media-heading" heading>
                                    Web Development and Mentoring
                                </Media>
                                <h5>Using the latest Technology tools</h5>
                                Among the many great leaning platforms out there, we focus on 2 great leaning platforms we know will make you like programming;
                                If you like music, you will like <a href="https://sonic-pi.net/" target="__blank">Sonic Pi</a> and if you like telling a computer what to do for you then <a href="https://codecademy.org/" target="__blank">Codecademy</a> will set you up straight to it.
                            </Media>
                        </Media>
                    </div>
                    
                </ListGroupItem>
                <ListGroupItem>
                    <div data-aos="fade-up" data-aos-duration="4000">
                        <Media>
                            <Media className="profile-pic" left>
                                <Media className="Media" object src={mp} height="64px" alt="photography" />
                            </Media>
                            <Media body>
                                <Media className="media-heading" heading>
                                    Cenceptual Photography
                                </Media>
                                <h5>Desired place of photoshoot is no sweat. </h5>
                                Friendly-Photographer. < a target="__blank" href="https://radlee.github.io/amphotography/">Aselmo Mafanga Photography</a>
                            </Media>
                        </Media>
                    </div>
                    
                </ListGroupItem>
                <ListGroupItem>
                    <div data-aos="fade-up" data-aos-duration="4000">
                        <Media>
                            <Media className="profile-pic" left>
                                <Media className="Media" object src={origin} height="64px" alt="mobile solutions" />
                            </Media>
                            <Media body>
                                <Media className="media-heading" heading>
                                    Mobile Apps Solving Problems
                                </Media>
                                <h5><em>"The Idea of using the Internet with Things is Fascinating."</em></h5>
                                Android Based Applications. Transform the way we use Smartphones.
                            </Media>
                        </Media>
                    </div>
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