import React, {useState, useEffect} from 'react';
import history from '../../util/history'
import Formik from '../../util/formik'
import TodoForm from '../forms/todoForm'
import Fire from '../../config/Firebase'
import TodoValidation from '../forms/validations/todoValidation'
import {handleRedirect} from '../../util/redirectPage'
import {ModalSucces, ModalError} from '../../util/modal'

const Edit = () => {
    const [values, setValue] = useState({id:'', name:'',last_name:'', email:'', phone_number:''})
  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(true);
  console.log(history.location);

  useEffect(() =>{
    if(history.location.state !== undefined) {
        Fire.firestore().collection("data").doc(history.location.state.id).get()
        .then((doc) => {
          if(doc.exists) {
            const {name, last_name, email, phone_number} = doc.data()
            setValue({
              id: doc.id,
              name,
              last_name,
              email,
              phone_number
            })
            setLoading(false)
          } else {
            handleRedirect('/Dashboard/todo/list')
          }
        })
    } else {
      handleRedirect('/Dashboard/todo/list')
    }
  },[])
  const handleSubmit = (value) => {
    setStatus(true)
      const {name, last_name, email, phone_number} = value
      Fire.firestore().collection("data").doc(values.id)
      .set({
        name,
        last_name,
        email,
        phone_number,
      })
      .then(() =>{
        setStatus(false)
        ModalSucces('updating of the contact successfully', handleRedirect, '/Dashboard')
      })
      .catch((e) => {
        ModalError(e.message, handleRedirect, '/Dashboard')
      })
  }
  if(loading === true) {
    return(<div></div>)
  } else {
    return(
      <div className='container_fluid'>
        <div className="row justify-content-center align-items-center  minh-100">
          <div className="col-lg-10">
            <p className='text-center h2' style={{paddingBottom: '2%'}}><b><strong>Contact Edit</strong></b></p>
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
}


export default Edit
