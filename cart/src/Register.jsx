import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { login, useLoggerIn } from './cart';

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const loggerIn = useLoggerIn();
    const [showRegister, setShowRegister] = useState(false);


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

                                        <form onSubmit={handleSubmit((data) => console.log(data))} className="auth-form__form">
                                            <div className="auth-form__group">
                                                <input
                                                    {...register("firstName", { required: true })}
                                                    aria-invalid={errors.firstName ? "true" : "false"}
                                                    id="name" name="name" type="text" className="auth-form__input"
                                                    placeholder="Tên đầy đủ"
                                                />
                                                {errors.firstName?.type === 'required' && <p className="form-message" role="alert">Bạn bắt buộc phải điền tên</p>}
                                            </div>

                                            <div className="auth-form__group">
                                                <input
                                                    {...register('mail', {
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
                                                    // onChange={(evt) => setPassword(evt.target.value)}
                                                    {...register("password", {
                                                        required: "Hãy điền mật khẩu của bạn",
                                                        minLength: {
                                                            value: 8,
                                                            message: "Mật khẩu phải có 8 kí tự"
                                                        }
                                                    })}
                                                />
                                                {errors.password && <p className="form-message">{errors.password.message}</p>}
                                            </div>
                                            <div className="auth-form__group">
                                               
                                                <input
                                                    className="auth-form__input"
                                                    placeholder="Nhập lại mật khẩu của bạn"
                                                    type="password"
                                                    {...register("password_repeat", {
                                                        validate: value =>
                                                            value === password.current || "Mật khẩu chưa chính xác"
                                                    })}
                                                />
                                                {errors.password_repeat && <p className="form-message">{errors.password_repeat.message}</p>}
                                            </div>
                                            <div className="auth-form__controls">

                                                <input type="submit" className="auth-form__register-btn disabled" />


                                            </div>

                                        </form>

                                        <div className="auth-form__aside">
                                            <p className="auth-form__policy-text">
                                                Bằng việc đăng ký, bạn đã đồng ý với Shoes về
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

