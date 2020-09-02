import React, { Fragment, Component } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Input from '../../../container/templates/forms/Input';

class ModalUpdate extends Component{
    state = {
        ...this.props,
        show: null
    }

    handleClose = () => {
        this.setState(state => ({
            ...state,
            form: state.defaultValueForm,
            show: null
        }))
    }
    handleShow(id, value) {
        this.setState(state => ({
            ...state,
            form: value,
            show: id,
        }));
    }

    handleSubmit = () => {
        this.props.onUpdate(this.state.form);
        this.handleClose();
    }

    handleChangeForm = (name, value) => {
        this.setState(state => ({
            form: {
                ...state.form,
                [name]: value
            }
        }))
    }

    render(){
        const { datas, name, show, size, label, value } = this.state;
        return(
            <Fragment>
                <Button variant="secondary" size={size} onClick={() => this.handleShow('edit', value)} className="mr-2">
                    Edit
                </Button>
                <Modal show={show === 'edit'} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h5>Edit {name}</h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            datas.map(data => {
                                return (
                                    data.type === "textarea" ? (
                                        <Input
                                            rows="3" 
                                            as="textarea" 
                                            key={data.name}
                                            name={data.name} 
                                            defaultValue={value[data.name]} 
                                            label={label[data.name]} 
                                            onChangeForm={(name, value) => this.handleChangeForm(name, value)} 
                                        />
                                    ) : (
                                        <Input 
                                            type={data.type}
                                            key={data.name}
                                            name={data.name}
                                            defaultValue={value[data.name]} 
                                            label={label[data.name]} 
                                            onChangeForm={(name, value) => this.handleChangeForm(name, value)} 
                                        />
                                    )
                                )
                            })
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose} size="sm">
                            Batal
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit} size="sm">
                            Simpan
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

ModalUpdate.defaultProps = {
    size: "sm"
}

export default ModalUpdate;