import React, {Fragment} from 'react';
import {Switch, Route } from 'react-router-dom';

const PrincipalRouter = () => {
  return(
    <Fragment>
        <Switch>
          <Route exact path='/' />
          <Route path='/Dashboard' />
        </Switch>
    </Fragment>
  )
}

export default PrincipalRouter;
