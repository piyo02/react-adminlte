import React, { Component } from 'react';
import {Card, CardBody, CardHeader, ModalCreate, ModalDelete} from '../../../components';
import { Link } from 'react-router-dom';

class Content extends Component {
    state = {
        ...this.props
    }


    render() {
        const { header } = this.state;

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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Content;