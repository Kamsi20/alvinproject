import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import Branding from './Branding'
import Footer from './Footer'

function App() {


  return (
   <div>
     <div className='lg:mx-15 mx-7 overflow-x-hidden'>
      <Header />
      <Branding />
    </div>
    <Footer />
   </div>
  )
}

export default App
