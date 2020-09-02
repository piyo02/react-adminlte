import { connect } from 'react-redux';
import React, { Component } from 'react';
import {PlainContent, Template} from '../../templates';
import { _create, _update, _delete, _getMenu } from '../../../config/store/actions/menuPageActions';
import {Card, CardBody, CardHeader, ModalCreate, ModalDelete, ModalUpdate} from '../../../components';
import { Fragment } from 'react';
import { withRouter } from 'react-router';

class MenuDetail extends Component {
    state = {
        ...this.props.state,
        datas: [
            { type: "text", name: "name", },
            { type: "text", name: "link" },
            { type: "text", name: "icon" }
        ],
    }

    onCreate = (data) => {
        this.props._create(data);
        return true;
    }
    onUpdate = (data) => {
        this.props._update(data);
    }
    onDelete = (id) => this.props._delete(id)

    print_menus(menu){
        const {datas, form, label, defaultValueForm} = this.state;
        return (
            <li key={menu.id} className="mb-1">
                <span className="mr-1">{menu.name}</span>
                {
                    !menu.is_headline ? (
                        <Fragment>
                            <ModalCreate
                                size="xs"
                                form={form}
                                color="info"
                                datas={datas}
                                label={label}
                                btnName="+"
                                name={`Child Menu ${menu.name}`}
                                defaultValueForm={defaultValueForm}
                                onCreate={(data) => this.onCreate(data)}
                            />
                        </Fragment>
                    ) : null
                }
                <ModalUpdate 
                    size="xs"
                    form={form}
                    value={menu}
                    datas={datas}
                    label={label}
                    name={`Child Menu ${menu.name}`}
                    defaultValueForm={defaultValueForm}
                    onUpdate={(data) => this.onUpdate(data)}
                />
                <ModalDelete
                    size="xs"
                    btnName="X"
                    name="Menu"
                    modalId={`delete-menu-${menu.id}`}
                    onDelete={() => this.onDelete(menu.id)}
                    msg={`Yakin ingin menghapus menu ${menu.name} ?`}
                />
                {
                    menu.child && menu.child.length ? (
                        <ol>
                            { 
                                menu.child.map(child => {
                                    return( this.print_menus(child) )
                                })
                            }
                        </ol>
                    ) : null
                }
            </li>
        )
    }

    componentDidMount() {
        this.props._getMenu(this.props.match.params.id);
    }

    render() {
        const menus = this.props.state.menus;

        const {datas, namePage, form, label, defaultValueForm } = this.state;
        return(
            <PlainContent header={namePage}>
                <Card>
                    <CardHeader title={namePage}>
                        <ModalCreate
                            form={form}
                            name="Menu"
                            datas={datas}
                            label={label}
                            btnName="Tambah Menu"
                            defaultValueForm={defaultValueForm}
                            onCreate={(data) => this.onCreate(data)}
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mt-2">
                            <ol>
                                {
                                    menus && menus.map((value) => {
                                        return (
                                            this.print_menus(value)
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </CardBody>
                </Card>
            </PlainContent>
        )
    }
}

const mapStateToProps = (state) => {
    const menus = {}
    return {
        menus: menus,
        state: state.menuDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _create: (data) => dispatch(_create(data)),
        _update: (data) => dispatch(_update(data)),
        _delete: (id) => dispatch(_delete(id)),
        _getMenu: (params) => dispatch(_getMenu(params))
    }
}

export default Template(withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuDetail)));