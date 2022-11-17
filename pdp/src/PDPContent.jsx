import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { numberWithCommas, getProductById } from 'home/products';
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
        <a href="/" className="button_link">Shoes </a>

        {product.category && <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link"> {product.category}</a></div>}
        {product.subcategory && <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link">{product.subcategory}</a></div>}
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
          <div className='flex products-details__img-sm-wrap'>

            {product.images &&
              product.images.map(e => {
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
          {product.discount !== 0 ?
            <div className="grid__full-width products-details__body-price">
              <span className="products-details__body-price-item product-old-price">{numberWithCommas(product.price)}đ</span>
              <span className="products-details__body-price-item product-new-price">{numberWithCommas(Math.round(product.price - product.price * product.discount / 100))}đ</span>
              <span className="products-details__body-price-item product-discount-price">{product.discount}%
                GIẢM</span>
            </div>
            :
            <div className="grid__full-width products-details__body-price">
              <span className="products-details__body-price-item product-new-price">{numberWithCommas(Math.round(product.price - product.price * product.discount / 100))}đ</span>
            </div>
          }
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
            {product.color.length !== 0 &&
              <li className="products-details__body-option products-details__body-color">
                <span className="products-details__option-item">Màu sắc</span>
                <ul className="product-color">
                  {
                    product.color.map(e => {
                      return (
                        <li className="product-color-item" key={e}>{e}</li>
                      )
                    })
                  }
                </ul>
              </li>
            }
            {product.size.length !== 0 &&
              <li className="products-details__body-option products-details__body-size">
                <span className="products-details__option-item">Kích cỡ</span>
                <ul className="product-size">
                  {
                    product.size.map(e => {
                      return (
                        <li className="product-size-item" key={e}>{e}</li>
                      )
                    })
                  }
                </ul>
              </li>
            }
          </ul>
          <div className='flex mt-8'>
            <div ref={addToCart} >
            </div>
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
                  {product.category && <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link"> {product.category}</a></div>}
                  {product.subcategory && <div className="product-direction-icon"><i className="fa-solid fa-angle-right"></i><a href="" className="button_link"> {product.subcategory}</a></div>}
                </div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Thương hiệu </label>
                <a className="material" href="/search?brands=2561477">{product.brand}</a>
              </div>

              <div className="box-describe">
                <label className="lable-describe">Loại Khóa</label>
                <div className="material">{product.type_lock}</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Chiều rộng phù hợp </label>
                {product.suitable_width !== false ? <div className="material">Không</div> : <div className="material">Có</div>}

              </div>
              <div className="box-describe">
                <label className="lable-describe">Chất liệu </label>
                <div className="material">{product.material}</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Xuất xứ </label>
                <div className="material">{product.origin}</div>
              </div>

              <div className="box-describe">
                <label className="lable-describe">Chiều cao cổ giày </label>
                <div className="material">Cổ thấp</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Kho hàng </label>
                <div className="material">{product.amount}</div>
              </div>

            </div>
          </div>
          <div className="l-12 paint-product">
            <div className="paint-head">
              <h2>MÔ TẢ SẢN PHẨM</h2>
            </div>
            <div className="paint-content">
              <span>
                {product.description}
              </span>
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