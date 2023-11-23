import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routes/Routers.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
          <RouterProvider router={Routers}/>
      </AuthProvider>
    </HelmetProvider>
    <Toaster/>
  </React.StrictMode>,
)
