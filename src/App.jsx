import { useState } from 'react'


//import './App.css'
import Nav from './components/Nav'
import Footer from './components/footer'
import Login from './components/Login'
import Gallery from './components/Gallery'
import Features from './components/Features'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Experience/>
      <About/>
      <Features/>
      <Gallery/>
      <Login/>
      <Footer/>

    </>
      
    
  )
}

export default App
