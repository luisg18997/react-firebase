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
    <div className='form-row justify-content-center'>
    <div className='form-group col-8 col-md-6'>
        <Input touched={touched.name} value={values.name} error={error.name} type='text' name='name' handleChange={handleChange} placeholder='Name' handleBlur={handleBlur}/>
    </div>
    <div className="w-100"></div>
    <div className='form-group col-8 col-md-6'>
    <Input touched={touched.last_name} value={values.last_name} error={error.last_name} type='text' name='last_name' handleChange={handleChange} placeholder='Last name' handleBlur={handleBlur}/>
    </div>
    <div className="w-100"></div>
    <div className='form-group col-8 col-md-6'>
        <Input touched={touched.email} value={values.email} error={error.email} type='email' name='email' handleChange={handleChange} placeholder='E-mail' handleBlur={handleBlur}/>
    </div>
    <div className="w-100"></div>
    <div className='form-group col-8 col-md-6'>
    <Input touched={touched.phone_number} value={values.phone_number} error={error.phone_number} type='text' name='phone_number' handleChange={handleChange} placeholder='Phone number' handleBlur={handleBlur}/>
    </div>
    <div className="w-100"></div>
    <div className='form-row justify-content-center'>
      <button type="submit" disabled={!!valueButton} className="btn btn-primary mt-2 mb-2 pl-5 pr-5"><strong className='letter'>{valueButton?<span className="spinner-border spinner-border-s" role="status" aria-hidden="false"></span>:<span>SEND</span>}</strong></button>
    </div>
    </div>
    </form>
  )
}


export default ForgotPassword
