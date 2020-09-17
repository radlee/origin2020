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
                    <NavbarBrand href="/" className="a">ORIGIN2020</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                                <NavLink className="a" href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="a" href="#objectives">Objectives</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="a" href="#services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="a" href="#orgs">Organizations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="a" href="#contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>ORIGIN2020 WEB-APPLICATIONS</NavbarText>
                    </Collapse>
                </Navbar>     
            </div>
        )
    
}

export default withRouter(Navigation);