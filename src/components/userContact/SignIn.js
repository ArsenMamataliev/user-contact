import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Alert} from "react-bootstrap"

function SignIn() {
    const history = useHistory();

    const [userName, setUserName] = useState("");
    const [eMail, setEMail] = useState("");
    const [password, setPassword] = useState("");
    const [alertShow, setAlertShow] = useState(false);

    const saveUsername = e => setUserName(e.target.value);
    const saveEMail = e => setEMail(e.target.value);
    const savePassword = e => setPassword(e.target.value);

    const saveToLocalStorage = () => {
        localStorage.setItem("userName", userName);
        localStorage.setItem("e-mail", eMail);
        localStorage.setItem("password", password);
    }

    return (
        
        <form action="" className="form-container">
            { alertShow &&
            <Alert variant="danger">
               Please fill out all fields!
            </Alert>
            }
            <h1>Login</h1>

            <label for="email"><b>Name</b></label>
            <input type="text" 
                placeholder="Enter your name"
                name="name" 
                value={userName}
                required 
                onChange={saveUsername}
            />

            <label for="email"><b>Email</b></label>
            <input type="text"
                placeholder="Enter Email" 
                name="email"
                value={eMail}
                required 
                onChange={saveEMail}
            />

            <label for="psw"><b>Password</b></label>
            <input type="password" 
                placeholder="Enter Password"
                name="psw"
                value={password}
                required 
                onChange={savePassword}
            />

            <button type="submit" className="btn"
                onClick = {()=>
                    {
                    if(userName && eMail && password){
                        saveToLocalStorage();
                        history.push("/contacts")
                    } else {
                        setAlertShow(true)
                    }
                    
                    }
                }
            >
            Login
            </button>
        </form>    
    )
}

export default SignIn
