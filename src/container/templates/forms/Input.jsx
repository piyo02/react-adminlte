import React from 'react';
import Form from 'react-bootstrap/Form';

const Input = (props) => {
    const { name, label, defaultValue, onChangeForm, ...res } = props;
    const handleChangeForm = (event) => onChangeForm(event.target.name, event.target.value)

    return (
        <Form.Group controlId={`formGroup${name}`}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                name={name} 
                onChange={handleChangeForm} 
                placeholder={label} 
                defaultValue={defaultValue}
                {...res}
            />
            <Form.Control.Feedback type="invalid">
                This field Required!.
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default Input;