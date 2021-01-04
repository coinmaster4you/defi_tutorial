import 'regenerator-runtime/runtime'
import 'register-service-worker'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../components/App'
import * as serviceWorker from "./serviceWorker.js"

console.log('Hello from React!')

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
serviceWorker.register()