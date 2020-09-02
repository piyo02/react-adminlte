import React from 'react';

const CardBody = (props) => {
    const {
        children,
        ...rest
    } = props;
    return(
        <div className="card-body mb-2" {...rest}>
            {children}
        </div>
    );
}

export default CardBody;