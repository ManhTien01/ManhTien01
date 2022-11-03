import React, { useState } from 'react';

import { login, useLoggerIn } from './cart';

export default function Register() {
    const loggerIn = useLoggerIn();
    const [showRegister, setShowRegister] = useState(false);

    // const [username, setUsername] = useState("sally");
    // const [password, setPassword] = useState("123");

    if (loggerIn) return null;
    return (
        <>
            <li id="login-togger" onClick={() => setShowRegister(!showRegister)}><span className="navbar-item navbar-item--strong navbar-item--separate" >Đăng
                ký</span>
            </li>
            {showRegister && (
                <div className="modal modal--active ">
                    <div className="modal__overlay">
                        <div className="modal__body">
                            <div className="modal__inner">
                                <div className="auth-form " id="auth-form">
                                    <div className="auth-form__container">

                                        <div className="auth-form__header">
                                            <h3 className="auth-form__heading">Đăng ký
                                            </h3>
                                            <a href="/api/users/userLogin"><span className="auth-form__switch-btn"
                                                id="auth-form__switch-btn-df-login">Đăng nhập</span></a>
                                        </div>

                                        <div className="auth-form__form">
                                            <div className="auth-form__group">
                                                <input id="name" name="name" type="text" className="auth-form__input"
                                                    placeholder="Tên đầy đủ" />
                                                <span className="form-message"></span>
                                            </div>

                                            <div className="auth-form__group">
                                                <input id="email" name="email" type="text" className="auth-form__input"
                                                    placeholder="Email của bạn" />
                                                <span className="form-message"></span>
                                            </div>
                                            <div className="auth-form__group">
                                                <input id="password" name="password" type="password"
                                                    className="auth-form__input" placeholder="Mật khẩu của bạn" />
                                                <span className="form-message"></span>
                                            </div>
                                            <div className="auth-form__group">
                                                <input id="password_confirmation" name="password_confirmation"
                                                    type="password" className="auth-form__input" placeholder="Nhập lại mật khẩu của bạn" />
                                                <span className="form-message"></span>
                                            </div>

                                        </div>
                                        <div className="auth-form__controls">

                                            <button className="auth-form__register-btn disabled">ĐĂNG KÝ</button>


                                        </div>
                                        <div className="auth-form__aside">
                                            <p className="auth-form__policy-text">
                                                Bằng việc đăng ký, bạn đã đồng ý với Shoppee về
                                                <a href="" className="auth-form__text-link">Điều khoản dịch vụ</a> &
                                                <a href="" className="auth-form__text-link">Chính sách bảo mật</a>
                                            </p>
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

