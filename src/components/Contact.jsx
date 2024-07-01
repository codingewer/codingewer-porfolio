"use client";

import Image from 'next/image'
import React from 'react'
import logo from '../assets/logocodin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact({id}) {
  return (
    <div className='page' id={id}>
      <div className="contact-page">
        <Image className='contact-img' src={logo}/>
        <div className="contact-details">
          <div className="contact-detail">
            <h3>Phone</h3>
            <p>+90 505 804 48 18</p>
          </div>
          <div className="contact-detail">
            <h3>Email</h3>
            <p>yatli5645@gmail.com</p>
          </div>
          <div className="contact-detail">
            <h3>Address</h3>
            <p>Hakkari, Türkiye</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact