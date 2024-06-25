import React from "react";
import './NotFound.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function NotFound() {
  return (
    <>
      <Header/>
      <div className="not-found">
        <p className="meta">Uuups!</p>
        <p className="four-o-four">404</p>
        <h2 className="blue">Esta página no existe</h2>
      </div>
      <Footer/>
    </>
  );
}

export default NotFound