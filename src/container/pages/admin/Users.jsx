import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {PlainContent, Template} from '../../templates';
import { _create, _update, _delete } from '../../../config/store/actions/groupPageActions';
import {Card, CardBody, CardHeader, ModalCreate, ModalDelete} from '../../../components';
import { Link } from 'react-router-dom';

class Users extends Component {
    state = {
        ...this.props.state,
    }

    onCreate = (data) => {
        this.props._create(data);
        return true;
    }
    onUpdate = (data) => {
        this.props._update(data);
    }
    onDelete = (id) => this.props._delete(id)

    render() {
        const users = this.props.users;
        const datas = [
            { type: "text", name: "username", },
            { type: "email", name: "email", },
            { type: "password", name: "password" },
            { type: "text", name: "active" },
        ];
        const {defaultValueForm, form, label, hasAction, namePage, table} = this.state;

        return(
            <PlainContent header={namePage}>
                <Card>
                    <CardHeader title={namePage}>
                        <ModalCreate
                            datas={datas}
                            name="User"
                            form={form}
                            btnName="Tambah User"
                            label={label}
                            defaultValueForm={defaultValueForm}
                            onCreate={(data) => this.onCreate(data)}
                        />
                    </CardHeader>
                    <CardBody>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{width: 10}}>No</th>
                                    {
                                        Object.values(table).map(header => {
                                            return <th key={header}>{header}</th>
                                        })
                                    }
                                    { hasAction ? ( <th>Aksi</th> ) : null }
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{index+1}</td>
                                            {
                                                Object.keys(table).map(header => {
                                                    return <td key={header}>{user[header]}</td>
                                                })
                                            }
                                            {
                                                hasAction ? (
                                                    <td>
                                                        <Link className="btn btn-primary btn-sm mr-1" to={`users/${user.id}`} >Detail</Link>
                                                        <ModalDelete
                                                            name="User"
                                                            modalId={`delete-user-${user.id}`}
                                                            onDelete={() => this.onDelete(user.id)}
                                                            msg={`Yakin ingin menghapus user ${user.username} ?`}
                                                        />
                                                    </td>
                                                ) : null
                                            }
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </PlainContent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        state: state.user.state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _create: (data) => dispatch(_create(data)),
        _update: (data) => dispatch(_update(data)),
        _delete: (id) => dispatch(_delete(id))
    }
}

export default Template( connect(mapStateToProps, mapDispatchToProps)(Users) );