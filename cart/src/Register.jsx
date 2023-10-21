import React, { useState } from 'react';
import { register } from './cart';
import { login, useLoggerIn } from './cart';

export default function Register({ setShowLogin }) {
    const [showRegister, setShowRegister] = useState(false);
    const loggerIn = useLoggerIn();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không trùng khớp.');
            return;
        }
        try {
            const res = await register(formData.fullName, formData.email, formData.password)
            if (res) {
                setFormData({})
                setShowRegister(false)
                setShowLogin(true)
            }
            else {
                alert("Tài khoản hoặc mật khẩu không đúng, vui lòng kiểm tra lại!")
            }
        } catch (error) {
            console.log(error)
        }

    };
    if (!loggerIn) {
        return (
            <>
                <li id="login-togger" onClick={() => setShowRegister(!showRegister)}><span className="navbar-item navbar-item--strong navbar-item--separate" >Đăng
                    ký</span>
                </li>
                {showRegister && (
                    <div className="modal modal--active " onClick={() => setShowRegister(!showRegister)}>
                        <div className="modal__overlay" >
                            <div className="modal__body">
                                <div className="modal__inner">
                                    <div className="auth-form " id="auth-form" onClick={(e) => e.stopPropagation()}>
                                        <div className="auth-form__container">

                                            <div className="auth-form__header">
                                                <h3 className="auth-form__heading">Đăng ký
                                                </h3>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <div className="auth-form__group">
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        name="fullName"
                                                        className="auth-form__input"
                                                        placeholder="Tên đầy đủ"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="auth-form__group">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="auth-form__input"
                                                        placeholder="Email của bạn"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="auth-form__group">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="auth-form__input"
                                                        placeholder="Mật khẩu của bạn"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="auth-form__group">
                                                    <input
                                                        type="password"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        className="auth-form__input"
                                                        placeholder="Nhập lại mật khẩu của bạn"
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <button type="submit" className="auth-form__register-btn" >Đăng ký</button>
                                            </form>

                                            <div className="auth-form__aside">
                                                <p className="auth-form__policy-text">
                                                    Bằng việc đăng ký, bạn đã đồng ý với Shoes về
                                                    <a href="" className="auth-form__text-link"> Điều khoản dịch vụ</a> &
                                                    <a href="" className="auth-form__text-link"> Chính sách bảo mật</a>
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
    else return null
}

