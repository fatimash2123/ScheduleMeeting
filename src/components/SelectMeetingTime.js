import React from 'react'
import InputLabel from './InputLabel/InputLabel'
const SelectMeetingTime = ({ timeRef }) => {
    return (
        <div className="mx-5">
            <InputLabel labelName={"exampleInputTime"} name={"Time"} />
            <input type="time" ref={timeRef} className="form-control" id="exampleInputTime" />
        </div>
    )
}

export default SelectMeetingTime
