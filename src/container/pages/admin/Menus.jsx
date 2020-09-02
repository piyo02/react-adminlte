import { compose } from 'redux';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import {PlainContent, Template} from '../../templates';
import { _create, _update, _delete } from '../../../config/store/actions/groupPageActions';
import {Card, CardBody, CardHeader} from '../../../components';
import { Link } from 'react-router-dom';


class Menus extends Component {
    render() {
        const groups = this.props.group;

        return(
            <PlainContent header="Manajemen Menu">
                <Card>
                    <CardHeader title="Manajemen Menu"></CardHeader>
                    <CardBody>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{width: 10}}>No</th>
                                    <th>Nama Group</th> 
                                    <th>Aksi</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {groups && groups.map((value, index) => {
                                    return (
                                        <tr key={value.id}>
                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>
                                                <Link to={`/menus/${value.id}`}><Button size="sm">Detail Menu</Button></Link>
                                            </td>
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
    firestoreConnect(_ => [
        {
            collection: "groups",
        }
    ])
)(Menus));