import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import './Style.scss';

const Contact = (props) => {
    let itemsArr = [];
    // eslint-disable-next-line array-callback-return
    props.items.map((item, index) => {
        itemsArr.push(<ContactItem
            key={index}
            icon={item.icon}
            link={item.link}
        />)
    })

    return (
        <>
            <ul className='contact-items'>
                {itemsArr}
            </ul>
        </>
    )
}

Contact.propTypes = {
    items: PropTypes.array.isRequired
}
export default Contact