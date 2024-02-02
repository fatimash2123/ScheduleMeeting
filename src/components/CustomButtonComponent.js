import React from 'react'

const CustomButtonComponent = ({ title, className, handleOnClick }) => {
    return (
        <button type="button"
            onClick={handleOnClick}
            className={`btn btn-primary btn-outline-info ${className}`}>{title}</button>
    )
}

export default CustomButtonComponent
