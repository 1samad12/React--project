import React from 'react'
import { Home } from '../component/Home'
import Navbar from '../component/Navbar'
import { Footer } from '../component/Footer'

export const HomePage = () => {
  return (
    <>
    {/* <img src="assets/img/mobile.png" alt="" /> */}
    <Navbar />
    <Home />
    <Footer />
    </>
  )
}
