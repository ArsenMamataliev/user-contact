import React from "react";
import { useDispatch } from "react-redux";
import {Toast, Row, Col} from "react-bootstrap"; 
import { deleteUserContact } from "../../store/userConstactSlice";

function UserContactItem({name, phone, id}) {
    const dispatch = useDispatch();
   
    return (
        <div>
            <Row  className = "contacts">
                <Col>
                    <Toast onClick={() => 
                        {
                            dispatch(deleteUserContact(id));
                        }
                    }
                    >
                        <Toast.Header>
                                <strong className="me-auto">{name}</strong>
                        </Toast.Header>
                        <Toast.Body>
                            <a href="tel:{phone}">{phone}</a>
                        </Toast.Body>
                    </Toast>
               </Col>
            </Row>  
        </div>
    )
}

export default UserContactItem
