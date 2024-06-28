import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as ccc from '@ckb-ccc/connector-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ccc.Provider>
      <App />
    </ccc.Provider>
  </React.StrictMode>,
)
