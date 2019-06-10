import React, {useState} from  'react'
import {Link} from 'react-router-dom'
import Formik from '../../util/formik'
import LogInForm from '../forms/logInForm'
import LogInValidation from '../forms/validations/logInValidation'
import Fire from '../../config/Firebase'
import {ModalError} from '../../util/modal'
import {handleRedirect} from '../../util/redirectPage'


const LogIn = () => {
    const values = {email: '', password: ''}
    const [status, setStatus] =useState(false)

    const handleSubmit = async(value) => {
      setStatus(true)
      try {
        Fire.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          console.log(res.user);
          if(res.user.emailVerified === true) {
            handleRedirect('/Dashboard')
          }else{
              ModalError('email no verified');
          }
        })
        .catch(e => {
          ModalError(e.message);
          console.log(e);
        })
        setStatus(false)
      } catch (e) {
        console.error('error in obatin the return of Login: ', e.message);
        setStatus(false)
      }
    }

  return(
    <div className='container_fluid' style={{paddingLeft: '5%', paddingRight: '5%'}}>
      <div className="row justify-content-center align-items-center  minh-100">
        <div className="col-lg-6">
          <div className='card'>
            <div className='card-body'>
            <p className='text-center text-break h3' style={{paddingBottom: '5%'}}><b><strong>Log In</strong></b></p>
            <Formik
            values={values}
            handleSubmit={handleSubmit}
            validationSchema={LogInValidation}
            MyForm={LogInForm}
            valueButton={status}
            />
            <p className='text-center text-break'>Don`t have an acount? <Link to='SignUp'>sing up</Link> instantly</p>
            <p className='text-center text-break'><Link to='EmailConfirmation'>Forgot password?</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LogIn
