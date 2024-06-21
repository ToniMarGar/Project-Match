import * as React from "react";
import './Footer.css'

import Facebook from '../../assets/footer-logos/facebook-logo.svg'
import Instagram from '../../assets/footer-logos/instagram-logo.png'
import Tiktok from '../../assets/footer-logos/tiktok-logo.svg'
import Twitter from '../../assets/footer-logos/whatsapp-logo.svg'
import Whatsapp from '../../assets/footer-logos/x-logo.png'


function Footer() {
  return (
      <footer>
        <p>2024 Travel-Match, Inc.</p>

        <div className="social-icons">
            <div className='media-link'>
              <img 
                className='icon-footer'
                loading="lazy" 
                src={Facebook}
                alt="Go to Facebook" 
              />
            </div>

            <div className='media-link'>
              <img 
                className='icon-footer'
                loading="lazy" 
                src={Instagram}
                alt="Go to Instagram" 
              />
            </div>

            <div className='media-link'>
              <img 
                className='icon-footer'
                loading="lazy" 
                src={Tiktok}
                alt="Go to Tiktok" 
              />
            </div>

            <div className='media-link'>
              <img 
                className='icon-footer'
                loading="lazy" 
                src={Twitter}
                alt="Go to Twitter" 
              />
            </div>

            <div className='media-link'>
              <img 
                className='icon-footer'
                loading="lazy" 
                src={Whatsapp}
                alt="Go to Whatsapp" 
              />
            </div>

        </div>

      {/* <section className="newsletter-section">
          <div className="newsletter-content">
            <div className="news-text">
              <h4>Suscríbete a nuestra newsletter</h4>
              <p>Te mantendremos al tanto de nuevas experiencias alrededor del mundo</p>
            </div>

            <form>
              <label htmlFor="emailInput" className="visually-hidden">Introduce tu email</label>
              <input
                type="email"
                id="newsletter-input"
                placeholder="Introduce tu email"
              />
              <ButtonMain type="submit">Suscribirme</ButtonMain>
            </form>
          </div>
          <div className="footer">

          </div>
        </section>*/}
        
      </footer>
  );
}

export default Footer