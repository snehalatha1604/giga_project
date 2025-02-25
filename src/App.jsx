import { useState } from 'react'


//import './App.css'
import Nav from './components/Nav'
import Footer from './components/footer'
import Login from './components/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Login/>
      <Footer/>
    </>
      
    
  )
}

export default App
