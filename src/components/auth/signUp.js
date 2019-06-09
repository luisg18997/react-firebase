import React, {useState} from 'react';
import Formik from '../../util/formik'
import SignUpForm from '../forms/signUpForm'
import SignUpValidation from '../forms/validations/signUpValidation'
import {Link} from 'react-router-dom'
import Fire from '../../config/Firebase'
import {ModalSucces, ModalError} from '../../util/modal'
import {handleRedirect} from '../../util/redirectPage'


const SingUp = () => {
  const values = {name: '', email:'', password: '', password_confirmation: ''}
  const [status, setStatus] =useState(false)

  const handleSubmit = async(value) => {
    setStatus(true)
    try {
      console.log(value);
      Fire.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        Fire.auth().currentUser.updateProfile({
          displayName: value.name
        })
        ModalSucces('user created successfully', handleRedirect, '/')
      })
      .catch(e => {
        ModalError(e.message);
        console.log(e.message);
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
            <p className='text-center text-break h3' style={{paddingBottom: '5%'}}><b><strong>Sign Up</strong></b></p>
            <Formik
            values={values}
            handleSubmit={handleSubmit}
            validationSchema={SignUpValidation}
            MyForm={SignUpForm}
            valueButton={status}
            />
            <p className='text-center'><Link to='/'>Back</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SingUp
