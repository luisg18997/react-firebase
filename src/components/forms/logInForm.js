import React from 'react';
import {Input} from '../../util/forms'


const LogInForm = (props) => {
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
      <div className='form-row justify-content-center'>
      <div className='form-group col-8 col-md-6'>
        <i className='fa fa-envelope' style={{fontSize: 25}}></i>
          <Input touched={touched.email} value={values.email} error={error.email} type='email' name='email' handleChange={handleChange} placeholder='E-mail' handleBlur={handleBlur}/>
      </div>
      <div className="w-100"></div>
      <div className='form-group col-8 col-md-6'>
      <i className='fa fa-lock' style={{fontSize: 30}}></i>
      <Input touched={touched.password} value={values.password} error={error.password} type='password' name='password' handleChange={handleChange} placeholder='Password' handleBlur={handleBlur}/>
      </div>
      <div className="w-100"></div>
      <div className='form-row justify-content-center'>
        <button type="submit" disabled={!!valueButton} className="btn btn-primary mt-2 mb-2 pl-5 pr-5"><strong className='letter'>{valueButton?<span className="spinner-border spinner-border-s" role="status" aria-hidden="false"></span>:<span>LOG IN</span>}</strong></button>
      </div>
      </div>
    </form>
  )
}


export default LogInForm
