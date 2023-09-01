import React, { createContext, useReducer } from 'react'

const fetchAPI = () => {
  let result = []
  let random = Math.random()

  for (let i = 5; i <= 11; i++) {
    if (random <= 0.5) result.push(i + ':00 PM')
    else result.push(i + ':30 PM')
  }
  return result
}

export const Context = createContext()

const defaultBookingInfo = {
  date: '',
  guests: 0,
  time: 0,
  occasion: ''
}

const initialState = {
  availableTimes: fetchAPI(),
  bookingInfo: defaultBookingInfo
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return { ...state, availableTimes: fetchAPI(new Date(action.payload.date)) }
    case 'BOOK_TABLE':
      console.log("here")
      return { ...state, bookingInfo: action.payload.bookingInfo }
    case 'RESET_BOOKING':
      return { ...state, bookingInfo: defaultBookingInfo }
    default:
      return state
  }
}

function ReduxComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default ReduxComponent
