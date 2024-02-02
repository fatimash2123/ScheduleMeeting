import React from 'react'
import styles from "./InputLabel.module.css"
const InputLabel = ({ labelName, name }) => {
    return (
        <label htmlFor={labelName} className={`form-label ${styles.label}`}>{name}</label>
    )
}

export default InputLabel
