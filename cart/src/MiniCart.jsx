import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { cart, clearCart } from './cart'
import { numberWithCommas } from 'home/products'

export default function MiniCart() {
    const [items, setItems] = useState(undefined)
    const [showCart, setShowCart] = useState(false)


    useEffect(() => {
        setItems(cart.value?.cartItems)
        return cart.subscribe((c) => {
            setItems(c?.cartItems)
        })
    }, [])
    
    if (!items) return (
        <>
            <div className="header__cart" onClick={() => setShowCart(!showCart)}>
                <div className="header__cart-wrap ">
                    <i className="header__cart-icon fa-solid fa-cart-shopping"></i>



                    {/* no cart */}
                    <div className="header__cart-list ">
                        <img src="https://bizweb.dktcdn.net/100/351/215/themes/713955/assets/empty-cart.png?1617619216743" alt="" className="header__cart-no-cart-img" />
                        <span className="header__cart-list-no-cart-msg">
                            Chưa có sản phẩm
                        </span>

                    </div>

                </div>
            </div>
        </>
    );

    return (
        <>
            <div className="header__cart" onClick={() => setShowCart(!showCart)}>
                <div className="header__cart-wrap ">
                    <i className="header__cart-icon fa-solid fa-cart-shopping"></i>

                    <span className="header__cart-notice">{items.length}</span>

                    {showCart && (
                        <>
                            <div className="header__cart-list ">
                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    {/* cart-item  */}

                                    {items.map((item) => (
                                        <React.Fragment key={item.slug}>
                                            <li className="header__cart-item">
                                                <img src={item.avatar} alt={item.name} className="header__cart-img" />
                                                <div className="header__cart-item-infor">
                                                    <div className="header__cart-item-head">
                                                        <h5 className="header__cart-item-name">
                                                            {item.name}
                                                        </h5>
                                                        <div className="header__cart-item-price-wrap">
                                                            <span className="header__cart-item-price">{numberWithCommas(Math.round(item.price - item.price * item.discount / 100))}</span>
                                                            <span className="header__cart-item-multiply">x</span>
                                                            <span className="header__cart-item-qnt">{item.quantity}</span>

                                                        </div>
                                                    </div>
                                                    <div className="header__cart-item-body">
                                                        <span className="header__cart-item-description">Phân loại hàng: Bạc</span>
                                                        <span className="header__cart-item-remove">Xoá</span>

                                                    </div>
                                                </div>
                                            </li>
                                        </React.Fragment>
                                    ))}



                                </ul>
                                <div className="header__cart-viewcart">
                                    <button id="clearcart"
                                        className="btn-df"
                                        onClick={clearCart}
                                    >
                                        Xoá giỏ hàng
                                    </button>
                                    <Link to={"/cart"}>

                                        <button className="btn-df btn-df--primery">Xem giỏ hàng</button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>


        </>
    )
}