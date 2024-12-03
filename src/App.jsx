import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './components/About/About'
import Services from './components/Services/Services'
import CarList from './components/CarList/CarList'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner'

const App = () => {

  //dark mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")?
    localStorage.getItem("theme") : "light"
)

const element = document.documentElement
useEffect(() => {
  if (theme === "dark"){
    element.classList.add("dark")
    localStorage.setItem("theme","dark")
  }
  else{
    element.classList.remove("dark")
    localStorage.setItem("theme","light")
  }
}, [theme])

//aos initialization
useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  })
  AOS.refresh()

})

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <AppStoreBanner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App