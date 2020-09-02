import React from 'react';

const Panigation = (props) => {
    const {
        data
    } = props;

    return(
        <ul className="pagination pagination-sm m-0 float-right">
            <li className="page-item"><a className="page-link" href="#">«</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">»</a></li>
        </ul>

    );
}

export default Panigation;