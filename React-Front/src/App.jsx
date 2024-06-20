import React from 'react'
import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Quizz from './pages/Survey/Survey'

function App() {

  return (
    <>
    <Header/>
    <Quizz/>
    <Footer/>
    </>
  )
}

export default App
