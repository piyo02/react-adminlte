import React, {Component} from 'react';
import user from './../../../../assets/img/user2-160x160.jpg';
import logo from './../../../../assets/img/AdminLTELogo.png';

export default class Menu extends Component {
    render() {
        return(
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src={logo} alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">React AdminLTE</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={user} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <a href="index.html/#" className="d-block">Administrator</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link active">
                                    <i className="nav-icon fas fa-home" />
                                    <p>
                                        Beranda
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview "> {/** menu-open */}
                                <a href="index.html" className="nav-link">
                                    <i className="nav-icon fas fa-cogs" />
                                    <p>Setting <i className="right fas fa-angle-left" /></p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="fas fa-circle nav-icon" />
                                            <p>Menu</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">Data</li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt" />
                                    <p>
                                        Calendar
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
