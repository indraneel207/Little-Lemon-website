import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Redux'
import Table from '../../assets/images/Table.jpg'

const BookingForm = (props) => {
  const { state, dispatch } = useContext(Context)
  const navigate = useNavigate()

  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState('')
  const [date, setDate] = useState('')
  const [times, setTimes] = useState('')

  const handleSubmit = (e) => {
    navigate('/confirmed')
  }

  const handleChange = (e) => {
    setDate(e)
    props.dispatch(e)
  }

  return (
    <main>
      <div className='main-left-side'>
        <div className='form-sub-container'>
          <label htmlFor='book-date'>Choose a Date</label>
          <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
        </div>
        <div className='form-sub-container'>
          <label htmlFor='book-time'>Choose Time</label>
          <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
            <option value=''>Select a Time</option>
            {state.availableTimes.map((availableTimes) => (
              <option key={availableTimes}>{availableTimes}</option>
            ))}
          </select>
        </div>
        <div className='form-sub-container'>
          <label htmlFor='book-guests'>Number of Guests</label>
          <input
            id='book-guests'
            min='1'
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value)
            }}
            type={'number'}
            placeholder='Enter the Number of Guests'
            max={10}
            required
          ></input>
        </div>
        <div className='form-sub-container'>
          <label htmlFor='book-occasion'>Occasion</label>
          <select
            id='book-occasion'
            key={occasion}
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value=''>Select an Option</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button className='button' onClick={handleSubmit}>
          Make Reservation
        </button>
      </div>
      <img className='main-right-side' src={Table} alt='Table' />
    </main>
  )
}

export default BookingForm
