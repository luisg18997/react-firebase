import React, {Fragment} from 'react';
import {Switch, Route } from 'react-router-dom';
import LogIn from './components/auth/logIn';
import SignUp from './components/auth/signUp';
import EmailConfirmation from './components/auth/confirmationEmail';
import ForgotPassword from './components/auth/forgotPassword';

const PrincipalRouter = () => {
  return(
    <Fragment>
        <Switch>
          <Route exact path='/'  component={LogIn}/>
          <Route path='/SignUp'  component={SignUp}/>
          <Route path='/EmailConfirmation'  component={EmailConfirmation}/>
          <Route path='/ForgotPassword'  component={ForgotPassword}/>
        </Switch>
    </Fragment>
  )
}

export default PrincipalRouter;
