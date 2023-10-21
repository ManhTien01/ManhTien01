import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { numberWithCommas, searchProductByKeyword, searchProductByCategory } from "./products";
import ReactPaginate from 'react-paginate';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function HomeContent({keyword}) {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')
    const [currentPage, setCurrentPage] = useState(0);
    const [valueTap, setValueTap] = useState('one')
    const itemsPerPage = 10;
    const offset = currentPage * itemsPerPage;
    const currentPageData = products && products.slice(offset, offset + itemsPerPage);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await searchProductByKeyword(keyword);
              if (!response) {
                throw new Error('Yêu cầu không thành công');
              }
              setProducts(response);
            } catch (error) {
              console.error('Lỗi:', error);
            }
          };
      
          fetchData();
    }, [keyword])
    useEffect(() => {
        try {
            category && searchProductByCategory(category).then(setProducts)
        }
        catch (error) {
            console.log(error)
        }
    }, [category])

    const handleChange = (event, newValue) => {
        setValueTap(newValue);
    };

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const sortAscending = () => {
        const productsWithDiscount = products.map((product) => ({
            ...product,
            discountedPrice: product.price - (product.price * product.discount) / 100,
        }));
        const sortedProducts = [...productsWithDiscount].sort((a, b) => a?.discountedPrice - b?.discountedPrice);
        setProducts(sortedProducts);
    };

    const sortDescending = () => {
        const productsWithDiscount = products.map((product) => ({
            ...product,
            discountedPrice: product.price - (product.price * product.discount) / 100,
        }));
        const sortedProducts = [...productsWithDiscount].sort((a, b) => b?.discountedPrice - a?.discountedPrice);
        setProducts(sortedProducts);
    };

    const sortByNewest = () => {
        const sortedProducts = products.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA;
        });
        setProducts(sortedProducts);

    };

    const sortBySoldQuantityDescending = () => {
        const sortedProducts = [...products].sort((a, b) => b?.sold - a?.sold);
        setProducts(sortedProducts);
    };

    const sortByAmount = () => {
        const sortedProducts = [...products].sort((a, b) => b?.amount - a?.amount);
        setProducts(sortedProducts);
    };

    

    return (
        <div className="row-df sm-gutter content">
            <div className="col-df l-2 m-0 c-0">
                <nav className="category">
                    <h3 className="category__heading">Danh mục </h3>

                    <ul className="category-list">
                        <li className="category-item ">
                            <a onClick={() => setCategory('Giày sneaker')} className="category-item__link">Giày sneaker</a>
                        </li>
                        <li className="category-item">
                            <a onClick={() => setCategory('Giày chelsea boot')} className="category-item__link">Giày chelsea boot</a>
                        </li>
                        <li className="category-item">
                            <a onClick={() => setCategory('Giày thể thao')} className="category-item__link">Giày thể thao</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-df l-10 m-df-12 c-12">
                <div className="home-filter hide-on-mobile-tablet">
                    <span className="home-filter__lable">Sắp xếp theo</span>
                    <Box >
                        <Tabs
                            value={valueTap}
                            onChange={handleChange}
                            TabIndicatorProps={{
                                sx: {
                                    height: 0,
                                }
                            }}
                            sx={{
                                "& button":
                                {
                                    borderRadius: '2px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    marginRight: '12px',
                                    fontSize: '1.2rem',
                                    maxHeight: 34,
                                    marginTop: '7px',
                                    minHeight: 0,

                                },
                                "& button.Mui-selected":
                                {
                                    backgroundColor: '#EE4D2D',
                                    color: '#fff',
                                },

                            }}
                        >
                            <Tab
                                onClick={sortByAmount}
                                value="one"
                                label="Phổ biến"
                            />
                            <Tab
                                onClick={sortByNewest}
                                value="two"
                                label="Mới nhất" />
                            <Tab
                                onClick={sortBySoldQuantityDescending}
                                value="three"
                                label="Bán chạy" />
                        </Tabs>
                    </Box>

                    <div className="select-input">
                        <span className="select-input__label">Giá
                        </span>
                        <i className="select-input__icon fa-solid fa-chevron-down"></i>
                        <ul className="select-input__list">
                            <li className="select-input__icon">
                                <span
                                    onClick={sortAscending}
                                    className="select-input__link">
                                    Giá: thấp đến cao
                                </span>
                            </li>
                            <li className="select-input__icon">
                                <span
                                    onClick={sortDescending}
                                    className="select-input__link">
                                    Giá: cao đến thấp
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="home-filter__page">
                        <span className="home-filter__page-num">
                            <span className="home-filter__page-current">{currentPage + 1}</span>/{Math.ceil(products.length / itemsPerPage)}
                        </span>
                        <div className="home-filter__page-control">
                            {currentPage + 1 === 1 ?
                                <a aria-disabled className="home-filter__page-btn home-filter__page-btn--disabled">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>
                                </a>
                                :
                                <a onClick={() => setCurrentPage(currentPage - 1)} className="home-filter__page-btn">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>

                                </a>}
                            {currentPage + 1 === Math.ceil(products.length / itemsPerPage) ?
                                <a aria-disabled className="home-filter__page-btn home-filter__page-btn--disabled">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-right"></i>

                                </a>
                                :
                                <a onClick={() => setCurrentPage(currentPage + 1)} className="home-filter__page-btn">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-right"></i>

                                </a>}
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
                    </ul>
                </div>

                <div className="row-df sm-gutter">
                    {products?.length > 0 ? currentPageData.map((product) => (
                        <div className="col-df l-2-4 m-df-4 c-6 home-product-item-wrapper" key={product?._id}>
                            <div className="home-product-item">
                                <Link to={`products/${product?._id}`}>
                                    <img className="home-product-item__img" src={product?.avatar} />
                                    <h4 className="home-product-item__name">{product?.name}</h4>
                                    {product?.discount !== 0 ?
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">{numberWithCommas(product?.price)}đ</span>
                                            <span className="home-product-item__price-new">{numberWithCommas(Math.round(product?.price - product?.price * product?.discount / 100))}đ</span>
                                        </div>
                                        :
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-new">{numberWithCommas(Math.round(product?.price - product?.price * product?.discount / 100))}đ</span>
                                        </div>
                                    }

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
                                        <span className="home-product-item__sold">{product?.sold} Đã bán</span>
                                    </div>
                                    <div className="home-product-item__origin">
                                        <span className="home-product-item__brand">{product?.brand}</span>
                                        <span className="home-product-item__origin-name">{product?.origin}</span>

                                    </div>
                                    <div className="home-product-item__favorite">
                                        <i className="fa-solid fa-check"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    {
                                        product?.discount !== 0
                                        &&
                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-off-percent">{product?.discount}%</span>
                                            <span className="home-product-item__sale-off-laybel">GIẢM</span>
                                        </div>
                                    }
                                </Link>

                            </div>
                        </div>
                    )) : <div className="no-product">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a60759ad1dabe909c46a817ecbf71878.png" alt="" />
                    </div>}

                </div>
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(products.length / itemsPerPage)}
                    forcePage={currentPage}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
                    containerClassName={"pagination home-product__pagination"}
                    pageClassName={"pagination-item"}
                    pageLinkClassName={"pagination-item__link"}
                    breakClassName={"pagination-item"}
                    breakLinkClassName={"pagination-item__link"}
                    activeClassName={'pagination-item--active'}
                    previousClassName={"pagination-item"}
                    previousLinkClassName={"pagination-item__link"}
                    nextClassName={"pagination-item"}
                    nextLinkClassName={"pagination-item__link"}
                />

            </div>
        </div>



    )
}