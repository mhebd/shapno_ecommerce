import React from 'react';

function InputGroup({
  type,
  name,
  placeholder,
  value,
  onChange,
  prepend,
  append,
  label,
  style,
  inputStyle,
}) {
  return (
    <>
      {label && (
        <p className="mb-2">
          <label htmlFor="email">{label}</label>
        </p>
      )}
      <div className="input-group mb-3" style={style}>
        {append && (
          <div className="ig-append">
            <i className={`fas fa-${append}`} />
          </div>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputStyle}
        />
        {prepend && (
          <div className="ig-prepend">
            <i className={`fas fa-${prepend}`} />
          </div>
        )}
      </div>
    </>
  );
}

export default InputGroup;
