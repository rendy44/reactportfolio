import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = (props) => {
    return (
        <>
            <li className='contact-item'>
                <a href={props.link} target='_blank' rel='noopener noreferrer'>
                    <i className={'ri-' + props.icon} />
                </a>
            </li>
        </>
    )
}

ContactItem.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}
export default ContactItem