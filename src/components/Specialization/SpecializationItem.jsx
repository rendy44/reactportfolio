import React from 'react';
import PropTypes from 'prop-types';

const SpecializationItem = (props) => {
    const iconCss = 'ri-' + props.icon;
    return (
        <>
            <div className="spec-item">
                <div className="icon">
                    <i className={iconCss} />
                </div>
                <h3 className='item-title'>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </>
    )
}

SpecializationItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default SpecializationItem;