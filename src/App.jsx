import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
