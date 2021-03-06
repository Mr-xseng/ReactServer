import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import getStore from '../../src/store/index'
import Route from '../Routes'
const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {Route}
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<App/>, document.getElementById('root'))