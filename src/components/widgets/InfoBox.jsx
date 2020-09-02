import React from 'react';

const InfoBox = (props) => {
    const { count, color, icon, topic } = props;

    return(
        <div className="info-box">
            <span className={`info-box-icon bg-${color}`}><i className={icon} /></span>
            <div className="info-box-content">
                <span className="info-box-text">{topic}</span>
                <span className="info-box-number">{count}</span>
            </div>
        </div>

    );
}

export default InfoBox;