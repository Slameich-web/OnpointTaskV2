import {Link } from 'react-router-dom';
import React from 'react';
import './firstPage.css';
import bubbles4 from "../img/bg1.png"
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  
function FirstPage(){
  const myRef = React.useRef(null)
  const executeScroll = () => scrollToRef(myRef)
        
return( 
<div className="mainContent ">
<img href={bubbles4} className="mainContentImg1"></img>
<div className="mainContentHello">
  Привет,
</div>
<div className="mainContentText">
  ЭТО <span className="extraBold">НЕ</span><br/>
  КОММЕРЧЕСКОЕ <br/>
  ЗАДАНИЕ
  <a onClick={executeScroll}><button className="mainContentButton"><span className="mainContentButtonPointer">&#8594;</span><span className="mainContentButtonText">Что дальше?</span></button></a>
      <div className="bakti_2"></div>
      <div className="bakti_1"></div>
      <div className="pink_sperm"></div>
      <div className="pink_sperm_1"></div>
      <div className="blueBaktiFirst"></div>
      <div className="blueBaktiSecond"></div>
      <div className="blueBaktiLong"></div>
      <div className="blueBaktiMove"></div>
      <div className="blueBaktiSize"></div>
      <div className="blueBaktiMove2"></div>
      </div>
      <div ref={myRef} className="nav1"></div>
</div>
)
}
export default FirstPage;