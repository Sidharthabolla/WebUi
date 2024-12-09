const placeHolder = (val) => {
  const placeHolderText = "Field number " + val +" - one line"
  return placeHolderText
}

export const renderInputFields = (inputFieldsNumber) => {
  return (
    <div className="inputContainer">
      {Array.from({ length: inputFieldsNumber }, (_, index) => (
        <input 
          type="text"
          key={index} 
          name={"input-"+index}
          className="inputBox"
          placeHolder={placeHolder(index+1)}
        />
      ))}
    </div>
  );
}

export const renderCheckboxFields = (inputFieldsNumber) => {
  return (
    <div className="inputContainer">
      {Array.from({ length: inputFieldsNumber }, (_, index) => (
        <div>
          <h4>Question {index + 1}</h4>
          <div className="checkbox-input">
            <input 
              type="checkbox"
              key={index} 
              name={"checkbox-"+index}
            />
            <div className="description">
              <label>DESCRIPTION {index+1}</label>
              <span>checkbox {index+1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const callApi = (notes) => {
  console.log(notes)
}