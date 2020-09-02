import React from 'react';

const Modal = (props) => {
    const {
        size,
        color,
        modalId,
        title,
        children,
        labelBtn
    } = props;

    const modalType = `modal-dialog ${size}`;
    const modalClass = `modal-content ${color}`;
    
    return (
        <div className="modal fade" id={modalId}>
            <div className={modalType}>
                <div className={modalClass}>
                    <div className="modal-header">
                        <p className="modal-title">{title}</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Batal</button>
                        <button type="button" className="btn btn-primary">{labelBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;