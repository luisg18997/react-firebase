import React, {useState} from 'react';
import Formik from '../../util/formik'
import TodoForm from '../forms/todoForm'
import Fire from '../../config/Firebase'
import TodoValidation from '../forms/validations/todoValidation'
import {ModalSucces, ModalError} from '../../util/modal'
import {handleRedirect} from '../../util/redirectPage'

const Add = () => {
  const values = {name:'', last_name:'', email:'', phone_number:''}
  const [status, setStatus] = useState(false)

  const handleSubmit = (value) => {
    setStatus(true)
    const {name, last_name, email, phone_number} = value
      Fire.firestore().collection("data")
      .add({
        name,
        last_name,
        email,
        phone_number,
      })
    .then(() =>{
      setStatus(false)
      ModalSucces('Contact created successfully', handleRedirect, '/Dashboard')
    })
    .catch((e) => {
      ModalError(e.message, handleRedirect, '/Dashboard')
    })
  }
  return(
    <div className='container_fluid'>
      <div className="row justify-content-center align-items-center  minh-100">
        <div className="col-lg-10">
          <p className='text-center h2' style={{paddingBottom: '2%'}}><b><strong>Contact Create</strong></b></p>
          <Formik
          values={values}
          handleSubmit={handleSubmit}
          validationSchema={TodoValidation}
          MyForm={TodoForm}
          valueButton={status}
          />
        </div>
      </div>
    </div>
  )
}


export default Add
