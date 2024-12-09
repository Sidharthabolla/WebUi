import { useState } from 'react'
import '../../style/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Form = (props) => {
  const [showDiv, setShowDiv] = useState(true)

  return (
    <div>
      {showDiv && 
       <div className="form">
        <div className="subtitle">
          <h3>Form {props.title}</h3>
          <div className="close" onClick={()=>setShowDiv(false)}>
            <FontAwesomeIcon icon={faXmark} color="gray"/>
          </div>
        </div>
        { renderInputFields() }
      </div>}
    </div>
  )
}

export default Form;