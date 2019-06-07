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
      <div className='form-group'>
        <Input touched={touched.username} value={values.username} error={error.username} type='text' name='username' handleChange={handleChange} placeholder='E-mail or user name' handleBlur={handleBlur}/>
      </div>
      <div className='form-group'>
      <Input touched={touched.password} value={values.password} error={error.password} type='password' name='password' handleChange={handleChange} placeholder='Password' handleBlur={handleBlur}/>
      </div>
      <div className='form-row justify-content-center'>
        <button type="submit" disabled={!!valueButton} className="btn btn-primary mt-2 mb-2 pl-5 pr-5"><strong className='letter'>{valueButton?<span className="spinner-border spinner-border-s" role="status" aria-hidden="false"></span>:<span>LOG IN</span>}</strong></button>
      </div>
    </form>
  )
}


export default LogInForm
