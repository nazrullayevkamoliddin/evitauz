import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './features/store'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import 'animate.css';


const container = document.querySelector('#root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
