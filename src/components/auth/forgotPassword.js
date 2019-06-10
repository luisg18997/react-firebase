import React, {useState, useEffect} from 'react';
import {handleRedirect} from '../../util/redirectPage'
import {Link} from 'react-router-dom'
import Formik from '../../util/formik'
import ForgotPasswordForm from '../forms/forgotPasswordForm'
import ForgotPasswordValidation from '../forms/validations/forgotPasswordValidation'
import {ModalSucces, ModalError} from '../../util/modal'
import history from '../../util/history';
import Fire from '../../config/Firebase'


const ForgotPassword = () => {
  const [validate, setValidate] = useState(false);
  const values = {password: '', password_confirmation: ''}
  const [status, setStatus] = useState(false)
  const [oobCode, setOobCode]  = useState('')

useEffect(() => {
  if(history.location.state !== undefined) {
    Fire.auth().verifyPasswordResetCode(history.location.state.oobCode)
    .then((res) =>{
      setValidate(true)
      setOobCode(history.location.state.oobCode)
    })
    .catch((e) =>{
      console.log(e.message);
      ModalError(e.message,handleRedirect, '/');
    })
  } else {
    handleRedirect('/')
  }
},[])

  const handleSubmit = async(value, event) => {
    setStatus(true)
    try {
      Fire.auth().confirmPasswordReset(oobCode, value.password)
      .then((res) =>{
          ModalSucces('Password successfully changed', handleRedirect, '/')
      })
      .catch((e) =>{
        console.log(e.message);
        ModalError(e.message,handleRedirect, '/');
      })
       setStatus(false)
    } catch (e) {
        console.error('error in obatin the return of Resetpassword: ', e.message);
        setStatus(false)
    }
  }

  if(validate === true) {
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
  } else {
    return(<div></div>)
  }

}


export default ForgotPassword
