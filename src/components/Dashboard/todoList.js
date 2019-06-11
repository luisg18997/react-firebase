import React, {useState, useEffect} from 'react';
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

const redirectView = (id) => {
  handleRedirect('/Dashboard/todo/view', {id})
}

const List = () => {
  const [contact, setContact] = useState(null)
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const data = []
    Fire.firestore().collection("data").get()
    .then((Snaptshot) => {
      if(Snaptshot.empty  === false) {
        Snaptshot.forEach((doc) =>{
          if (doc.exists) {
            const {name, last_name, email, phone_number} = doc.data()
            data.push({
              id: doc.id,
              name,
              last_name,
              email,
              phone_number
            })
          }
        })
        setContact(data)
      }
      setLoading(false)
    });
},[])
if(loading === true) {
  return(<div></div>)
} else {
let contet;
  if(contact ===null){
    contet = (<tr>
       <td colSpan='6'><p className='text-center'><b><strong>Not Found contact, please add</strong></b></p></td>
    </tr>)
  } else {
    contet = contact.map((res) => (
      <tr>
        <td><p className='text-center'>{res.name}</p></td>
        <td><p className='text-center'>{res.last_name}</p></td>
        <td><p className='text-center'>{res.phone_number}</p></td>
        <td><p className='text-center'>{res.email}</p></td>
        <td><button type='button' className='btn btn-info mx-auto' onClick={()=>redirectView(res.id)}>View</button> <button type='button' className='btn btn-success ml-2 mx-auto' onClick={()=>redirectEdit(res.id)}>Edit</button> <button type='button' className='btn btn-danger ml-2 mx-auto' onClick={() => handleDeleteQuestion(res.id)}>Delete</button></td>
      </tr>
    ))
  }
    return(
      <div className='container_fluid'>
        <div className="row justify-content-center align-items-center  minh-100">
          <div className="col-lg-10">
            <p className='text-center h2' style={{paddingBottom: '2%'}}><b><strong>Contact List</strong></b></p>
            <div className='table-responsive'>
              <table className='table'>
                <thead className='thead-dark justify-content-center'>
                  <tr>
                    <th scope="col">
                      <p className='text-center'>Name</p>
                    </th>
                    <th scope="col">
                      <p className='text-center'>Last Name</p>
                    </th>
                    <th scope="col">
                      <p className='text-center'>Phone Number</p>
                    </th>
                    <th scope="col">
                      <p className='text-center'>Email</p>
                    </th>
                    <th colSpan='2' scope="col">
                      <p className='text-center'>Actions</p>
                    </th>
                  </tr>
                </thead>
                <tbody className='justify-content-center'>
                  {contet}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default List
