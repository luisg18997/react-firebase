import React, {Fragment} from 'react';
import {Switch, Route } from 'react-router-dom';

const PrincipalRouter = () => {
  return(
    <Fragment>
        <Switch>
          <Route exact path='/Dashboard' />
          <Route path='/Dashboard/todo/edit' />
          <Route path='/Dashboard/todo/add' />
          <Route path='/Dashboard/todo/view' />
          <Route path='/Dashboard/todo/list' />
        </Switch>
    </Fragment>
  )
}

export default PrincipalRouter;
