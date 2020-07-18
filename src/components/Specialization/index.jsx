import React from 'react';
import PropTypes from 'prop-types';
import SpecializationItem from './SpecializationItem';
import './Style.scss';

const Specialization = (props) => {

    let itemsArr = [];
    // eslint-disable-next-line array-callback-return
    props.items.map((item, index) => {
        itemsArr.push(<SpecializationItem key={index} title={item.title} icon={item.icon} desc={item.desc} />)
    })

    return (
        <>
            <div className='spec-items'>
                {itemsArr}
            </div>
        </>
    )
}

Specialization.propTypes = {
    items: PropTypes.array.isRequired
}

export default Specialization;
