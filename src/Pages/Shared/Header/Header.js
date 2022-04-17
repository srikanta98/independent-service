import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import tra from '../../../images/experts/traveller.png';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <>

                <Navbar  collapseOnSelect expand="lg" sticky='top' bg="light" variant="light" height="">
                    <Container className=''>
                        <Navbar.Brand as={Link} to="/">
                            <img height={50} src={tra} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                        <Navbar.Collapse id="responsive-navbar-nav ">
                            <Nav className="me-auto">
                                <Nav.Link  href="home#services">Services</Nav.Link>
                                <Nav.Link  href="home#experts">Guide</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                               
                            </Nav>
                            <Nav>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                                {
                                    user ?
                                        <button className='btn btn-link text-danger' onClick={handleSignOut}>Signout</button>
                                        :
                                        <Nav.Link as={Link} to="/login" >
                                            Login
                                        </Nav.Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </>
        </div>
    );
};

export default Header;