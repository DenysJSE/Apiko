import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppWrapper from "./AppWrapper.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper title={'Hello App!'} >
      <App />
    </AppWrapper>
  </React.StrictMode>,
)
