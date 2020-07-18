import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';

const Section = (props) => {
    const sectionCss = props.extraCss ? 'section ' + props.extraCss : 'section',
        columnWidth = props.isFull ? 'col' : 'col-sm-6-7 col-md-2-3',
        columnAlignment = props.alignment ? props.alignment : 'left',
        columnCss = 'text-' + columnAlignment + ' ' + columnWidth;
    const maybeTitle = props.title ? <h2 className='section-title'>{props.title}</h2> : ''
    return (
        <section id={props.id} className={sectionCss}>
            <div className="frow-container">
                <div className="inner">
                    <div className='frow'>
                        <div className={columnCss}>
                            {maybeTitle}
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Section.propTypes = {
    id: PropTypes.string.isRequired,
    extraCss: PropTypes.string,
    isFull: PropTypes.bool.isRequired,
    alignment: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default Section;