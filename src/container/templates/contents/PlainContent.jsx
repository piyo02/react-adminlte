import React from 'react';

const PlainContent = (props) => {
    const {
        header, 
        children
    } = props; 
    return(
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h5 className="m-0 text-dark">{header}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default PlainContent;