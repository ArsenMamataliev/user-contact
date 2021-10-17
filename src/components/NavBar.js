import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function NavBar() {
    const history = useHistory();
    const userName = localStorage.getItem("userName");

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand> Contact List</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title={userName} id="navbarScrollingDropdown">
                      <NavDropdown.Item 
                        onClick={()=> 
                            {
                            history.push("/auth");
                            localStorage.clear();
                            }
                        }
                        >
                        Sign out
                      </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
