import React from 'react'
import InputLabel from './InputLabel/InputLabel'
const CustomInputComponent = ({ descriptionRef }) => {
    return (
        <div className="mx-5 w-full d-flex flex-column justify-content-center align-items-center mb-5">
            <InputLabel labelName={"exampleInputName"} name={"Meeting Description"} />
            <textarea rows="3" ref={descriptionRef} className="form-control w-75" id="exampleInputName" />
        </div>
    )
}

export default CustomInputComponent
