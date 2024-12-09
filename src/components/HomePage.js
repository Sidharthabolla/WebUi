import React from 'react'
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="title">
        <h1>Home Page</h1>
      </div>
      <div className="mainContainer homePage">
        <button onClick={()=>navigate('form1')}>Form 1</button>
        <button onClick={()=>navigate('form2')}>Form 2</button>
      </div>
    </div>
  )
}

export default HomePage;
