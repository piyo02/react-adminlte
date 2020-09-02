import React, { Fragment, Component } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ModalDelete extends Component{
    state = { show: null }

    handleClose = () => this.setState({ show: null })
    handleShow = (id) => this.setState({ show: id })
    handleOnClick = (id) => this.props.onDelete(id);

    render(){
        const {show} = this.state;
        const {btnName, modalId, msg, name, size} = this.props;
        return(
            <Fragment>
                <Button variant="danger" size={size} onClick={() => this.handleShow(modalId)} >
                    {btnName}
                </Button>
                <Modal show={show === modalId} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h5>Hapus {name}</h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {msg}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose} size="sm">
                            Batal
                        </Button>
                        <Button variant="danger" onClick={() => this.handleOnClick()} size="sm">
                            Hapus
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

ModalDelete.defaultProps = {
    btnName: "Hapus",
    size: "sm"
}

export default ModalDelete;