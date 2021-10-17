import React from 'react'
import NavBar from '../components/NavBar';
import UserContactBox from '../components/userContact/UserContactBox'
import UserSearch from '../components/userContact/UserSearch'

function Contacts() {
    return (
        <div>
            <NavBar/>
            <UserSearch/>
            <UserContactBox/>
        </div>
    )
}

export default Contacts;
