import food from "../img/icon21.png"
import time from "../img/icon11.png"
import bottle from "../img/bottle1.png"
import bubbles1 from "../img/bubbles1.png"
import bubbles2 from "../img/bubbles2.png"
import bubbles4 from "../img/bubbles4.png"
import {Link } from 'react-router-dom';
import React from 'react';
import Popup from "./Popup"
import "./thirdPage.css"

function ThirdPage(){
    return(
        <div className="mainContent">
            <div className="mainContentTextThirdPage">
                <p className="thirdPageLabel2">КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
                <p className="thirdPageLabel">BREND<span className="thirdPageLabelBold">XY</span></p>
            </div>
            <div className="thirdPageTextBlock1">
                
                <p id="out">
                    
                    3 раза в день после еды. После приема препарата
                 рекомендуется воздержаться от пищи и напитков в течение 1 часа</p>
            </div>
            <div className="thirdPageTextBlock2">
            
                <p className="">Курс лечения от 7 дней до 1 мес.</p>
            </div>
            <div className="mainContentButton thirdContentButton">
            <a href="#popup"><span className="mainContentButtonPlus">&#43;</span><span>Подробнее</span></a>
            </div>
            <img className="bottle" src={bottle} alt="food"/>
            <img className="food" src={food} alt="food"/>
            <img className="time" src={time} alt="food"/>
            <img src={bubbles2} className="bubblePink21"/>
            <img src={bubbles2} className="bubblePink22"/>
            <img src={bubbles1} className="bubblePink23"/>
            <img src={bubbles1} className="bubblePink24"/>
            <img src={bubbles4} className="bubbleblue11"/>
            <img src={bubbles4} className="bubbleblue12"/>
            <img src={bubbles4} className="bubbleblue13"/>
            <Popup/>
        </div>
    )
}
export default ThirdPage;