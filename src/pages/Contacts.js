import React from 'react'
import NavBar from '../components/NavBar';
import UserContactBox from '../components/userContact/UserContactBox'
import UserSearch from '../components/userContact/UserSearch'

function Contacts() {
    return (
        <div>
            <div className="navbarPage">
            <NavBar/>
            </div>
            <div className="contactsPage">
            <UserSearch/>
            <UserContactBox/>
            </div>
        </div>
    )
}

export default Contacts;
