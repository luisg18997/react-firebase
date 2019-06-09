import React from 'react';
import {Input} from '../../util/forms'


const ForgotPassword = (props) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    error,
    touched,
    valueButton,
  } = props
  return(
    <form onSubmit={handleSubmit}>
    <div className='form-group col-8 col-md-6'>
    <i className='fa fa-lock' style={{fontSize: 30}}></i>
    <Input touched={touched.password} value={values.password} error={error.password} type='password' name='password' handleChange={handleChange} placeholder='Password' handleBlur={handleBlur}/>
    </div>
    <div className="w-100"></div>
    <div className='form-group col-8 col-md-6'>
    <i className='fa fa-exclamation-triangle' style={{fontSize: 30}}></i>
    <Input touched={touched.password_confirmation} value={values.password_confirmation} error={error.password_confirmation} type='password' name='password_confirmation' handleChange={handleChange} placeholder='Password confirmation' handleBlur={handleBlur}/>
    </div>
    <div className="w-100"></div>
    <div className='form-row justify-content-center'>
      <button type="submit" disabled={!!valueButton} className="btn btn-primary mt-2 mb-2 pl-5 pr-5"><strong className='letter'>{valueButton?<span className="spinner-border spinner-border-s" role="status" aria-hidden="false"></span>:<span>SEND</span>}</strong></button>
    </div>
    </form>
  )
}


export default ForgotPassword
