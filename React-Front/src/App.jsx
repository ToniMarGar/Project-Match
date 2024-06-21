import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import Quizz from './pages/Quizz/Quizz'
import Footer from './components/Footer/Footer'
import Root from './Layouts/index'



function App() {

  return (
    <>
      <Header />
      <Quizz />
      <Footer />
    </>
  )
}

export default App
