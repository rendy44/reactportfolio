import React from 'react';
import PropTypes from 'prop-types';
import ExperienceItem from './ExperienceItem';
import './Style.scss';

const Experience = (props) => {
    let itemsArr = [];
    // eslint-disable-next-line array-callback-return
    props.items.map((item, index) => {
        itemsArr.push(<ExperienceItem
            key={index}
            title={item.title}
            companyLocation={item.location}
            companyLogo={item.logo}
            companyName={item.company}
            periodStart={item.start}
            periodEnd={item.end}
            companyUrl={item.url}
        />)
    })

    return (
        <>
            <div className='exp-items'>
                {itemsArr}
            </div>
        </>
    )
}

Experience.propTypes = {
    items: PropTypes.array.isRequired
}

export default Experience