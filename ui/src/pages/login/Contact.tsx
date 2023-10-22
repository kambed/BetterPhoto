import React from "react";
import "../../sass/Login.scss";
// @ts-ignore
import backgroundVideo from "../../assets/background.mp4";
// @ts-ignore
import logo from "../../assets/betterphoto_logo_full.png";

function Contact() {
    return (
        <div className="overflow-hidden">
            <video className='videoTag overflow-hidden' autoPlay loop muted>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
            <div className='videoGradient'/>
            <div className="container">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className='loginBox text-center'>
                        <h1 className="font-monospace fw-bold">Contact</h1>
                        <img src={logo} alt="Logo" className="w-100 my-1"/>
                        <h4 className="fw-bold">Kamil Bednarek</h4>
                        <h5 className="fw-bold">+48 500 500 500</h5>
                        <h5>ul. Niepodległości 206</h5>
                        <h5>00-608 Warszawa</h5>
                        <h5>Polska</h5>
                        <a className="MuiButton-root" href="https://www.google.com/maps/place/Stacja+Paliw+ORLEN/@52.2159249,21.0045,17.03z/data=!4m15!1m8!3m7!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!2sWarszawa!3b1!8m2!3d52.2296756!4d21.0122287!16zL20vMDgxbV8!3m5!1s0x471eccc23deefe65:0xba66f57fe4187e72!8m2!3d52.2153057!4d21.0062304!16s%2Fg%2F1tfx3nkf?entry=ttu">
                            DISPLAY ON MAP
                        </a>
                    </div>
                </div>
            </div>
            <div style={{height: "calc(100vh - 64px)"}}/>
        </div>
    );
}

export default Contact;
