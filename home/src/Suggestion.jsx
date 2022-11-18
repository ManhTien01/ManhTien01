import { useForm } from 'react-hook-form';
import React, { useState } from 'react';




const Suggestion = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showSuggestion, setShowSuggestion] = useState(false);

    return (
        <>
            <li className="navbar-item" onClick={() => setShowSuggestion(!showSuggestion)}>
                <a className="navbar-item__link">
                    <i className="navbar-item-icon fa-solid fa-circle-info"></i>
                    Gợi ý

                </a>
            </li>
            {showSuggestion && (
                <div className="modal modal--active ">
                    <div className="modal__overlay">
                        <div className="modal__body">
                            <div className="modal__inner">
                                <div className="auth-form " id="auth-form">
                                    <div className="auth-form__container">

                                        <div className="auth-form__header">
                                            <h3 className="auth-form__heading">Gợi ý mua giày
                                            </h3>
                                            
                                        </div>

                                        <form onSubmit={handleSubmit((data) => console.log(data))} className="auth-form__form">
                                            <div className="auth-form__group">
                                                <input
                                                    {...register("firstName", { required: true })}
                                                    aria-invalid={errors.firstName ? "true" : "false"}
                                                    id="name" name="name" type="text" className="auth-form__input"
                                                    placeholder="Độ tuổi"
                                                />
                                                {errors.firstName?.type === 'required' && <p className="form-message" role="alert">Bạn bắt buộc phải điền tên</p>}
                                            </div>

                                            <div className="auth-form__group">
                                                <input
                                                    {...register("firstName", { required: true })}
                                                    aria-invalid={errors.firstName ? "true" : "false"}
                                                    id="name" name="name" type="text" className="auth-form__input"
                                                    placeholder="Màu sắc ưa thích"
                                                />
                                                {errors.firstName?.type === 'required' && <p className="form-message" role="alert">Bạn bắt buộc phải điền màu sắc</p>}
                                            </div>
                                            <div className="auth-form__group">
                                                <input
                                                    {...register("firstName", { required: true })}
                                                    aria-invalid={errors.firstName ? "true" : "false"}
                                                    id="name" name="name" type="text" className="auth-form__input"
                                                    placeholder="Chiều cao"
                                                />
                                                {errors.firstName?.type === 'required' && <p className="form-message" role="alert">Bạn bắt buộc phải điền chiều cao</p>}
                                            </div>
                                            <div className="auth-form__group">
                                                <input
                                                    {...register("firstName", { required: true })}
                                                    aria-invalid={errors.firstName ? "true" : "false"}
                                                    id="name" name="name" type="text" className="auth-form__input"
                                                    placeholder="Cân nặng"
                                                />
                                                {errors.firstName?.type === 'required' && <p className="form-message" role="alert">Bạn bắt buộc phải điền cân nặng</p>}
                                            </div>
                                            <div className="auth-form__controls mb-8">

                                                <input type="submit" className="auth-form__register-btn disabled" />


                                            </div>

                                        </form>

                                    </div>
                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}

export default Suggestion