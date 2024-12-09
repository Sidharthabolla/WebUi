import React, { useState } from 'react'
import Container from './shared/Container';
import Notes from './shared/Notes';
import InputBox from './shared/InputBox';
import {callApi} from '../utils/api'

export const Form1 = () => {
  const [postData, setPostData] = useState ({
    form1Input1: '',
    form1Input2: '',
    form1Notes: ''
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
        <h1>Form 1</h1>
      </div>
      <div className="mainContainer">
        <Container title={"Form 1"}>
          <div className="inputContainer">
            <InputBox name={'form1Input1'} inputId={1} handleData={handleData} />
            <InputBox name={'form1Input2'} inputId={2} handleData={handleData} />
          </div>
        </Container>
        <Notes name={'form1Notes'} handleData={handleData} />
      </div>
      <div className="submit-button">
        <button onClick={() => apiPost()}>Submit</button>
      </div>
    </div>
  )
}

export default Form1;