import React from 'react'
import {Input} from '../../util/forms'


const PasswordEmailConfirmationForm = (props) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    error,
    touched,
    valueButton
  } =props

  return(
    <form onSubmit={handleSubmit}>
      <div className='form-row justify-content-center'>
      <div className='form-group col-lg-6 col-md-4'>
      <i className='fa fa-envelope' style={{fontSize: 25}}></i>
        <Input touched={touched.email} value={values.email} error={error.email} type='email' name='email' handleChange={handleChange} placeholder='E-mail' handleBlur={handleBlur}/>
      </div>
      <div className="w-100"></div>
      <div className='form-row justify-content-center'>
        <button type='button' disabled={valueButton} onClick={handleSubmit} className="btn btn-primary mt-2 mb-2 pl-5 pr-5">{valueButton?<span className="spinner-border spinner-border-s" role="status" aria-hidden="false"></span>:<span className='letter'>SEND</span>}</button>
      </div>
      </div>
    </form>
  )
}

export default PasswordEmailConfirmationForm;
