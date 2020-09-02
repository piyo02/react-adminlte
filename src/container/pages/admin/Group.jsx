import { compose } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import {PlainContent, Template} from '../../templates';
import { _create, _update, _delete } from '../../../config/store/actions/groupPageActions';
import {Card, CardBody, CardHeader, ModalCreate, ModalDelete, ModalUpdate} from '../../../components';


class Group extends Component {
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
        const groups = this.props.group;
        const datas = [
            { type: "text", name: "name", },
            { type: "textarea", name: "description" }
        ];
        const {defaultValueForm, formValue, label} = this.state;

        return(
            <PlainContent header={this.state.namePage}>
                <Card>
                    <CardHeader title={this.state.namePage}>
                        <ModalCreate
                            datas={datas}
                            name="Group"
                            form={formValue}
                            btnName="Tambah Group"
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
                                        Object.values(label).map(header => {
                                            return <th key={header}>{header}</th>
                                        })
                                    }
                                    { this.state.hasAction ? ( <th>Aksi</th> ) : null }
                                </tr>
                            </thead>
                            <tbody>
                                {groups && groups.map((value, index) => {
                                    return (
                                        <tr key={value.id}>
                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.description}</td>
                                            {
                                                this.state.hasAction ? (
                                                    <td>
                                                        <ModalUpdate 
                                                            datas={datas}
                                                            name="Group"
                                                            value={value}
                                                            form={formValue}
                                                            label={label}
                                                            defaultValueForm={defaultValueForm}
                                                            onUpdate={(data) => this.onUpdate(data)}
                                                        />
                                                        <ModalDelete
                                                            name="Group"
                                                            modalId={`delete-group-${value.id}`}
                                                            onDelete={() => this.onDelete(value.id)}
                                                            msg={`Yakin ingin menghapus group ${value.name} ?`}
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
    const groups = state.firestore.ordered.groups;
    return {
        group: groups,
        state: state.group
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _create: (data) => dispatch(_create(data)),
        _update: (data) => dispatch(_update(data)),
        _delete: (id) => dispatch(_delete(id))
    }
}

export default Template(compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((ownProps) => [
        {
            collection: "groups",
            orderBy: ["name", "asc"]
        },
    ])
)(Group));