import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Screens/Homepage'
import ConfirmedBooking from '../Screens/ConfirmedBooking'
import BookingForm from '../Screens/BookingForm'

function RouterComponent() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/booking' element={<BookingForm />} />
      <Route path='/confirmed' element={<ConfirmedBooking />} />
    </Routes>
  )
}

export default RouterComponent
