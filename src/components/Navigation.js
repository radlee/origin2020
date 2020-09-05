import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

const Navigation = (props) => {
    
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
  
        return (
            <div className="">

                <Navbar className="navigation" dark extended="md">
                    <NavbarBrand href="/">ORIGIN2020</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                                <NavLink href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#objectives">Driving Force / <em>Desire Production</em></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#services">Extra Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#orgs">Organizations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>ORIGIN2020 WEB-APPLICATIONS</NavbarText>
                    </Collapse>
                </Navbar>     
            </div>
        )
    
}

export default withRouter(Navigation);