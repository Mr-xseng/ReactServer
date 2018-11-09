import React from 'react'
import {Header} from '../../components/header'
import {connect} from 'react-redux'
const Login = (props) => {
  return (
    <div>
      <Header/>
      <div>login is {props.name}</div>
    </div>
  )
}
const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Login)