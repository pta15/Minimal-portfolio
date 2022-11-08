import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className="App">
      <div className='max-2-5x1 w-11/12 mx-auto'>
        <Intro />
        <Portfolio />
        {/*
        
        <Timeline />
        <Contact />
        <Footer />
        */} 
      </div>
    </div>
  )
}

export default App
