import React from "react";
import Button from "../Button";
import PropTypes from 'prop-types';
import './Style.scss';

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="frow-container">
                <div className="inner">
                    <div className="frow">
                        <div className="col-sm-6-7 col-md-2-3">
                            <div className='content'>
                                <h1>{props.title}</h1>
                                <p>{props.lead}</p>
                                <div className='action'>
                                    <Button type="success" href="#contact">Contact me</Button>
                                    <Button type="transparent" href="#about">Know more</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired
}

export default Hero
