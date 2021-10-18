import React from 'react';
import {Container, Navbar, Nav, DropdownButton, Dropdown} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useSelector} from  "react-redux";

function NavBar() {
    
    const contacts = useSelector(state => state.userContact.userList);
    const history = useHistory();
    const userName = localStorage.getItem("userName");
    

    return (
        <div>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand> Contact List</Navbar.Brand>
                    <Nav className="me-auto">
                        <DropdownButton  
                            variant="secondary" 
                            drop={userName.length>10? "down":"start"}
                            title={userName}
                          >
                            
                            <Dropdown.Item 
                                onClick={()=> 
                                    {
                                    history.push("/auth");
                                    localStorage.clear();
                                    }
                                }
                            >
                                Sign out
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item >Totaly: {contacts.length}</Dropdown.Item>
                            
                        </DropdownButton>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
