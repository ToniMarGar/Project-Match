import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
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
