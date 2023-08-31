import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RouterComponent from './components/Router'
import ReduxComponent from './components/Redux'
import './App.css'

function App() {
  return (
    <div>
      <React.Fragment>
        <ReduxComponent>
          <Header />
          <RouterComponent />
          <Footer />
        </ReduxComponent>
      </React.Fragment>
    </div>
  )
}

export default App
