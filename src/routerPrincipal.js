import React, {Fragment} from 'react';
import {Switch, Route } from 'react-router-dom';
import LogIn from './components/auth/logIn';
import SignUp from './components/auth/signUp';
import EmailConfirmation from './components/auth/confirmationEmail';
import ForgotPassword from './components/auth/forgotPassword';
import PostRegister from './components/auth/postRegister';
import EmailValidate from './components/auth/EmailValidate';
import AuthAction from './components/auth/authAction'
import Dashboard from './components/Dashboard'

const PrincipalRouter = () => {
  return(
    <Fragment>
        <Switch>
          <Route exact path='/'  component={LogIn}/>
          <Route path='/SignUp'  component={SignUp}/>
          <Route path='/PostRegister'  component={PostRegister}/>
          <Route path='/EmailValidate'  component={EmailValidate}/>
          <Route path='/EmailConfirmation'  component={EmailConfirmation}/>
          <Route path='/ForgotPassword'  component={ForgotPassword}/>
          <Route path='/authAction' component={AuthAction} />
          <Route path='/Dashboard' component={Dashboard}/>
        </Switch>
    </Fragment>
  )
}

export default PrincipalRouter;
