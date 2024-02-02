import React from 'react'
import InputLabel from './InputLabel/InputLabel'
const SelectMeetingDate = ({ dateRef }) => {
    return (
        <div className="mx-5">
            <InputLabel labelName={"exampleInputDate"} name={"Date"} />
            <input type="date" ref={dateRef} className="form-control" id="exampleInputDate" />
        </div>
    )
}

export default SelectMeetingDate
