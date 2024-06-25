import React from 'react'
import './App.css'

import Home from './pages/Home/Home'
import Quizz from './pages/Quizz/Quizz'
import NotFound from './pages/NotFound/NotFound'
import FormLogin from './components/FormLogIn'
import FormSignup from './components/FormSignup'
import Profile from './pages/Profile/Profile'
import InfoUser from './components/InfoUser'


function App() {

  return (
    <>
      <FormLogin />
      <InfoUser />
    </>
  )
}

export default App
