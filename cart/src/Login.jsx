import React, { useState } from 'react';

import {Link} from "react-router-dom"

import { login, useLoggerIn } from './cart';

export default function Login() {
    const loggerIn = useLoggerIn();
    const [showLogin, setShowLogin] = useState(false);

    const [username, setUsername] = useState("sally");
    const [password, setPassword] = useState("123");

    if (loggerIn) return (
        <>
            < li className="navbar-item navbar-user" >
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man.png" alt=""
                    className="navbar-user-img" />
                <span className="navbar-user-name">{username}</span>
                <ul className="navbar-user-menu">
                    <li className="navbar-user-item">
                        <a href="/">Tài khoản của tôi</a>
                    </li>
                    <li className="navbar-user-item">
                        <a href="/me/stored/products">Đơn mua</a>
                    </li>
                    <li className="navbar-user-item">
                        <Link to={"/cart"}>Giỏ hàng</Link>
                    </li>
                    <li className="navbar-user-item navbar-user-item--separate">
                        <a href="">Đăng xuất</a>
                    </li>
                </ul>
            </li>
        </>
    );
    return (
        <>
            <li id="login-togger" onClick={() => setShowLogin(!showLogin)}><span className="navbar-item navbar-item--strong" >Đăng
                nhập</span>
            </li>
            {showLogin && (
                <div className="modal modal--active ">
                    <div className="modal__overlay">
                        <div className="modal__body">
                            <div className="modal__inner">
                                <div className="auth-form" id="auth-form">
                                    <div className="auth-form__container">

                                        <div className="auth-form__header">
                                            <h3 className="auth-form__heading">Đăng nhập
                                            </h3>
                                            <a href="/api/users/createUser"><span className="auth-form__switch-btn"
                                                id="auth-form__switch-btn-df-login">Đăng ký</span></a>
                                        </div>

                                        <div className="auth-form__form">


                                            <div className="auth-form__group">
                                                <input id="email" name="email" type="text" className="auth-form__input"
                                                    placeholder="Email của bạn" value={username}
                                                    onChange={(evt) => setUsername(evt.target.value)} />
                                                <span className="form-message"></span>
                                            </div>
                                            <div className="auth-form__group">
                                                <input id="password" name="password" type="password"
                                                    className="auth-form__input" placeholder="Mật khẩu của bạn" value={password}
                                                    onChange={(evt) => setPassword(evt.target.value)} />
                                                <span className="form-message"></span>
                                            </div>

                                        </div>
                                        <div className="auth-form__controls">

                                            <button className="auth-form__register-btn disabled" onClick={() => login(username, password)}>ĐĂNG NHẬP</button>


                                        </div>
                                        <div className="auth-form__aside">
                                            <div className="auth-form__help">
                                                <a href="" className="auth-form__help-link auth-form__help-fogot">Quên mật khẩu</a>
                                                <span className="auth-form__help-separate"></span>
                                                <a href="" className="auth-form__help-link ">Cần trợ giúp?</a>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="auth-form__socials">
                                        <a href="" className="auth-form__socials--facebook btn-df btn-df--size-s btn-df--width-icon">
                                            <i className="auth-form__socials-icon fa-brands fa-facebook"></i>
                                            <span className="auth-form__socials-title">
                                                Facebook
                                            </span>

                                        </a>
                                        <a href="" className="auth-form__socials--google btn-df btn-df--size-s btn-df--width-icon">
                                            <i className="auth-form__socials-icon fa-brands fa-google"></i>
                                            <span className="auth-form__socials-title">
                                                Google
                                            </span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </>
    );
}

