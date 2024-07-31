import React from 'react'
import beta from './beta.png'
function Home() {
  return (
    <div className='home'>
        <div ><img src={beta} alt="beta" /></div>
        <p className='para'>Betaflight is the world's leading multi-rotor flight control software.
        The global FPV drone racing and freestyle community choose Betaflight for its performance, precision, cutting edge features, reliability and hardware support.</p>
    </div>
  )
}

export default Home