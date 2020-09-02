import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Template = (Children) => {
    return(
        class AdminTemplate extends Component {
            render() {
                return(
                    <div>
                        <Header/>
                        <Menu/>
                        <Children />
                        <Footer/>
                    </div>
                )
            }
        }
    )
}

export default Template;