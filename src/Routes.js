import {Route} from 'react-router-dom'
import React from 'react'
import Home from './containers/Home/index'
import Login from './containers/Login/login'
export default (
  <div>
    <Route path="/" exact component={Home}></Route>
    <Route path="/login" exact component={Login}></Route>
  </div>
)