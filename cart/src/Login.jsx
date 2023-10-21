import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { login, useLoggerIn, getProfile, getCart } from './cart';


export default function Login({ showLogin, setShowLogin }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const loggerIn = useLoggerIn();
    const [name, setName] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            async function fetchData() {
                try {
                    const id = await getProfile(token);
                    setName(id)
                    getCart(id)
                } catch (error) {
                    console.error('Lỗi:', error.message);
                }
            }

            fetchData();
        } else {
            console.log('Người dùng chưa đăng nhập');
        }

    }, [token])

    if (loggerIn) {
        return (

            <>
                < li className="navbar-item navbar-user" >
                    <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man.png" alt=""
                        className="navbar-user-img" />
                    <span className="navbar-user-name">{name}</span>
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
                            <a href='/' onClick={() => localStorage.setItem('token', '')}>Đăng xuất</a >
                        </li>
                    </ul>
                </li>
            </>
        );
    }
    else
        return (
            <>
                <li id="login-togger" onClick={() => setShowLogin(!showLogin)}><span className="navbar-item navbar-item--strong" >Đăng
                    nhập</span>
                </li>
                {showLogin && (
                    <div className="modal modal--active ">
                        <div className="modal__overlay" onClick={() => setShowLogin(!showLogin)}>
                            <div className="modal__body">
                                <div className="modal__inner">
                                    <div className="auth-form" id="auth-form" onClick={(e) => e.stopPropagation()}>
                                        <div className="auth-form__container">

                                            <div className="auth-form__header">
                                                <h3 className="auth-form__heading">Đăng nhập
                                                </h3>
                                            </div>

                                            <form onSubmit={
                                                handleSubmit(async (data) => {
                                                    const token = await login(data.mail, data.password)
                                                    // Lưu token vào localStorage sau khi đăng nhập thành công
                                                    localStorage.setItem('token', token);
                                                    const id = await getProfile(token);
                                                    setName(id)

                                                })}
                                                className="auth-form__form"
                                            >

                                                <div className="auth-form__group">
                                                    <input
                                                        {...register("mail", {
                                                            required: "Bạn bắt buộc phải điền email",
                                                            pattern:
                                                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        })}
                                                        aria-invalid={errors.mail ? "true" : "false"}
                                                        className="auth-form__input"
                                                        placeholder="Email của bạn"
                                                    />
                                                    {errors.mail && <p className="form-message" role="alert">{errors.mail?.message}</p>}
                                                </div>
                                                <div className="auth-form__group">
                                                    <input id="password" name="password" type="password"
                                                        className="auth-form__input" placeholder="Mật khẩu của bạn"
                                                        {...register("password", {
                                                            required: "Hãy điền mật khẩu của bạn",
                                                            minLength: {
                                                                value: 6,
                                                                message: "Mật khẩu phải có 6 kí tự"
                                                            }
                                                        })}
                                                    />
                                                    {errors.password && <p className="form-message">{errors.password.message}</p>}
                                                </div>
                                                <div className="auth-form__controls">
                                                    <input type="submit" className="auth-form__register-btn" />
                                                </div>

                                            </form>

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

