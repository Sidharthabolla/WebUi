import React from "react";

export const InputBox = ({name, inputId, handleData}) => {

  const handleOnchange = (data) => {
    let sendData = {}
    sendData[data.name] = data.value
    handleData(sendData)
  }

  const placeHolder = () => {
    const placeHolderText = "Field number " + inputId +" - one line"
    return placeHolderText
  }

  return (
    <>
      <input 
        type="text"
        name={name}
        className="inputBox"
        onChange = {e => handleOnchange(e.target)}
        placeHolder={placeHolder()}
      />
    </>
  );
}

export default InputBox;