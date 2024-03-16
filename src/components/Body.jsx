import React from "react";
import '../Component.css';
import homeImageLogo from './homeImage.png';
import amazon from './amazon.png';
import flipkart from './flipkart.png';

function Body() {
    return (
        <>
            <div id="bodyContainer">
                <div id="mainPage">
                    <div id="textContent">
                        <h1>YOUR FEET<br />
                            DESERVE<br />
                            THE BEST</h1>
                        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU<br /> WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE <br />HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div id="imagePage">
                        <img id="homeImage" src={homeImageLogo} />
                    </div>
                </div>
                <div id="buttons">
                    <button>Shop Now</button>
                    <button id="simpleButtons">Category</button>
                </div>
                <div id="extraContent">
                    <p>Also Available On</p>
                    <img src={amazon} alt="amazonLogo" />
                    <img src={flipkart} alt="flipcartLogo" />
                </div>
            </div>
        </>
    );
}

export default Body;