import React, { Fragment, Component } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

import {Input} from '../../../container/templates';

class ModalCreate extends Component{
    state = { ...this.props, show: null, validated: false }

    handleClose = () => {
        this.setState(state => ({
            ...state,
            form: state.defaultValueForm,
            show: null,
            validated: false
        }))
    }

    handleShow = (id) => this.setState(state => ({ ...state, show: id, }));

    handleSubmit = (e) => {
        e.preventDefault();
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
        const { btnName, color, datas, form, name, show, size, label, validated } = this.state;
        return(
            <Fragment>
                <Button variant={color} size={size} onClick={() => this.handleShow('create')} className="mr-2">
                    {btnName}
                </Button>
                <Modal show={show === 'create'} onHide={this.handleClose}>
                    <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title><h5>Tambah {name}</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                datas.map(value => {
                                    return (
                                        value.type === "textarea" ? (
                                            <Input
                                                rows="3" 
                                                as="textarea" 
                                                key={value.name}
                                                name={value.name} 
                                                defaultValue={form[value.name]} 
                                                label={label[value.name]} 
                                                onChangeForm={(name, value) => this.handleChangeForm(name, value)} 
                                            />
                                        ) : (
                                            <Input 
                                                type={value.type}
                                                key={value.name}
                                                name={value.name}
                                                defaultValue={form[value.name]} 
                                                label={label[value.name]} 
                                                onChangeForm={(name, value) => this.handleChangeForm(name, value)} 
                                            />
                                        )
                                    )
                                })
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} size="sm"> Batal </Button>
                            <Button type="submit" variant="primary" size="sm"> Tambah </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </Fragment>
        )
    }
}

ModalCreate.defaultProps = { color: "primary", size: "sm" }

export default ModalCreate;