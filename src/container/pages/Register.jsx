import React, { Component } from 'react';

class Register extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row" style={{minHeight: "100vh"}}>
                    <div className="col-12" style={{backgroundColor: "#E9ECEF"}}>
                        <div className="col-lg-4 col-md-6 col-xs-12 m-auto" style={{paddingTop: "5rem"}}>
                            <div className="login-logo">
                                <a href="../../index2.html"><b>React</b>JS</a>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="login-box-msg">Daftar</h3>
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="firstName">Nama Depan:</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Nama Depan" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="lastName">Nama Belakang:</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Nama Belakang" />
                                                </div>
                                            </div>
                                        </div>
                                        <label htmlFor="email">Email:</label>
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-envelope" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className="col-md-7" htmlFor="password">Password:</label>
                                            <p className="mb-1 col-md-5">
                                                <a href="#">Lupa password?</a>
                                            </p>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-lock" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8"></div>
                                            <div className="col-4">
                                                <button type="submit" className="btn btn-primary btn-block">Daftar</button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="mb-0 mt-4">
                                        Sudah punya akun? <a href="register.html" className="text-center">Login</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;