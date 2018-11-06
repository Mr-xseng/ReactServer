import express from 'express'
import Home from './containers/Home'
import {renderToString} from 'react-dom/server'
import React from 'react'
const app = express()
const content = renderToString(<Home />)
app.use(express.static('public'))
app.get('/', function(req, res) {
	res.send(
		`
			<html>
				<head>
					<title>server-react</title>
				</head>
				<body>
					<div id="root">${content}</div>
					<script src="/client.js"></script>
				</body>
			</html>
		`
	)
})

var server = app.listen(3000)
