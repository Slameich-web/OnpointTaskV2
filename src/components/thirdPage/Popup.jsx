import React from"react";
import "./popup.css"
const Popup = () => {
    
    let [openPage2, setOpen2] = React.useState(true);
    let [openPage1, setOpen1] = React.useState(false);

    function ToNextPate(){
        setOpen1(!openPage1)
        setOpen2(!openPage2)   
    }
    function ToOnePage(){
        if(openPage1===true){
            return true;
        }else{
            setOpen2(false)
            setOpen1(true)
        }
    }
    function ToTwoPage(){
        if(openPage2===true){
            return true;
        }else{
            setOpen1(false)
            setOpen2(true)
        }
    }

    return(
        <div id="popup" className="popup">
                <a href="" className="popupArea"></a>
                <div className="popupBody">
                    <div className="popupContent">
                        <div className="popupSlider">
                            <div>
                                <p className="popupTag">ПРЕИМЕЩЕСТВА</p>
                                <p className="popupBrend">BREND<span className="thirdPageLabelBold">XY</span></p>
                            </div>
                            <div>
                            <div  className={openPage1 ? "popupSliderText2" : null} >
                                <p className="popupLabal"><p className="popupLabalNumber popupP1">01</p>Самое важное и ключевое преимущество нашего препарата</p>
                                <p className="popupLabal"><p className="popupLabalNumber popupP2">02</p>Второе по важности преимещество</p>
                                <p className="popupLabal"><p className="popupLabalNumber popupP3">03</p>Еще одно важное преимущество препарата</p>
                            </div>
                            <div  className={openPage2 ? "popupSliderText2" : null}>
                            <p className="popupLabal"><p className="popupLabalNumber popupP1">04</p>Еще одно не менее важное преимущество препарата</p>
                            <p className="popupLabal"><p className="popupLabalNumber popupP2">05</p>Еще одно важное преимущество препарата</p>
                            <p className="popupLabal"><p className="popupLabalNumber popupP3">06</p >Еще одно важное преимущество препарата</p> 
                            </div>
                            <div className="popupNavButtons">
                                <span onClick={ToNextPate} className="toPagePerv">&#60;</span>
                                <span onClick={ToOnePage}  className={openPage2 ? "popupInctive toFirstPage" : "popupActive toFirstPage"} >&ordm;</span>
                                <span onClick={ToTwoPage}  className={openPage1 ? "popupInctive toSecondPage" : "popupActive toSecondPage"} >&ordm;</span>
                                <span onClick={ToNextPate} className="toPageNext">&#62;</span>
                            </div>
                            </div>
                            </div>
                        <a href=".nav2" className="popupClose">&#10006;</a>
                    </div>
                </div>
            </div>
    )
}
export default Popup;