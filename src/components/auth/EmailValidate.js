import React, {useState, useEffect } from 'react';
import {handleRedirect} from '../../util/redirectPage'
import history from '../../util/history';
import Fire from '../../config/Firebase'

const EmailConfirmation = () => {
  const [validate, setValidate] = useState(false)
useEffect(() => {
  if(history.location.state !== undefined) {
    Fire.auth().applyActionCode(history.location.state.oobCode)
    .then((res) => {
      setValidate(true)
    })
    .catch((e) => {
      console.log(e.message);
    })
  } else {
    handleRedirect('/')
  }
},[])
  if(validate === true) {
    return (
      <div className='container-fluid' style={{ backgroundColor: '#FAFAFA' }}>
        <div className="row justify-content-center align-items-center minh-100">
          <div className="col-lg-8">
            <p className='text-center h4 text-break letter2' style={{ paddingBottom: '2%' }}><b><strong>Thanks for you registration in our platform!</strong></b></p>
            <p className='text-center h5 text-break'>Welcome to React-Firebase</p>
            <div className='text-center' style={{ paddingTop: '2%' }}>
              <button type='button' onClick={() => handleRedirect('/')} className='btn btn-primary pr-4 pl-4' style={{ backgroundColor: '#292D5A' }}><span className='letter'><b>NOW YOU CAN LOG IN</b></span></button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return(<div></div>)
}

}

export default EmailConfirmation
