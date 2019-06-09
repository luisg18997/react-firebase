import React, {useState} from 'react';
import {handleRedirect} from '../../util/redirectPage'
import {Link} from 'react-router-dom'
import Formik from '../../util/formik'
import ForgotPasswordForm from '../forms/forgotPasswordForm'
import ForgotPasswordValidation from '../forms/validations/forgotPasswordValidation'
import {ModalSucces, ModalError} from '../../util/modal'


const ForgotPassword = () => {
  const values = {password: '', password_confirmation: ''}
  const [status, setStatus] = useState(false)

  const handleSubmit = async(value, event) => {
    setStatus(true)
    try {
      ModalSucces('Password successfully changed', handleRedirect, '/')
       setStatus(false)
    } catch (e) {
        console.error('error in obatin the return of Resetpassword: ', e.message);
        setStatus(false)
    }
  }
  return(
    <div className='container_fluid'>
      <div className="row justify-content-center align-items-center  minh-100">
        <div className="col-lg-6">
          <p className='text-center text-brek h3'><b><strong>Forgot Password</strong></b></p>
          <Formik
          values={values}
          handleSubmit={handleSubmit}
          validationSchema={ForgotPasswordValidation}
          MyForm={ForgotPasswordForm}
          valueButton={status}
          />
          <p className='text-center'><Link to='/'>Back</Link></p>
        </div>
      </div>
    </div>
  )
}


export default ForgotPassword
