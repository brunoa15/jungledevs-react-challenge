import React from 'react'
import './CustomInput.scss'

const CustomInput = ({ value, setValue, placeholder, errors }) => {
  return (
    <div>
      <input
        className="custom-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />
      <div className="custom-input__errors">
        {errors?.length > 0 && errors.map((err) => (
          <p>{err}</p>
        ))}
      </div>
    </div>
  )
}

export default CustomInput
