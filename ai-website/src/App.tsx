import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroPage from './components/Herosections';
import Navbar from './components/NavBar';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroPage/>
    </>
  )
}

export default App
