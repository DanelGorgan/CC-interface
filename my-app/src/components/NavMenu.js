import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import ROUTES from '../constants/routes'

import '../styles/NavMenu.css'

export default props => (
    <Navbar staticTop collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={'/'}>Quilly</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Nav className='nav-menu'>
            <Nav className='pull-left'>
                <LinkContainer to={ROUTES.PLACES}>
                    <NavItem>
                        <Glyphicon glyph='book' /> Places
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={ROUTES.PLACES}>
                    <NavItem>
                        <Glyphicon glyph='stats' /> Statistics
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={ROUTES.PLACES}>
                    <NavItem>
                        <Glyphicon glyph='cog' /> Settings
                    </NavItem>
                </LinkContainer>
            </Nav>
            {localStorage.getItem('jwtToken') ?
                <Nav className='pull-right'>
                    <LinkContainer to={ROUTES.PLACES}>
                        <NavItem>
                            <Glyphicon glyph='log-out' /> Sign Out
                        </NavItem>
                    </LinkContainer>
                </Nav> : <Nav className='pull-right'>
                    <LinkContainer to={ROUTES.PLACES}>
                        <NavItem>
                            <Glyphicon glyph='log-in' /> Sign In
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={ROUTES.PLACES}>
                        <NavItem>
                            <Glyphicon glyph='new-window' /> Sign Up
                        </NavItem>
                    </LinkContainer>
                </Nav>}
        </Nav>
    </Navbar>
);
