import React from 'react';
import { Link } from 'react-router-dom';

const Box = (props) => {
    const { count, color, icon, link, topic } = props;

    return(
        <div className={`small-box bg-${color}`}>
            <div className="inner">
                <h3>{count}</h3>
                <p>{topic}</p>
            </div>
            <div className="icon">
                <i className={icon} />
            </div>
            <Link to={link} className="small-box-footer">
                Lihat <i className="fas fa-arrow-circle-right" />            
            </Link>
        </div>
    );
}

export default Box;