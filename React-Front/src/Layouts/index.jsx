import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LogIn from '../pages/LogIn/LogIn'

function Root() {
  return (
    <>
        <Header />
        <LogIn />
        <Footer />
    </>
  )
}

export default Root
