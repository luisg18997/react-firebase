import React, {useState} from 'react'
import {handleRedirect} from '../../util/redirectPage'
import {ModalSucces, ModalError} from '../../util/modal'
import Fire from '../../config/Firebase'


function PostRegister(){
  const [status, setStatus] =useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus(true)
    try {
      Fire.auth().currentUser.sendEmailVerification()
      .then(() => {
        ModalSucces('Send email successfully', handleRedirect, '/PostRegister')
      })
      .catch(e => {
        ModalError(e.message);
        console.log(e.message);
      })
       setStatus(false)
    } catch (e) {
      console.error('error in obatin the return of ReSendEmail: ', e.message);
      setStatus(false)
      handleRedirect('/WrongRequest')
    }
  }
    return(
      <div id='PostRegister' className='container-fluid' style={{backgroundColor: '#FAFAFA'}}>
        <div className="row justify-content-center align-items-center minh-100">
          <div className="col-lg-8">
            <p className='text-center h3 text-break letter2' style={{paddingBottom: '2%'}}><b><strong>Confirm  your Email</strong></b></p>
            <p className='text-center h4 text-break' style={{paddingBottom: '1%'}}>You have registere successfully</p>
            <p className='text-center h5 text-break'>Please check your inbox for a confirmation email.</p>
            <p className='text-center h5 text-break'>click the link in the email to <span className='letter2'>confirm you email address</span>.</p>
            <div className='text-center' style={{paddingTop: '4%'}}>
              <button type='button' disabled={!!status} onClick={handleSubmit} className='btn btn-primary pr-4 pl-4'>{status?<span className="spinner-border spinner-border-s" role="status" aria-hidden="false"></span>:<span className='letter'>RE-SEND CONFIRMATION EMAIL</span>}</button>
            </div>
          </div>
        </div>
      </div>
    )

}

export default PostRegister
