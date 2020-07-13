import React from "react";
import './Style.scss';
import 'remixicon/fonts/remixicon.css';

function Nav() {
    return (
        <nav role="navigation" className="top-nav">
            <ul className="menu-list">
                <li>
                    <a href="#home">
                        <i className="ri-home-2-line ri-xl" />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className='ri-user-line ri-xl' />
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#info">
                        <i className='ri-heart-line ri-xl' />
                        <span>Info</span>
                    </a>
                </li>
                <li>
                    <a href="#download">
                        <i className='ri-download-2-line ri-xl' />
                        <span>Download</span>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <i className='ri-mail-line ri-xl' />
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
