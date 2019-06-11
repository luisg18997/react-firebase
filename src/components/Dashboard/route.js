import React, {Fragment} from 'react';
import {ProtectedRoute} from '../../util/redirectPage'
import {Switch} from 'react-router-dom';
import List from './todoList'
import View from './viewTodo'
import Home from './home'
import Add from './createTodo'
import Edit from './editTodo'

const PrincipalRouter = (props) => {
  const {auth} = props
  console.log(auth);
  return(
    <Fragment>
        <Switch>
          <ProtectedRoute exact path='/Dashboard' component={Home} authenticated={auth}/>
          <ProtectedRoute exact path='/Dashboard/todo/edit'component={Edit} authenticated={auth} />
          <ProtectedRoute exact path='/Dashboard/todo/add' component={Add} authenticated={auth}/>
          <ProtectedRoute exact path='/Dashboard/todo/view'  component={View} authenticated={auth}/>
          <ProtectedRoute exact path='/Dashboard/todo/list'  component={List} authenticated={auth}/>
        </Switch>
    </Fragment>
  )
}

export default PrincipalRouter;
