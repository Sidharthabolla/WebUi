import React, {useState} from "react";

export const Checkbox = ({name, inputId, handleData}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnchange = (data) => {
    setIsChecked(data.checked);
    let sendData = {}
    sendData[data.name] = data.checked
    handleData(sendData)
  }

  return (
    <div>
      <h4>Question {inputId}</h4>
      <div className="checkbox-input">
        <input 
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange = {e => handleOnchange(e.target)}
        />
        <div className="description">
          <label>DESCRIPTION {inputId}</label>
          <span>checkbox {inputId}</span>
        </div>
      </div>
    </div>
  )
}

export default Checkbox;
