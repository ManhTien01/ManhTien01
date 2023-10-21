import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { getProductById } from 'home/products';
import placeAddToCart from 'addtocart/placeAddToCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLoggerIn, addToCart, jwt } from 'cart/cart';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [morePrice, setMorePrice] = useState(false)
  const [moreDiscount, setMoreDiscount] = useState(false)
  const [maxPrice, setMaxPrice] = useState("");
  const [maxPriceDiscount, setMaxPriceDiscount] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [minPriceDiscount, setMinPriceDiscount] = useState("");
  const [maxDiscount, setMaxDiscount] = useState("");
  const [minDiscount, setMinDiscount] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [count, setCount] = useState(1);
  const [priceOptionId, setPriceOptionId] = useState("")
  const [loggerIn, setLoggerIn] = useState(false);

  useEffect(() => {
    const unsubscribe = jwt.subscribe((jwt) => {
      setLoggerIn(!!jwt);
    });

    return () => {
      // Hủy đăng ký khi component unmount
      unsubscribe();
    };
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleOption1Click = (option) => {
    setSelectedOption1(option);
    if (selectedOption1 === option) {
      setSelectedOption1("")
      setPrice("")
    }
  };

  const handleOption2Click = (option) => {
    setSelectedOption2(option);
    if (selectedOption2 === option) {
      setSelectedOption2("")
      setPrice("")
    }
  };

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct)
    }
  }, [id])

  // const addToCart = useRef(null)

  // useEffect(() => {
  //   if (addToCart.current) {
  //     placeAddToCart(addToCart.current, id, priceOptionId, count)
  //   }
  // }, [priceOptionId, count])

  useEffect(() => {
    if (product?.priceoption) {
      const arr = product?.priceoption
      const prices = arr.map(item => item.price);
      const uniquePrices = [...new Set(prices)];
      const discounts = arr.map(item => item.discount);
      const uniqueDiscounts = [...new Set(discounts)];
      const mindiscount = arr.reduce((min, product) => {
        if (product?.discount > 0) {
          return Math.min(min, product?.discount);
        }
        return min;
      }, Infinity);
      if (uniqueDiscounts.length > 1) {
        setMoreDiscount(true)
        setMaxDiscount(Math.max(...discounts))
        setMinDiscount(mindiscount)
      }
      if (uniqueDiscounts.length === 1) {
        setMoreDiscount(false)
      }
      if (uniquePrices.length > 1) {
        setMorePrice(true)
        const maxprice = Math.max(...prices)
        setMaxPrice(maxprice)
        const productWithMaxPrice = arr.find((item) => item.price === maxprice)
        setMaxPriceDiscount(maxprice - maxprice * productWithMaxPrice?.discount / 100)
        const minprice = Math.min(...prices)
        setMinPrice(minprice)
        const productWithMinPrice = arr.find((item) => item.price === minprice)
        setMinPriceDiscount(minprice - minprice * productWithMinPrice?.discount / 100)
      }
    }
  }, [product?.priceoption])

  useEffect(() => {
    if (product?.priceoption) {
      if (selectedOption1 && selectedOption2) {
        const options = product?.priceoption
        const selectedProduct = options.find((item) => {
          return item?.color === selectedOption1 && item?.size === selectedOption2
        })
        setPriceOptionId(selectedProduct?._id)
        const price = selectedProduct?.price
        setPrice(price)
        const discount = selectedProduct?.discount
        setDiscount(discount)
        const priceWithDiscount = price - price * discount / 100
        setDiscountPrice(priceWithDiscount)
      }

    }
  }, [selectedOption1, selectedOption2])

  const notify = () => {
    toast.success("Thêm giỏ hàng thành công !", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <div>
      <div className="grid__full-width product-direction">
        <a href="/" className="button_link">Shoes </a>

        {product?.category && <div className="?-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link"> {product?.category}</a></div>}
        {product?.subcategory && <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link">{product?.subcategory}</a></div>}
        <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i></div>
        <p>{product?.name}</p>
      </div>
      <div className="row-df products-details">
        <div className="col-df l-5 m-df-12 c-12 products-details__img">
          <div className="">
            <div className="col-df l-12 m-df-12 c-12 ">
              <img className='products-details__img-lg' src={product?.avatar} alt={product?.name} />
            </div>
          </div>
          <div className='flex products-details__img-sm-wrap'>

            {product?.images &&
              product?.images?.map(e => {
                return (

                  <div className="col-df l-2-4 products-details__img-sm" key={e}>
                    <img src={e} alt={e} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-df l-7 m-df-12 c-12 products-details__body">
          <div className="products-details__body-name">
            <span className="products-details__body-status">Yêu thích</span>
            <span className="products-details__body-content">{product?.name}</span>
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
                  <span className="product-number product-number-sold">{product?.sold}</span>
                  <span>Đã bán</span>
                  <i className="navbar-item-icon fa-solid fa-circle-info"></i>
                </li>
              </ul>
              <ul className="products-details__body-trust">
                <li>Tố cáo</li>
              </ul>
            </div>
          </div>
          {price
            ?
            <div className="products-details__body-price grid__full-width">
              {discount && discount > 0 ?
                <>
                  <span className="products-details__body-price-item product-old-price">{price.toLocaleString()}đ</span>
                  <span className="products-details__body-price-item product-new-price">{discountPrice.toLocaleString()}đ</span>
                  <span className="products-details__body-price-item product-discount-price">{discount}%
                    GIẢM</span>
                </>
                :
                <>
                  <span className="products-details__body-price-item product-new-price">{price.toLocaleString()}đ</span>
                </>
              }
            </div>
            :
            <>
              {
                morePrice && moreDiscount
                &&
                <div className="products-details__body-price grid__full-width">
                  <span className="products-details__body-price-item product-old-price">{minPrice.toLocaleString()}đ ~ {maxPrice.toLocaleString()}đ</span>
                  <span className="products-details__body-price-item product-new-price">{minPriceDiscount.toLocaleString()}đ ~ {maxPriceDiscount.toLocaleString()}đ</span>
                  {maxDiscount !== minDiscount ? <span className="products-details__body-price-item product-discount-price">{minDiscount}% ~ {maxDiscount}%
                    GIẢM</span> : <span className="products-details__body-price-item product-discount-price">{maxDiscount}%
                      GIẢM</span>}
                </div>
              }
              {morePrice && !moreDiscount &&
                <div className="products-details__body-price grid__full-width">
                  <span className="products-details__body-price-item product-new-price">{minPrice.toLocaleString()}đ ~ {maxPrice.toLocaleString()}đ</span>
                  {product?.discount > 0 && <span className="products-details__body-price-item product-discount-price">{product?.discount}%
                    GIẢM</span>}
                </div>
              }
              {moreDiscount && !morePrice &&
                <div className="products-details__body-price grid__full-width">
                  <span className="products-details__body-price-item product-old-price">{product?.price.toLocaleString()}đ</span>
                  <span className="products-details__body-price-item product-new-price">{(product?.price - product?.price * maxDiscount / 100).toLocaleString()}đ</span>
                  <span className="products-details__body-price-item product-discount-price">{maxDiscount}%
                    GIẢM</span>
                </div>

              }
              {!morePrice && !moreDiscount && <div className="products-details__body-price grid__full-width">
                {product?.discount > 0
                  ?
                  <>
                    <span className="products-details__body-price-item product-old-price">{product?.price.toLocaleString()}đ</span>
                    <span className="products-details__body-price-item product-new-price">{(product?.price - product?.price * product?.discount / 100).toLocaleString()}đ</span>
                    <span className="products-details__body-price-item product-discount-price">{product?.discount}%
                      GIẢM</span>
                  </>
                  :
                  <span className="products-details__body-price-item product-new-price">{product?.price.toLocaleString()}đ</span>
                }
              </div>}
            </>}
          <div className="mt-4 products-details__option">
            <div className="products-details__body-option">
              <span className="products-details__option-item">Mã giảm giá của shop</span>
              <span className="product-voucher">50% GIẢM</span>
              <span className="product-voucher">Giảm đ20k</span>
              <span className="product-voucher">Giảm đ10k</span>
              <span className="product-voucher">Giảm đ5k</span>
            </div>
            <div className="products-details__body-option products-details__body-deal">
              <span className="products-details__option-item">Deal sốc</span>
              <span className="product-deal">Mua Kèm Deal Sốc</span>
            </div>
            <div className="products-details__body-option">
              <span className="products-details__option-item">Bảo hiểm</span>
              <span className="mg-r-4">Bảo hiểm thời trang</span>
              <span className="status--new mg-r-32">Mới</span>
              <a href="" className="mg-r-4 button_link">Tìm hiểu thêm</a>
            </div>
            <div className="products-details__body-option products-details__body-option-wrap-transport">
              <span className="products-details__option-item">Vận chuyển</span>
              <div className="products-details__body-transport">
                <ul className="transport-location">
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1cdd37339544d858f4d0ade5723cd477.png"
                    alt="Mien phi van chuyen" className="product-transpot_free-img" />
                  Miễn phí vận chuyển
                </ul>
                <ul className="transport-location">
                  <div className="transport-location-item">
                    <i className="fa-solid fa-truck-fast"></i>
                    Vận chuyển tới
                  </div>
                  <div className="transport-location-item">
                    <a href="" className="transport-location-item-link">
                      Phường Tràng Tiền, Quận Hoàn Kiếm
                      <i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </div>
                </ul>
                <div className="transport-location">
                  <div className="transport-location-item">Phí vận chuyển</div>
                  <div className="transport-location-item">
                    <a href="" className="transport-location-item-link">
                      đ0 - đ18.000
                      <i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {product?.colors?.length > 0 &&
              <div className="products-details__body-option">
                <span className="products-details__option-item">Màu sắc</span>
                <ul className="product-color">
                  {
                    product?.colors && product?.colors?.map(e => {
                      return (
                        <li
                          className={selectedOption1 === e ? "product-color-item--active" : "product-color-item"}
                          key={e}
                          onClick={() => handleOption1Click(e)}
                        >{e}</li>
                      )
                    })
                  }
                </ul>
              </div>
            }
            {product?.sizes?.length > 0 &&
              <div className="products-details__body-option">
                <span className="products-details__option-item">Kích cỡ</span>
                <ul className="product-size">
                  {
                    product?.sizes.map(e => {
                      return (
                        <li
                          className={selectedOption2 === e ? "product-size-item--active" : "product-size-item"}
                          key={e}
                          onClick={() => handleOption2Click(e)}

                        >
                          {e}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            }
            <div className='products-details__body-option'>
              <div className="products-details__option-item">Số lượng</div>
              <div>
                <button className='quantity-count' onClick={handleDecrement}><RemoveIcon /></button>
                <input className='quantity-count' style={{ width: "62px", textAlign: "center" }} type="text" value={count} readOnly />
                <button className='quantity-count' onClick={handleIncrement}><AddIcon /></button>
              </div>
            </div>
          </div>
          <div className='flex mt-8'>
            {/* <div ref={addToCart} ></div> */}
            <button
              onClick={() => {
                if (loggerIn) {
                  if(priceOptionId) {
                    addToCart(id, priceOptionId, count)
                    notify()
                    setPriceOptionId("")
                    setSelectedOption1("")
                    setSelectedOption2("")
                  }
                  else alert("Vui lòng chọn các lựa chọn!")
                }
                else
                alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!")
            }}
              className="btn-df btn-cart"
            >
              <i className="fa-solid fa-cart-plus"></i>

              Add To Cart
            </button>
            <div className="btn-df btn-cart-buy">Mua ngay</div>
            <ToastContainer />

          </div>
        </div>
      </div>
      <div className="row-df voteproduct">

        <div className="lg-gutters l-12 describe-product">
          <div className="describe">
            <div className="describe-head">
              <h2 className="h2_detail">CHI TIẾT SẢN PHẨM</h2>
            </div>
          </div>
          <div className="describe-detail">
            <div className="content-describe">
              <div className="OktMMO flex">
                <label className="_27NlLf">Danh Mục</label>
                <div className="flex items-center _3AZ0Vk">
                  <a className="CyVtI7 _2yC5g9" href="/">Shopee</a>
                  {product?.category && <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link"> {product?.category}</a></div>}
                  {product?.subcategory && <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link"> {product?.subcategory}</a></div>}

                </div>
              </div>
              {product?.brand && <div className="box-describe">
                <label className="lable-describe">Thương hiệu </label>
                <a className="material" href="/search?brands=2561477">{product?.brand}</a>
              </div>}

              {product?.type_lock && <div className="box-describe">
                <label className="lable-describe">Loại Khóa</label>
                <div className="material">{product?.type_lock}</div>
              </div>}
              <div className="box-describe">
                <label className="lable-describe">Chiều rộng phù hợp </label>
                {product?.suitable_width !== false ? <div className="material">Không</div> : <div className="material">Có</div>}

              </div>
              {product?.material && <div className="box-describe">
                <label className="lable-describe">Chất liệu </label>
                <div className="material">{product?.material}</div>
              </div>}
              {product?.origin && <div className="box-describe">
                <label className="lable-describe">Xuất xứ </label>
                <div className="material">{product?.origin}</div>
              </div>}

              <div className="box-describe">
                <label className="lable-describe">Chiều cao cổ giày </label>
                <div className="material">Cổ thấp</div>
              </div>
              {product?.amount && <div className="box-describe">
                <label className="lable-describe">Kho hàng </label>
                <div className="material">{product?.amount}</div>
              </div>}

            </div>
          </div>
          <div className="l-12 paint-product">
            <div className="paint-head">
              <h2>MÔ TẢ SẢN PHẨM</h2>
            </div>
            <div className="paint-content">
              <textarea
                rows="20" // Số dòng hiển thị
                cols="50" // Số cột hiển thị
                value={product?.description}
                style={{
                  width: '100%',
                  minHeight: '200px',
                  whiteSpace: 'pre-wrap', // Hiển thị dấu xuống dòng và thụt lề
                  fontFamily: 'inherit', // Sử dụng font chữ của môi trường
                }}
              />

            </div>
          </div>

          <div className="paint-product">
            <div className="paint-head">
              <h2>GÓP Ý, ĐÁNH GIÁ SẢN PHẨM</h2>
            </div>
            <div className="paint-content">
              <span>
                Chức năng đang cập nhật
              </span>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}