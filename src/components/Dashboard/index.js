import React, {useState,useEffect,Fragment} from 'react';
import Routes from './route'
import NavBar from './navBar'
import Fire from '../../config/Firebase'


const Dashboard = () => {
const [auth, setAuth] = useState(false);
const [loading, setLoading] = useState(true);
useEffect(() => {
  Fire.auth().onAuthStateChanged((logIn) => {
    setLoading(true)
    console.log(logIn);
    if(logIn) {
      setAuth(true)
      console.log(true);
    } else {
      setAuth(false)
      console.log(false);
    }
    setLoading(false)
  })
},[])
  if(loading === true) {
    return(<div></div>)
  } else {
    return(
      <Fragment>
      <NavBar />
        <Routes  auth={auth}/>
        </Fragment>
    )
  }
}


export default Dashboard
