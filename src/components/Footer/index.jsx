import React from 'react';
import './Style.scss';

const Footer = (props) => {
    return (
        <>
            <footer className={'footer'}>
                <div className='frow-container'>
                    <div className='inner'>
                        <div className='col-sm-2-3'>
                            {props.children}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer