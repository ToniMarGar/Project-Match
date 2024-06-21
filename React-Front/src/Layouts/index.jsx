// Importación de Outlet (contenido variable) para el router
import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

// Función de la base del Layout (podría haber varias, nosotros solo tenemos una)
function Root() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Root
