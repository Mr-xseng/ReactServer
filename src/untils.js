import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Route from './Routes'
import React from 'react'
import getStore from './store/index'

export const render =  (req) => {
  const content = renderToString((
    <Provider store={getStore()}>
      <StaticRouter localtion={req.path} context={{}}>
        {Route}
      </StaticRouter>
    </Provider>
  ))
  return `<html>
            <head>
              <title>server-react</title>
            </head>
            <body>
              <div id="root">${content}</div>
              <script src="/client.js"></script>
            </body>
           </html>
		`
}