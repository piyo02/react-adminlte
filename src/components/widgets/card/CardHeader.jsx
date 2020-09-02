import React from 'react';

const CardHeader = (props) => {
    const {
        title,
        children
    } = props;

    return(
        <div className="card-header">
            <h3 className="card-title">{title}</h3>
            <div className="card-tools">
                {children}
            </div>
        </div>
    );
}

export default CardHeader;