import React from 'react';
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return(
    <div className='hero'>
      <div className='container'>
        <div className='content'>
          <div className='col-1'>
            <h1>Data to enrich your</h1>
            <h1><span className='primary-color'>online business</span></h1>
            <p>Loren ipsum dolor sit, amet, consec tetur adipsicing elit,
              Loren ipsum dolor sit, amet, consec tetur adipsicing elit.</p>
          </div>
          <div className='used-by'>
            <p>USED BY</p>
            <div className='icons'>
              <span><FaDatabase /> Staxx</span>
              <span><FaAsterisk /> Star AI</span>
              <span><FaAccusoft /> Accusoft</span>
            </div>
          </div>
        </div>
        <div className='col-2'>
          <div className='form-layout'>
            <div className='form-container'>
              <p className='sing-in-text'>Sing in with</p>
              <div className='social-login'>
                <span><FaFacebook size={20} /></span>
                <span><FaTwitter size={20} /></span>
                <span><FaWhatsapp size={20} /></span>
              </div>
              <div className='divider'>
                <p><span>or</span></p>
              </div>
              <form action=''>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Password' />
                <button>Create your Account</button>
              </form>
            </div>
            <div className='form-footer'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
