import React, {useState, useEffect} from 'react';
import Fire from '../../config/Firebase'
import {handleRedirect} from '../../util/redirectPage'

const Home = () => {
  const [value, setvalue] = useState(null)
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    const user =  Fire.auth().currentUser;
      if(user !== null) {
        setvalue({
          name: user.displayName,
          email: user.email
        })
        setLoading(false)
      } else{
        handleRedirect('/')
      }
    },[])

  if(loading === true) {
    return(<div></div>)
  } else {
    return(
      <div className='container_fluid'>
        <div className="row justify-content-center align-items-center  minh-100">
          <div className="col-lg-10">
            <p className='text-center h2' style={{paddingBottom: '2%'}}><b><strong>My Profile</strong></b></p>
            <p className='text-break text-justify'><b><strong>Name:</strong></b> {value.name}</p>
            <p className='text-break text-justify'><b><strong>Email: </strong></b> {value.email}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Home
