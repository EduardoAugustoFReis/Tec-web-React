import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import {AppRoutes} from "./routes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AppRoutes/>
  </React.StrictMode>,
)
