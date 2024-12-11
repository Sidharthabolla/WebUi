import { useState } from 'react'
import '../../style/Container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Container = (props) => {
  const [showDiv, setShowDiv] = useState(true)

  return(
    <div>
      {showDiv && 
       <div className="container">
        <div className="subtitle">
         {props.title === "Notes" && <div>
            <div className="icon-div">
              <FontAwesomeIcon icon={faNoteSticky} color="#457B9D"/>
            </div>
          </div>}
          <h3>{props.title}</h3>
          <div className="close" onClick={()=>setShowDiv(false)}>
            <FontAwesomeIcon icon={faXmark} color="gray"/>
          </div>
        </div>
        {props.children}
      </div>}
    </div>
  )
}

export default Container;
