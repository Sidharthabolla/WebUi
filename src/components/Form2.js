import React, { useState } from 'react'
import Container from './shared/Container';
import Notes from './shared/Notes';
import InputBox from './shared/InputBox';
import {callApi} from '../utils/helper'
import Checkbox from './shared/CheckBox';

export const Form2 = () => {
  const [postData, setPostData] = useState ({
    form2CheckBox1: false,
    form2CheckBox2: false,
    form2Input1: '',
    form2Notes: ''
  })

  const handleData = (data) => {
    const objKey = Object.keys(data)[0];
    const objVal = Object.values(data)[0];
    const newObj = postData;
    newObj[objKey] = objVal
    setPostData(newObj)
  };

  const apiPost = () => {
    callApi(postData);
  }

  return (
    <div>
      <div className="title">
        <h1>Form 2</h1>
      </div>
      <div className="mainContainer">
        <Container title={"Form 2"}>
          <div className="inputContainer">
            <Checkbox name={'form2CheckBox1'} inputId={1} handleData={handleData} />
            <Checkbox name={'form2CheckBox2'} inputId={1} handleData={handleData} />
            <InputBox name={'form2Input1'} inputId={1} handleData={handleData} />
          </div>
        </Container>
        <Notes name={'form2Notes'} handleData={handleData} />
      </div>
      <div className="submit-button">
        <button onClick={() => apiPost()}>Submit</button>
      </div>
    </div>
  )
}

export default Form2;