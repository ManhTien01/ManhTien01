import React from "react";
import MiniCart from "cart/MiniCart"
import Login from "cart/Login"
import Register from "cart/Register";
import Search from "./Search";


export default function Header() {
    return (
        <div className="header">
            <div className="grid wide header">
                <nav className="navbar hide-on-mobile-tablet">
                    <ul className="navbar-list">
                        <li className="navbar-item navbar-qr navbar-item--separate">
                            Vào cửa hàng trên ứng dụng Shoes
                            <div className="header-qr">
                                <img src="https://www.qrcode-gen.com/images/qrcode-default.png" alt="QR-Code" className="header-qr-img" />
                                <div className="header-qr-apps">
                                    <a href="" className="header__qr-link">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="GG Play" className="header-qr-download-img" />
                                    </a>
                                    <a href="" className="header__qr-link">

                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="App Store" className="header-qr-download-img" />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <span className="navbar-title--no-pointer">Kết nối</span>
                            <a href="" className="navbar-icon-link"><i className="navbar-icon fa-brands fa-facebook"></i></a>
                            <a href="" className="navbar-icon-link"><i className="navbar-icon fa-brands fa-instagram"></i></a>
                        </li>

                    </ul>
                    <ul className="navbar-list">
                        <li className="navbar-item header__notify-items--has-notify">
                            <a href="" className="navbar-item__link header__notify-items--has-notify">
                                <i className="navbar-item-icon fa-solid fa-bell "></i>
                                Thông báo
                            </a>
                            <div className="header__notify">
                                <header className="header__notify-header">
                                    <h3>Thông báo mới nhận</h3>
                                </header>
                                <ul className="header__notify-list">
                                    <li className="header__notify-items ">
                                        <a href="" className="header__notify-link">
                                            <img src="https://venuko.vn/Upload/2021/7/31/top-5-my-pham-ohui-han-quoc-duoc-phai-dep-san-lung-nhieu-nhat-hinh-anh-1.png"
                                                alt="" className="header__notify-img" />
                                            <div className="header__notify-infor">
                                                <span className="header__notify-name">Mỹ phẩm Ohiu chính hãng</span>
                                                <span className="header__notify-description">Mô tả Mỹ phẩm Ohiu chính hãng</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="header__notify-items ">
                                        <a href="" className="header__notify-link">
                                            <img src="https://venuko.vn/Upload/2021/7/31/top-5-my-pham-ohui-han-quoc-duoc-phai-dep-san-lung-nhieu-nhat-hinh-anh-1.png"
                                                alt="" className="header__notify-img" />
                                            <div className="header__notify-infor">
                                                <span className="header__notify-name">Mỹ phẩm Ohiu chính hãng</span>
                                                <span className="header__notify-description">Mô tả Mỹ phẩm Ohiu chính hãng</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="header__notify-items ">
                                        <a href="" className="header__notify-link">
                                            <img src="https://venuko.vn/Upload/2021/7/31/top-5-my-pham-ohui-han-quoc-duoc-phai-dep-san-lung-nhieu-nhat-hinh-anh-1.png"
                                                alt="" className="header__notify-img" />
                                            <div className="header__notify-infor">
                                                <span className="header__notify-name">Mỹ phẩm Ohiu chính hãng</span>
                                                <span className="header__notify-description">Mô tả Mỹ phẩm Ohiu chính hãng</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                                <footer className="header__notify-footer">
                                    <a href="" className="header__noify-footer-btn">Xem tất cả</a>
                                </footer>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <a href="" className="navbar-item__link">
                                <i className="navbar-item-icon fa-solid fa-circle-info"></i>
                                Trợ giúp

                            </a>
                        </li>

                        <Register />
                        <Login />


                    </ul>
                </nav>

                <div className="header-width-search">
                    <label htmlFor="mobile-search-checkbox" className="header__mobile-search">
                        <i className="header__mobile-search-icon fa-solid fa-magnifying-glass"></i>
                    </label>
                    <div className="header__logo hide-on-tablet">
                        <div className="header__logo-link">
                            <a href="/">

                                <i className="fa-solid fa-bag-shopping header__logo-icon"></i>
                                <span className="header__logo-title">Shoes</span>
                            </a>
                        </div>
                    </div>

                    <input type="checkbox" hidden id="mobile-search-checkbox" className="header__search-checkbox" />



                    <Search />


                    <MiniCart />
                    <ul className="header__sort-bar">
                        <li className="header__sort-item">
                            <a href="" className="header__sort-link">Liên quan</a>
                        </li>

                        <li className="header__sort-item header__sort-item--active">
                            <a href="" className="header__sort-link">Mới nhất</a>
                        </li>

                        <li className="header__sort-item">
                            <a href="" className="header__sort-link">Bán chạy</a>
                        </li>

                        <li className="header__sort-item">
                            <a href="" className="header__sort-link">Giá</a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
}