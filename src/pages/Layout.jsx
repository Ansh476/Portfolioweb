import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
        <body>
            <Outlet/>
            <Navbar/>
        </body>
    </div>
  )
}

export default Layout