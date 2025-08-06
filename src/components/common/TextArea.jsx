import React from 'react'

const TextArea = ({
  name = 'message',
  value,
  onChange,
  placeholder = '',
  className = '',
  label,
  required = false,
  disabled = false,
  rows = 4,
  ...rest
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-3 text-white text-[18px]"
        >
          {label} {required && <span className="text-white">*</span>}
          
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`w-full border border-[#002E55] placeholder:text-[#969696] py-[12px] px-[16px] rounded-[12px] ${className}`}
        {...rest}
      ></textarea>
    </div>
  )
}

export default TextArea
