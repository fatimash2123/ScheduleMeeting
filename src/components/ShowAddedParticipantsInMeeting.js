import React from 'react'

const ShowAddedParticipantsInMeeting = ({ users }) => {
    const usersEditted = Object.values(users)

    return (
        <div className='mx-5 my-2 align-self-center w-75 d-flex justify-content-evenly'>
            {usersEditted.map((item, index) =>
                <div key={`added-participants-${index}`} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={item.picture} className="rounded-circle img-fluid " style={{ width: "100px", height: "90px" }}
                        alt="Avatar" />
                    <h5>{item.name.charAt(0).toUpperCase()}{item.name.slice(1)}</h5>
                </div>
            )}
        </div>
    )
}

export default ShowAddedParticipantsInMeeting
