import React from "react";
import Nav from "../Nav";
import './Style.scss';
import Button from "../Button";

function Hero() {
    return (
        <div className="hero">
            <div className="frow-container">
                <div className="inner">
                    <div className="frow">
                        <div className="col-sm-3-4 col-md-2-3">
                            <div className='content'>
                                <h1>Hi, I am Rendy,</h1>
                                <p>... a WordPress Developer.</p>
                                <div className='action'>
                                    <Button type="success" href="#contact">Contact me</Button>
                                    <Button type="transparent" href="#about">Know more</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Hero
