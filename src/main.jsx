import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'

import './style.css'
import { AppTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <AppTheme>
      <Provider store={ store }>
        <App />
      </Provider>
    </AppTheme>
  //</React.StrictMode>,
)
