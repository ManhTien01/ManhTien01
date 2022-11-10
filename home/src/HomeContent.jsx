import * as React from "react";
import { Link, useSearchParams } from "react-router-dom"
import { numberWithCommas, getProducts } from "./products";
import ReactPaginate from 'react-paginate';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function HomeContent() {
    const [products, setProducts] = React.useState([])
    const [value, setValue] = React.useState('two');
    const [valueSort, setValueSort] = React.useState('sort_time=desc')
    const [searchParams, setSearchParams] = useSearchParams();
    const [numberPage, setNumberPage] = React.useState(1);
    const [category, setCategory] = React.useState('')

    React.useEffect(() => {
        if (searchParams.get('s') !== null) { getProducts(numberPage, valueSort, searchParams.get('s'),category).then(setProducts) }
        else {
            getProducts(numberPage, valueSort, '',category).then(setProducts)
        }
    }, [numberPage,valueSort,category])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if (products.data === undefined && products.page === undefined && products.last_page === undefined && products.total === undefined) {
        return null
    }

    const handlePageClick = (event) => {
        setNumberPage( event.selected + 1)
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
                            <a href="" className="category-item__link">Giày chelsea boot</a>
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
                    <Box >
                        <Tabs
                            value={value}
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
                            <Tab onClick={() => {
                                setValueSort('sort_popularity=desc')

                            }}
                                value="one"
                                label="Phổ biến"
                            />
                            <Tab
                                onClick={
                                    () => {
                                        setValueSort('sort_time=desc')
                                    }
                                }
                                value="two"
                                label="Mới nhất" />
                            <Tab onClick={() => {
                                setValueSort('sort_sold=desc')
                                // getProducts(1, valueSort).then(setProducts)
                            }} value="three" label="Bán chạy" />
                        </Tabs>
                    </Box>

                    <div className="select-input">
                        <span className="select-input__label">Giá
                        </span>
                        <i className="select-input__icon fa-solid fa-chevron-down"></i>
                        <ul className="select-input__list">
                            <li className="select-input__icon">
                                <span onClick={() =>

                                    setValueSort('sort_price=asc')
                                } className="select-input__link">
                                    Giá: thấp đến cao
                                </span>
                            </li>
                            <li className="select-input__icon">
                                <span onClick={() => setValueSort('sort_price=desc')} className="select-input__link">
                                    Giá: cao đến thấp
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="home-filter__page">
                        <span className="home-filter__page-num">
                            <span className="home-filter__page-current">{products.page}</span>/{products.last_page}


                        </span>
                        <div className="home-filter__page-control">
                            {products.page === 1 ?
                                <a aria-disabled className="home-filter__page-btn home-filter__page-btn--disabled">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>

                                </a>
                                :
                                <a onClick={() => setNumberPage(products.page - 1)} className="home-filter__page-btn">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-left"></i>

                                </a>}
                            {products.page === products.last_page ?
                                <a aria-disabled className="home-filter__page-btn home-filter__page-btn--disabled">
                                    <i className="home-filter__page-icon fa-solid fa-chevron-right"></i>

                                </a>
                                :
                                <a onClick={() => setNumberPage(products.page + 1)} className="home-filter__page-btn">
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
                    {products.data.map((product) => (
                        <div className="col-df l-2-4 m-df-4 c-6 home-product-item-wrapper" key={product._id}>
                            <div className="home-product-item">
                                <Link to={`products/${product._id}`}>


                                    <img className="home-product-item__img" src={product.avatar} />

                                    <h4 className="home-product-item__name">{product.name}</h4>
                                    {product.discount !== 0 ?
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">{numberWithCommas(product.price)}đ</span>
                                            <span className="home-product-item__price-new">{numberWithCommas(Math.round(product.price - product.price * product.discount / 100))}đ</span>
                                        </div>
                                        :
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-new">{numberWithCommas(Math.round(product.price - product.price * product.discount / 100))}đ</span>
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
                                    {
                                        product.discount !== 0

                                        &&

                                        <div className="home-product-item__sale-off">
                                            <span className="home-product-item__sale-off-percent">{product.discount}%</span>
                                            <span className="home-product-item__sale-off-laybel">GIẢM</span>
                                        </div>



                                    }
                                </Link>

                            </div>


                        </div>
                    ))}

                </div>
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={products.last_page}
                    forcePage={products.page - 1}
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