import React from "react";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
  label,
  required = false,
  disabled = false,
  icon = null,
  iconPosition = "left",
  ...rest
}) => {
  const hasIcon = !!icon;
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-3 text-white text-[18px]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {hasIcon && iconPosition === "left" && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
            {icon}
          </span>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full border border-[#002E55] text-white placeholder:text-[#969696] py-[12px] px-[16px] rounded-[12px] ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
