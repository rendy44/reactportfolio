import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ExperienceItem = (props) => {
    return (
        <>
            <div className='exp-item'>
                <div className='exp-logo'>
                    <a target='_blank' rel='noopener noreferrer' href={props.companyUrl}>
                        <LazyLoadImage alt='' src={props.companyLogo} />
                    </a>
                </div>
                <div className='exp-detail'>
                    <h3 className='exp-title'>{props.title}</h3>
                    <p><span className='exp-company'>{props.companyName}</span></p>
                    <p>{props.companyLocation}</p>
                    <p><span className='exp-duration'>{props.periodStart} - {props.periodEnd}</span></p>
                </div>
            </div>
        </>
    )
}

ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLocation: PropTypes.string.isRequired,
    companyUrl: PropTypes.string.isRequired,
    periodStart: PropTypes.string.isRequired,
    periodEnd: PropTypes.string.isRequired
}

export default ExperienceItem