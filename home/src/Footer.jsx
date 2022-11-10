import React from "react";


export default function Footer() {
    return (
        <div className="footer">
            <div className="grid wide footer__content">
                <div className="row-df">
                    <div className="col-df l-2-4 m-df-4 c-6">
                        <h3 className="footer-heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Shoes-Shop Mall</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-df l-2-4 m-df-4 c-6">
                        <h3 className="footer-heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Giới thiệu</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-df l-2-4 m-df-4 c-6">
                        <h3 className="footer-heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Giày Sneaker</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Giày Chelsea Boot</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Giày thể thao</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-df l-2-4 m-df-4 c-6">
                        <h3 className="footer-heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link ">
                                    <i className="footer-item__icon fa-brands fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link ">
                                    <i className="footer-item__icon fa-brands fa-square-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link ">
                                    <i className="footer-item__icon fa-brands fa-linkedin"></i>
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-df l-2-4 m-df-4 c-12">
                        <h3 className="footer-heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__download">
                            <img src="https://www.qrcode-gen.com/images/qrcode-default.png" alt="Download QR" className="footer__download-qr" />
                            <div className="footer__download-app">
                                <a href="" className="footer__download-app-link">

                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="Google Play" className="footer__download-img" />
                                </a>
                                <a href="" className="footer__download-app-link">

                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="App Store" className="footer__download-img" />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}