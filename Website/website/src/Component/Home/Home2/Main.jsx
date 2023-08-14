import React from 'react'
import Navbar2 from './Navbar2'
import Page1 from './Page1'
import Category from './Category'
import Page2 from './Page2'
import Toys from './Toys'
import Page3 from './Page3'
import Footer from './Footer'
import AboutUs from './AboutUs'

function Main() {
  return (
   <>
    <div className="sticky-top">
        <Navbar2></Navbar2>
    </div>
    <Page1/>
    <Category/>
    <Page2/>
    <Toys/>
    <AboutUs/>
    <Page3/>
  
    <Footer/>
   </>
  )
}

export default Main