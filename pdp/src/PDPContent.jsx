import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { currency, getProductById } from 'home/products';
import placeAddToCart from 'addtocart/placeAddToCart';

export default function PDPContent() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            getProductById(id).then(setProduct)

        } else {
            setProduct(null);
        }
    }, [id])

    const addToCart = useRef(null)

    useEffect(() => {
        if (addToCart.current) {
            placeAddToCart(addToCart.current, product.id)
        }
    }, [product])



    if (!product) {
        return null;
    }
    return (
        <div>

            <div className="grid__full-width product-direction">
                <a href="#" className="button_link">Shoes </a>
                <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i></div>
                <a href="" className="button_link">{product.category}</a>
                <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i></div>
                <a href="" className="button_link">{product.subcategory}</a>
                <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i></div>
                <p>{product.name}</p>

            </div>
            <div className="row-df products-details">
                <div className="col-df l-5 m-df-12 c-12 products-details__img">

                    <div className="">
                        <div className="col-df l-12 m-df-12 c-12 ">

                            <img className='products-details__img-lg' src={product.avatar} alt={product.name} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="col-df l-2-4 products-details__img-sm">
                            <img src={product.avatar} alt={product.name} />
                        </div>
                        <div className="col-df l-2-4 products-details__img-sm">
                            <img src={product.avatar} alt={product.name} />
                        </div>
                        <div className="col-df l-2-4 products-details__img-sm">
                            <img src={product.avatar} alt={product.name} />
                        </div>
                        <div className="col-df l-2-4 products-details__img-sm">
                            <img src={product.avatar} alt={product.name} />
                        </div>
                        <div className="col-df l-2-4 products-details__img-sm">
                            <img src={product.avatar} alt={product.name} />
                        </div>
                    </div>


                </div>
                <div className="col-df l-7 m-df-12 c-12 products-details__body">
                    <div className="products-details__body-name">
                        <span className="products-details__body-status">Yêu thích</span>
                        <span className="products-details__body-content">{product.name}</span>
                        <div className="products-details__body-trust-wrap">
                            <ul className="products-details__body-trust">
                                <li className="products-details__body-trust-item products-details__body-trust-item--separate">
                                    <a href="#" className="product-number product-number-star">4.0</a>
                                    <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>

                                </li>
                                <li className="products-details__body-trust-item products-details__body-trust-item--separate">
                                    <a href="" className="product-number product-number-comments">11</a>
                                    <span>Đánh giá</span>
                                </li>
                                <li className="products-details__body-trust-item ">
                                    <span className="product-number product-number-sold">{product.sold}</span>
                                    <span>Đã bán</span>
                                    <i className="navbar-item-icon fa-solid fa-circle-info"></i>

                                </li>
                            </ul>
                            <ul className="products-details__body-trust">
                                <li>Tố cáo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid__full-width products-details__body-price">
                        <span className="products-details__body-price-item product-old-price">{product.price}</span>
                        <span className="products-details__body-price-item product-new-price">{product.price - product.price * product.discount / 100}</span>
                        <span className="products-details__body-price-item product-discount-price">{product.discount}%
                            GIẢM</span>
                    </div>
                    <ul className="mt-4 products-details__option">
                        <li className="products-details__body-option products-details__body-discount">
                            <span className="products-details__option-item">Mã giảm giá của shop</span>
                            <span className="product-voucher">50% GIẢM</span>
                            <span className="product-voucher">Giảm đ20k</span>
                            <span className="product-voucher">Giảm đ10k</span>
                            <span className="product-voucher">Giảm đ5k</span>
                        </li>
                        <li className="products-details__body-option products-details__body-deal">
                            <span className="products-details__option-item">Deal sốc</span>
                            <span className="product-deal">Mua Kèm Deal Sốc</span>
                        </li>
                        <li className="products-details__body-option">
                            <span className="products-details__option-item">Bảo hiểm</span>
                            <span className="mg-r-4">Bảo hiểm thời trang</span>
                            <span className="status--new mg-r-32">Mới</span>
                            <a href="" className="mg-r-4 button_link">Tìm hiểu thêm</a>
                        </li>
                        <li className="products-details__body-option products-details__body-option-wrap-transport">
                            <span className="products-details__option-item">Vận chuyển</span>
                            <div className="products-details__body-transport">
                                <ul className="transport-location">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1cdd37339544d858f4d0ade5723cd477.png"
                                        alt="Mien phi van chuyen" className="product-transpot_free-img" />
                                    Miễn phí vận chuyển
                                </ul>
                                <ul className="transport-location">
                                    <li className="transport-location-item">
                                        <i className="fa-solid fa-truck-fast"></i>
                                        Vận chuyển tới

                                    </li>
                                    <li className="transport-location-item">
                                        <a href="" className="transport-location-item-link">
                                            Phường Tràng Tiền, Quận Hoàn Kiếm
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="transport-location">
                                    <li className="transport-location-item">Phí vận chuyển</li>
                                    <li className="transport-location-item">
                                        <a href="" className="transport-location-item-link">
                                            đ0 - đ18.000
                                            <i className="fa-solid fa-chevron-down"></i>

                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="products-details__body-option products-details__body-color">
                            <span className="products-details__option-item">Màu sắc</span>
                            <ul className="product-color">
                                {

                                    Array.from(product.color).map(e => {
                                        return (
                                            <li className="product-color-item" key={e}>{e}</li>

                                        )
                                    })
                                }
                               


                            </ul>
                        </li>
                        <li className="products-details__body-option products-details__body-size">
                            <span className="products-details__option-item">Kích cỡ</span>
                            <ul className="product-size">
                                {
                                  
                                    Array.from(product.size).map(e => {
                                        return (

                                            <li className="product-size-item" key={e}>{e}</li>

                                        )
                                    })
                                }



                            </ul>

                        </li>

                    </ul>

                    <div className='flex mt-8'>

                        <div ref={addToCart} >

                        </div>
                        <div className="btn-df btn-cart-buy">Mua ngay</div>

                    </div>

                </div>
            </div>
        </div>

    )
}