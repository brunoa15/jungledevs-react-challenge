import React from 'react'
import './CustomInput.scss'

const CustomInput = ({ value, setValue, placeholder }) => {
  return (
    <input
      className="custom-input"
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
    />
  )
}

export default CustomInput
