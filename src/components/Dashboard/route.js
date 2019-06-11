import React, {Fragment} from 'react';
import {Switch, Route } from 'react-router-dom';
import List from './todoList'
import View from './viewTodo'
import Home from './home'
import Add from './createTodo'
import Edit from './editTodo'

const PrincipalRouter = () => {
  return(
    <Fragment>
        <Switch>
          <Route exact path='/Dashboard' component={Home}/>
          <Route path='/Dashboard/todo/edit'component={Edit} />
          <Route path='/Dashboard/todo/add' component={Add}/>
          <Route path='/Dashboard/todo/view'  component={View}/>
          <Route path='/Dashboard/todo/list'  component={List}/>
        </Switch>
    </Fragment>
  )
}

export default PrincipalRouter;
