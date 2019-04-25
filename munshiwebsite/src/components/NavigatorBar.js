import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'
import logo from '../assets/Logo-small.png'

const Styles = styled.div`
    .navbar{
        background-color: #e3f2fd;
    }
    
    `
;

export const NavigationBar = ()=>(
    <Styles>
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">
            <img src={logo} width="55" height="55" className="d-inline-block align-top" alt=""></img>
                
            </a>
            
            
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Signup">Sign Up</Nav.Link></Nav.Item>
                
            </Nav>
        </Navbar>

    </Styles>
)
