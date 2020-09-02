import React, {Component} from 'react';
import user from './../../../assets/img/user2-160x160.jpg';
import logo from './../../../assets/img/AdminLTELogo.png';
import { NavLink, Link } from 'react-router-dom';

export default class Menu extends Component {
    componentDidMount(){
        const link = document.querySelector('.nav-link.active');
        const grandParentLinkActive = link.parentElement.parentElement.parentElement;
        if(grandParentLinkActive != null) grandParentLinkActive.classList.add('menu-open');
    }

    render() {
        return(
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" className="brand-link">
                    <img src={logo} alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">React AdminLTE</span>
                </Link>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={user} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <Link to="/profil" className="d-block">Administrator</Link>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">
                                    <i className="nav-icon fas fa-home" />
                                    <p>
                                        Beranda
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item has-treeview">
                                <NavLink to="/setting" className="nav-link">
                                    <i className="nav-icon fas fa-cogs" />
                                    <p>Setting <i className="right fas fa-angle-left" /></p>
                                </NavLink>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/group" className="nav-link">
                                            <i className="nav-icon fas fa-home" />
                                            <p>
                                                Group
                                            </p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/menus" className="nav-link">
                                            <i className="nav-icon fas fa-circle" />
                                            <p>
                                                Menu
                                            </p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">User</li>
                            <li className="nav-item">
                                <NavLink to="/users" className="nav-link">
                                    <i className="nav-icon fas fa-users" />
                                    <p>
                                        User
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
