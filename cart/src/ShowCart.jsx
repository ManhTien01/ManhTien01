import React, { useState, useEffect } from 'react';
import { getProductById } from '../../home/src/products'
const ShowCart = ({ item }) => {
    const [product, setProduct] = useState({})
    const [priceWithDiscount, setPriceWithDiscount] = useState('')
    useEffect(() => {
        getProductById(item?.productId).then(setProduct)
        
    }, [])
    useEffect(() => {
        if(product?.priceoption) {
            const optionPrice = product?.priceoption.find((i) => i._id === item?.priceOptionId)
            const price = optionPrice?.price
            const discount = optionPrice?.discount
            setPriceWithDiscount(price - price * discount / 100)
        }
    },[product?.priceoption])

    return (
        <>
            <li className="header__cart-item">
                <img src={product?.avatar} alt={product?.name} className="header__cart-img" />
                <div className="header__cart-item-infor">
                    <div className="header__cart-item-head">
                        <h5 className="header__cart-item-name">
                            {product?.name}
                        </h5>
                        <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">{priceWithDiscount.toLocaleString()}đ</span>
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">{item?.quantity}</span>

                        </div>
                    </div>
                    <div className="header__cart-item-body">
                        <span className="header__cart-item-description">Phân loại hàng: Bạc</span>
                        <span className="header__cart-item-remove">Xoá</span>

                    </div>
                </div>
            </li>
        </>
    )
}

export default ShowCart