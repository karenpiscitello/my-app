import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { getFirestoreApp } from './config/getFirestoreApp'



getFirestoreApp()

ReactDOM.render(<App />, document.getElementById('root'));
