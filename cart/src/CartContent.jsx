import React, { useState, useEffect } from 'react';
import { cart, clearCart } from "cart/cart";
import  ShowCart  from './ShowCart'


export default function CartContent() {
    const [items, setItems] = useState([])

    useEffect(() => cart.subscribe((value) => setItems(value?.products ?? [])),
        []
    )

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {items.map((item) => (
                    <ShowCart key={item?.productId} item={item} />
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