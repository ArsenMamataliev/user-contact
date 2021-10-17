import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Button, Modal,InputGroup,FormControl} from 'react-bootstrap';
import { addContact } from '../../store/userConstactSlice';

function AddUser() {
    const [show, setShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [personName, setPersonName] = useState('');
    const dispatch = useDispatch();


    const savePhoneNumber = e => setPhoneNumber(e.target.value);
    const savePersonName = e => setPersonName(e.target.value);
   
    const saveDefaultValue = () => {
        setPhoneNumber('');
        setPersonName('');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <div style={{display:"block"}}>
        <Button variant="primary" onClick={handleShow}>
          Add new task
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD USER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <InputGroup className="mb-5">
              <FormControl
                  placeholder="Person name"
                  aria-describedby="basic-addon1"
                  onChange = {savePersonName}
                  />
                <FormControl
                  placeholder="Phone number"
                  aria-describedby="basic-addon1"
                  onChange = {savePhoneNumber}
                  />
              </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
            onClick={()=>{
              dispatch(addContact({personName, phoneNumber}));
              handleClose();
              saveDefaultValue()
            }}
          >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default AddUser;