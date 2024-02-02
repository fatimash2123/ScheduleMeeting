import React from 'react'
import styles from "./ParticipantCard.module.css"
const ParticipantCard = ({ name, email, picture, addUser, userId, selectedUsers }) => {
    return (
        <div onClick={() => { addUser(userId) }}
            className={`${styles.participantCard} d-flex flex-row justify-content-between align-items-center p-2 border border-primary my-2 border-5`} style={{ height: "150px" }}>
            <div className='d-flex flex-row align-items-center w-full'>
                <img src={picture} className="rounded-circle" style={{
                    width: "100px",
                    height: "100px", backgroundColor: "black", objectFit: "fit"
                }}
                    alt="Avatar" />
                <h4 className='ms-3'>{name}</h4>
                {selectedUsers[userId] ? <i style={{ fontSize: "32px" }} className="fa">&#xf00c;</i> : null}
            </div>
            <h4>{email}</h4>
        </div>
    )
}

export default ParticipantCard
