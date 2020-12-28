import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import logo from './Logo_Mandakh_Burtgel_University_s.png';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,

} from 'react-icons/fa';
import { FaDirections } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Боломжийг хүлээхээс илүүтэй түүнийг бүтээх нь чадвар юм :)
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Бидний тухай</h2>
            <Link to='/signup'>Бид 2020 оноос хойш Мандах их сургуулийн харьяа Мэдээлэл технологийн сургуульд суралцах явцдаа 
            Prof компаниа байгуулан өдийг хүртэл үйл ажиллагаагаа явуулж байна. </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Холбоо барих</h2>
            <Link to='/'>+976 99153628</Link>
            <Link to='/'>+976 80094482</Link>
            <Link to='/'>Мандах их сургууль, Мэдээлэл технологийн сургууль</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
        <Link
              className='social-media-uni'
              to='/'
              target='_blank'
            >
              <img src={logo} alt="Logo" />
            </Link>
          <small className='website-rights'>Prof © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='https://www.facebook.com/groups/MTTstudents'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
         
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
          
          
          </div>

       
        </div>
        
      
      </section>
    </div>
  );
}

export default Footer;