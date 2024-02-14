import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter  from './AppRouter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)