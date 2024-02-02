import styles from "./ScheduleMeeting.module.css"
import CustomInputComponent from "../../components/CustomInputComponent";
import SelectMeetingDate from "../../components/SelectMeetingDate";
import SelectMeetingTime from "../../components/SelectMeetingTime";
import InvitePeople from "../../components/InvitePeople";
import { useRef } from "react";
function ScheduleMeeting() {
    const descriptionRef = useRef()
    const timeRef = useRef()
    const dateRef = useRef()

    const sceduleMeeting = (selectedUsers) => {
        const description = descriptionRef.current.value
        const time = timeRef.current.value
        const date = dateRef.current.value

        console.log("description=", description)
        console.log("time=", time)
        console.log("date=", date)
        console.log("selectedUsers=", selectedUsers)

        if (!description || !time || !date) {
            alert("Fields are not completely filled!")
            return
        }
        if (Object.values(selectedUsers).length === 0) {
            alert("No Participants are added for meeting");
            return
        }
        else {
            const participants = Object.values(selectedUsers).map(item => item.name)
            alert(`A meeting is scheduled at time ${time} on ${date} with the participants ${participants.join(", ")}`)

        }
    }
    return (
        < >
            <h1 className={styles.heading}>Schedule Meeting</h1>
            <hr />

            <CustomInputComponent descriptionRef={descriptionRef} />
            <div className="d-flex flex-row w-full justify-content-center align-items-center mb-5 mx-5">
                <SelectMeetingDate dateRef={dateRef} />
                <SelectMeetingTime timeRef={timeRef} />
            </div>

            <InvitePeople handleOnSceduleMeeting={sceduleMeeting} />
        </>
    );
}

export default ScheduleMeeting;
