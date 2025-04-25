import React from 'react'
import '../../assets/css/hero.css'
import Button from '../basics/button.jsx'
import CallBtn from '../basics/call-btn.jsx';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p>MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <h1>Pahrump Realtor</h1>
        <Button className={'btn-primary'} label={'LEARN MORE →'}/>
      </div>
      <div className='hero-btn'>
        <CallBtn />
      </div>
    </div>
  );
}