import React from 'react'; 
import { useSelector } from 'react-redux';
import UserContactItem from './UserContactItem';
 
function UserContactBox() {
    const contacts = useSelector(state => state.userContact);
    const userName = localStorage.getItem("userName");
    return (
        <div className = "constactBox">
            { contacts.userList.length === 0 ?
                <p> No user contact. Please <strong>{userName}</strong>, update application.</p> :
                contacts.userList.map(user=>
                    <UserContactItem
                        id = {user.id}
                        key = {user.id}
                        name = {user.name}
                        phone = {user.phone}
                    />
                )
            }
        </div>
    )
}

export default UserContactBox
