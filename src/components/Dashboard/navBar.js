import React from 'react';
import {NavLink} from 'react-router-dom'
import {ModalConfirm} from '../../util/modal'
import Fire from '../../config/Firebase'
import {handleRedirect} from '../../util/redirectPage'


const HandleLogout = () => {
  Fire.auth().signOut()
  .then(() => {
    handleRedirect('/')
  })
  .catch((e) =>{
    handleRedirect('/')
  })
}

const HandleLogoutQuestion = () => {
  ModalConfirm('Sure of logout?', HandleLogout,'')
}

const NavBar = () => {

  return(
    <div id='navBar' className='navbar navbar-expand-lg navbar-dark bg-primary' style={{ height: 'auto' }}>
    <div className='row w-100'>
      <div className='col'>
      <span className='navbar-brand pl-4'>
      <span className='h3'>React-Firebase</span>
      </span>
      </div>
      <div className='col justify-content-end'>
        <div className='ml-auto'>
          <button className="navbar-toggler" id='buttonToggler' type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div id='navbarNav' className='collapse navbar-collapse'>
          <ul id='navbar' className='navbar-nav ml-auto'>
            <li className='nav-item mr-2 ml-2'>
            <NavLink to='/Dashboard' className='nav-link'> <span>Home</span></NavLink>
            </li>
            <li className='nav-item mr-2 ml-2'>
              <NavLink to='/Dashboard/todo/add'className='nav-link' ><span>Add</span></NavLink>
            </li>
            <li className='nav-item mr-2 ml-3'>
              <NavLink to='/Dashboard/todo/list' className='nav-link'><span>List</span></NavLink>
            </li>
            <li className='nav-item mr-2 ml-3'>
              <NavLink onClick={()=>HandleLogoutQuestion()} className='nav-link'><span>Logout</span></NavLink>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar
