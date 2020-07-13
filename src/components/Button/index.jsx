import React from 'react';
// import PropTypes from 'prop-types';
import './Style.scss';


const Button = (props) => {
    let className = 'button button-' + props.type;
    return (
        <a href={props.href} className={className}>{props.children}</a>
    )
}


export default Button