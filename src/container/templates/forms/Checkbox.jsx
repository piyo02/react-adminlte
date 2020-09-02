import React from 'react';
import Form from 'react-bootstrap/Form';

const Checkbox = (props) => {
    const { name, label, ...res } = props;

    return(
        <Form.Group controlId={name}>
            <Form.Check label={label} {...res} />
        </Form.Group>
    );
}

export default Checkbox;