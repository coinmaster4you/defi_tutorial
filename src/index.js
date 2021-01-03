import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './serviceWorker'

console.log('Hello from React!')

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
registerServiceWorker()