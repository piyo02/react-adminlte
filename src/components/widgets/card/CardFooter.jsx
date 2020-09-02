import React from 'react';

const CardFooter = (props) => {
    const {
        children
    } = props;

    return(
        <div className="card-footer">
            {children}
        </div>
    );
}

export default CardFooter;