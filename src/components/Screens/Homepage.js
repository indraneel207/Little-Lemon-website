import React from 'react'
import { useNavigate } from 'react-router-dom'
import food1 from '../../assets/images/food1.avif'

const Homepage = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('/booking')
  }

  return (
    <main>
      <div className='main-left-side'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className='button' aria-label='On Click' onClick={onClickHandler}>
          Reserve a Table
        </button>
      </div>
      <img className='main-right-side' src={food1} alt='Head' />
    </main>
  )
}

export default Homepage
