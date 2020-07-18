import React from 'react';
import './Style.scss';
import ScrollToTop from 'react-scroll-to-top';

const Footer = (props) => {
    return (
        <>
            <footer className={'footer'}>
                <div className='frow-container'>
                    <div className='inner'>
                        <div className='col-sm-2-3'>
                            {props.children}
                            <ScrollToTop smooth color={'#188ba5'} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer