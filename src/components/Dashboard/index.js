import React, {Fragment} from 'react';
import Routes from './route'
import NavBar from './navBar'


const Dashboard = () => {

  return(
    <Fragment>
    <div className='container_fluid'>
    <NavBar />
    </div>
      <Routes />
      </Fragment>
  )
}


export default Dashboard
