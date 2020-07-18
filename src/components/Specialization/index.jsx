import React from 'react';
import './Style.scss';

const Specialization = (props) => {
    return (
        <>
            <div className='spec-items'>
                {props.children}
            </div>
        </>
    )
}

export default Specialization;
