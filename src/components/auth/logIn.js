import React, {useState} from  'react'
import Formik from '../../util/formik'
import LogInForm from '../forms/logInForm'
import LogInValidation from '../forms/validations/logInValidation'


const LogIn = () => {
    const values = {username: '', password: ''}
    const [status, setStatus] =useState(false)

    const handleSubmit = async(value) => {
      setStatus(true)
      try {
        console.log(value);
        setStatus(false)
      } catch (e) {
        console.error('error in obatin the return of Login: ', e.message);
        setStatus(false)
      }
    }

  return(
    <div className='container_fluid'>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5 col-md-10">
          <p className='text-center text-brek h3'><b><strong>Log In</strong></b></p>
          <Formik
          values={values}
          handleSubmit={handleSubmit}
          validationSchema={LogInValidation}
          MyForm={LogInForm}
          valueButton={status}
          />
        </div>
      </div>
    </div>
  )
}


export default LogIn
