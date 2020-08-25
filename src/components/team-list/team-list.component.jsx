import React from 'react';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import origin from '../../media/origin.jpg';
import mp from '../../media/mp.jpg';
import coding from '../../media/coding.jpg';


const TeamList = (props) => {
    return (
        <div className="container">
            <br />
            <h1 className="h1">Services</h1>
            <hr className="heading-horizon" />
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={coding} height="64px" alt="web dev" />
                        </Media>
                        <Media body>
                            <Media className="media-heading" heading>
                                Web Development and Mentoring
                            </Media>
                            <h5>Using the latest Technology tools</h5>
                            Among the many great leaning platforms out there, we focus on 2 great leaning platforms we know makes you like programming;
                            If you like music, you will like Sonic Pi and if you like telling a computer what to do for you then Codecademy will set you up straight to it.
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={mp} height="64px" alt="photography" />
                        </Media>
                        <Media body>
                            <Media className="media-heading" heading>
                                Cenceptual Photography
                            </Media>
                            <h5>Desired place of photoshoot is no sweat. </h5>
                            Friendly-Photographer. Aselmo Mafanga Photography
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
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
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default TeamList;