import React,{useState} from 'react'
import {InputGroup, FormControl, Button} from "react-bootstrap";
import AddUser from './AddUser';
import {useDispatch} from 'react-redux';
import { searchUserContact } from '../../store/userConstactSlice';

function UserSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

    return (
        <div>
            <InputGroup>
               <FormControl
                    placeholder="Type user name"
                    value={searchTerm}
                    onChange={handleChange}
                    />
                  <Button variant="danger"
                    onClick={()=>{
                        dispatch(searchUserContact(searchTerm));
                        setSearchTerm("");
                    }
                   }
                  >
                    Search</Button>
                <AddUser/>
            </InputGroup>
        </div>
    )
}

export default UserSearch
