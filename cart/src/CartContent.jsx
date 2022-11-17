import React, { useState, useEffect } from 'react';
import { cart, clearCart } from "cart/cart";
import { numberWithCommas } from "home/products";


export default function CartContent() {
    const [items, setItems] = useState([])

    useEffect(() => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
        []
    )

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {items.map((item) => (
                    <React.Fragment key={item.id}>
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

            </div>
            {items.length > 0 && (
                <div className="flex m-10">
                    <div className="flex-grow">
                        <button id="clearcart"
                            className="btn-df"
                            onClick={clearCart}
                        >
                            Xoá giỏ hàng
                        </button>
                    </div>
                    <div className="flex-end">
                        
                        <button className="btn-df btn-df--primery flex-end">Mua hàng</button>
                    </div>
                </div>
            )}
        </>
    )
}