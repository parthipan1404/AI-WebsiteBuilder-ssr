import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroPage from './components/Herosections';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroPage/>
    </>
  )
}

export default App
