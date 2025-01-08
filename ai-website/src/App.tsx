import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroPage from './components/Herosections';
import Navbar from './components/NavBar';
import Footer from './components/footer';




function App() {
  return (
    <>
    <Navbar/>
    <HeroPage/>
    <Footer/>
    </>
  )
}

export default App
