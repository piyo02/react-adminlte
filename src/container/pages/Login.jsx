import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }


    addClassLoginPage = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url('../../../assets/img/bg-login.jpg')";
        body.classList.add('login-page');
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    componentDidMount(){
        this.addClassLoginPage();
    }

    render() {
        return(
            <div className="login-box">
                <div className="login-logo">
                    <p><b>React</b>JS</p>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <h3 className="login-box-msg">Login</h3>
                        <form action="#" method="post">
                            <label htmlFor="email">Email:</label>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" value={this.state.email} name="email" id="email" placeholder="Email" onChange={this.handleFormChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-md-7" htmlFor="password">Password:</label>
                                <p className="mb-1 col-md-5">
                                    <NavLink to="/forget-password">Lupa password?</NavLink>
                                </p>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" name="password" id="password" value={this.state.password} className="form-control" placeholder="Password" onChange={this.handleFormChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Ingat Saya
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
                                </div>
                            </div>
                        </form>
                        {/* <p className="mb-0 mt-4">
                            <a href="/" className="text-center">Register a new membership</a>
                        </p> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;