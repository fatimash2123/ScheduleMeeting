import React, { useRef, useState } from 'react'
import InputLabel from './InputLabel/InputLabel'
import ShowAddedParticipantsInMeeting from './ShowAddedParticipantsInMeeting'
import ShowAllUsersInOrganization from './ShowAllUsersInOrganization/ShowAllUsersInOrganization'
import CustomButtonComponent from './CustomButtonComponent'
import user1Image from '../assests/Images/user1.jpg';
import user2Image from '../assests/Images/user2.jpg';
import user3Image from '../assests/Images/user3.jpg';

const InvitePeople = ({ handleOnSceduleMeeting }) => {
    const users = [
        { id: 1, name: "user1", email: "user1@example.com", picture: user1Image },
        { id: 2, name: "user2", email: "user2@example.com", picture: user2Image },
        { id: 3, name: "user3", email: "user3@example.com", picture: user3Image },
        { id: 4, name: "fatima", email: "fatima@example.com", picture: user1Image },
        { id: 5, name: "ayesha", email: "ayesha@example.com", picture: user2Image }
    ]
    const [searchedUsers, setSearchedUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState({})

    const searchRef = useRef()

    const searchUser = () => {
        const search = searchRef.current.value
        const filteredUsers = users.filter(user => user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        setSearchedUsers(filteredUsers)
    }

    const addUser = (userId) => {
        const userAlreadyPresent = selectedUsers[userId]
        if (!userAlreadyPresent) {
            const user = users.find(user => user.id === userId)
            setSelectedUsers(oldState => ({ ...oldState, [user.id]: user }))
        }
        console.log("selected users are=", selectedUsers)
    }

    return (
        <div className="mx-5 mb-5 d-flex flex-column justify-content-center w-full">

            <div className='d-flex flex-column align-items-center mb-5'>
                <InputLabel labelName={"exampleInputSearch"} name={"People to Invite"} />
                <div className='w-75 d-flex'>
                    <input ref={searchRef} type="text" className="form-control w-75" id="exampleInputSearch" />
                    <CustomButtonComponent className="w-25 align-self-center" title={"Search"}
                        handleOnClick={searchUser} />
                </div>
            </div>

            <ShowAddedParticipantsInMeeting users={selectedUsers} />
            <ShowAllUsersInOrganization selectedUsers={selectedUsers} addUser={addUser} users={searchedUsers.length > 0 ? searchedUsers : users} />
            <CustomButtonComponent handleOnClick={() => { handleOnSceduleMeeting(selectedUsers) }} className="w-75 align-self-center" title={"Schedule Meeting"} />
        </div>
    )
}

export default InvitePeople
