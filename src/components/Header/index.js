import React from 'react'

import little_lemon_logo from '../../assets/images/little_lemon_logo.png'

const navList = ['HOME', 'ABOUT', 'MENU', 'RESERVATIONS', 'ORDER ONLINE', 'LOGIN']
const Header = () => {
  return (
    <header>
      <img src={little_lemon_logo} alt='Little Lemon Logo'></img>
      <nav>
        {navList.map((each, index) => (
          <a key={index} href='/'>
            {each}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
