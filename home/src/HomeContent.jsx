import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {getProducts } from "./products";
import {useLoggerIn} from "cart/cart"

export default function HomeContent() {
    const LoggerIn = useLoggerIn()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <div className="row-df sm-gutter content">
            <div className="col-df l-2 m-0 c-0">
                <nav className="category">
                    <h3 className="category__heading">Danh mục </h3>

                    <ul className="category-list">
                        <li className="category-item ">
                            <a href="" className="category-item__link">Giày Sneaker</a>
                        </li>
                        <li className="category-item">
                            <a href="" className="category-item__link">Giày Chelsea Boot</a>
                        </li>
                        <li className="category-item">
                            <a href="" className="category-item__link">Giày thể thao</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-df l-10 m-df-12 c-12">
                <div className="home-filter hide-on-mobile-tablet">
                    <span className="home-filter__lable">Sắp xếp theo</span>
                    <button className="home-fillter-btn btn-df">Phổ biến</button>
                    <button className="home-fillter-btn btn-df btn-df--primery">Mới nhất</button>
                    <button className="home-fillter-btn btn-df">Bán chạy</button>

                    <div className="select-input">
                        <span className="select-input__label">Giá
                        </span>
                        <i className="select-input__icon fa-solid fa-chevron-down"></i>
                        <ul className="select-input__list">
                            <li className="select-input__icon">
                                <a href="" className="select-input__link">
                                    Giá: thấp đến cao
                                </a>
                            </li>
                            <li className="select-input__icon">
                                <a href="" className="select-input__link">
                                    Giá: cao đến thấp
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="home-filter__page">
                        <span className="home-filter__page-num">
                            <span className="home-filter__page-current">1</span>/14


                        </span>
                        <div className="home-filter__page-control">
                            <a href="" className="home-filter__page-btn home-filter__page-btn--disabled">
                                <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>

                            </a>
                            <a href="" className="home-filter__page-btn">
                                <i className="home-filter__page-icon fa-solid fa-chevron-right"></i>

                            </a>
                        </div>
                    </div>
                </div>

                <div className="nav moblie-category">
                    <ul className="moblie-category__list">
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker & boot abc</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                        <li className="moblie-category__item">
                            <a href="" className="moblie-category__link">Sneaker</a>
                        </li>
                    </ul>

                </div>

                <div className="row-df sm-gutter">
                    {products.map((product) => (
                        <div className="col-df l-2-4 m-df-4 c-6 home-product-item-wrapper" key={product.slug}>
                            <div className="home-product-item">
                                <Link to={`products/${product._id}`}>
                                    <div className="home-product-item__img" >

                                        <img src={product.avatar} />
                                    </div>
                                    <h4 className="home-product-item__name">{product.name}</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">{product.price}đ</span>
                                        <span className="home-product-item__price-new">{product.price - product.price* product.discount / 100}đ</span>
                                    </div>
                                    <div className="home-product-item__action">
                                        <span className="home-product-item__like home-product-item__liked">
                                            <i className="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                                            <i className="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                                        </span>
                                        <div className="home-product-item__ratting">
                                            <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                            <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                            <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                            <i className="homer-product-item__star--gold fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="home-product-item__sold">{product.sold} Đã bán</span>
                                    </div>
                                    <div className="home-product-item__origin">
                                        <span className="home-product-item__brand">{product.brand}</span>
                                        <span className="home-product-item__origin-name">{product.origin}</span>

                                    </div>
                                    <div className="home-product-item__favorite">
                                        <i className="fa-solid fa-check"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <div className="home-product-item__sale-off">
                                        <span className="home-product-item__sale-off-percent">{product.discount}%</span>
                                        <span className="home-product-item__sale-off-laybel">GIẢM</span>
                                    </div>
                                </Link>
                                    
                            </div>


                        </div>
                    ))}

                </div>

                <ul className="pagination home-product__pagination">
                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">
                            <i className="pagination-item__icon fa-solid fa-chevron-left"></i>
                        </a>
                    </li>

                    <li className="pagination-item pagination-item--active">
                        <a href="" className="pagination-item__link">1</a>
                    </li>

                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">2</a>
                    </li>

                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">3</a>
                    </li>

                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">4</a>
                    </li>

                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">5</a>
                    </li>

                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">...</a>
                    </li>
                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">14</a>
                    </li>

                    <li className="pagination-item">
                        <a href="" className="pagination-item__link">
                            <i className="pagination-item__icon fa-solid fa-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>



    )
}