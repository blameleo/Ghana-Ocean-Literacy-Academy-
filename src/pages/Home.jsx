import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from "@material-tailwind/react";
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
    </main>
  )
}

export default Home