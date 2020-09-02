import React from 'react';

const CardComment = (props) => {
    const {
        time,
        image,
        children,
        username
    } = props;

    return(
        <div className="card-comment">
            <img className="img-circle img-sm" src={image} alt="User Image" />
            <div className="comment-text">
                    <span className="username">
                        {username}
                        <span className="text-muted float-right">{time}</span>
                    </span>
                    {children}
            </div>
        </div>
    );
}

export default CardComment;