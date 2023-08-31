import React from 'react'
import small_logo from '../../assets/images/small_logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={small_logo} alt='logo' />
      <div className='footer-nav'>
        <div>
          <p>NAVIGATION</p>
          <div className='footer-nav-list'>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
          </div>
        </div>
        <div>
          <p>CONTACT</p>
          <div className='footer-nav-list'>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
        </div>
        <div>
          <p>SOCIAL MEDIA LINKS</p>
          <div className='footer-nav-list'>
            <p>Facebook</p>
            <p>Whatsapp</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
