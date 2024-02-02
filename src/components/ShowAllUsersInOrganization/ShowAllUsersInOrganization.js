import React from 'react'
import ParticipantCard from '../ParticipantCard/ParticipantCard'
import styles from "./ShowAllUsersInOrganization.module.css"
const ShowAllUsersInOrganization = ({ users, addUser, selectedUsers }) => {
    return (
        <div className={`mx-5 my-5 align-self-center w-75 ${styles.scrollContainer}`} >
            {users.map((item, index) =>
                <ParticipantCard
                    selectedUsers={selectedUsers}
                    addUser={addUser}
                    userId={item.id}
                    name={item.name} email={item.email} picture={item.picture} key={`participant-${index}`} />
            )}
        </div>
    )
}

export default ShowAllUsersInOrganization
