import React from 'react'
import {Header} from '../../components/header'
import {connect} from 'react-redux'
const Home = (props) => {
	return (
    <div>
      <Header />
      <div>this is {props.name} react-server</div>
      <button onClick={() => {alert("click")}}>click</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  name: state.name
})

export default connect(mapStateToProps,null)(Home)