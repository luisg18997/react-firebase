import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Formik from '../../util/formik'
import PasswordEmailConfirmationForm from '../forms/passwordEmailConfirmationForm'
import PasswordEmailConfirmationValidation from '../forms/validations/passwordEmailConfirmationValidation'
import {ModalError} from '../../util/modal'
import {handleRedirect} from '../../util/redirectPage'
import Fire from '../../config/Firebase'


const EmailConfirmation = () => {
  const values = {email: ''}
  const [status, setStatus] =useState(false)
  const handleSubmit = async(value) => {
    setStatus(true)
    try {
      Fire.auth().sendPasswordResetEmail(value.email,{url: 'http://localhost:3000'})
      .then(res => {
        console.log(res);
        handleRedirect('/ForgotPassword')
      }).catch(e => {
        ModalError(e.message);
        console.log(e.message);
      })

       setStatus(false)
    } catch (e) {
      console.error('error in obatin the return of CreateConfirmation: ', e.message);
      setStatus(false)
    }
  }

  return(
    <div className='container_fluid'>
      <div className="row justify-content-center align-items-center  minh-100">
        <div className="col-lg-6">
          <p className='text-center h3 text-break letter2' style={{paddingBottom: '2%'}}><b><strong>Forgot your password?</strong></b></p>
          <p className='text-center h5 text-break' style={{paddingBottom: '2%'}}>Don`t  worry. Reseting your password is easy, just tell us the email address you registered  with zoom.</p>
          <Formik
          values={values}
          handleSubmit={handleSubmit}
          validationSchema={PasswordEmailConfirmationValidation}
          MyForm={PasswordEmailConfirmationForm}
          valueButton={status}
          />
          <p className='text-center'><Link to='/'>Back</Link></p>
        </div>
      </div>
    </div>
  )
}


export default EmailConfirmation
