import React,{useState, useEffect} from 'react';
import history from '../../util/history'
import Fire from '../../config/Firebase'
import {ModalConfirm,ModalSucces, ModalError} from '../../util/modal'
import {handleRedirect} from '../../util/redirectPage'


const handleDelete =(id) =>{
  Fire.firestore().collection('data').doc(id).delete().then(() => {
    ModalSucces('Contact successfully deleted!', handleRedirect, '/Dashboard/todo/list');
  }).catch((e) => {
      console.error("Error removing document: ", e.message);
      ModalError(e.message, handleRedirect, '/Dashboard')
    });
}

const handleDeleteQuestion = (id) =>{
  ModalConfirm('Sure of delete the contact?',handleDelete,id)
}

const redirectEdit = (id) => {
  handleRedirect('/Dashboard/todo/edit', {id})
}


const View = () => {
  const [value, setValue] = useState({id:'', name:'',last_name:'', email:'', phone_number:''})
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
  if(loading === true) {
    return(<div></div>)
  } else {
    return(
      <div className='container_fluid'>
        <div className="row justify-content-center align-items-center  minh-100">
          <div className="col-lg-10">
            <p className='text-center h2' style={{paddingBottom: '2%'}}><b><strong>Contact View</strong></b></p>
            <p className='text-break text-justify'><b><strong>Name:</strong></b> {value.name}</p>
            <p className='text-break text-justify'><b><strong>Last name:</strong></b> {value.last_name}</p>
            <p className='text-break text-justify'><b><strong>Email: </strong></b> {value.email}</p>
            <p className='text-break text-justify'><b><strong>Phone number: </strong></b> {value.phone_number}</p>
            <br />
            <button type='button' className='btn btn-success' onClick={()=>redirectEdit(value.id)}>Edit</button> <button type='button' className='btn btn-danger' onClick={() => handleDeleteQuestion(value.id)}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}


export default View
