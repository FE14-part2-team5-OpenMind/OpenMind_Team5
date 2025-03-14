import React from "react";
import "./StyleInputTextArea.css"; // 같은 폴더 내에 스타일 파일이 있어야 함

const InputTextArea = ({ value, onChange, placeholder, ...rest }) => {
  return (
    <textarea
      className="input-textarea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputTextArea;
