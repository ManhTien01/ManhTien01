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
            <span className="products-details__body-price-item product-old-price">{product.price}đ</span>
            <span className="products-details__body-price-item product-new-price">{product.price - product.price * product.discount / 100}đ</span>
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
            <div className="btn-df btn-cart-buy">Mua ngay</div>
          </div>
        </div>
      </div>
      <div className="row-df voteproduct">
        
        <div className="lg-gutters describe-product">
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
                  {/* <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"
                            className="shopee-svg-icon _2ON4et icon-arrow-right">
                            <path
                                d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                            </path>
                        </svg>
                         */}
                  <i className="fa-solid fa-angle-right source-link_detail-product-icon"></i>
                  <a className="CyVtI7 _2yC5g9" href="/Giày-Dép-Nam-cat.11035801">Giày Dép Nam</a>
                  {/* <svg
                            enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"
                            className="shopee-svg-icon _2ON4et icon-arrow-right">
                            <path
                                d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                            </path>
                        </svg> */}
                  <i className="fa-solid fa-angle-right source-link_detail-product-icon"></i>
                  <a className="CyVtI7 _2yC5g9" href="/Giày-Thể-Thao-Sneakers-cat.11035801.11035807">Giày Thể Thao/
                    Sneakers</a>
                </div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Thương hiệu </label>
                <a className="material" href="/search?brands=2561477">FILA</a>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Giày cao gót </label>
                <div className="material">Trung Bình</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Loại Khóa</label>
                <div className="material">Khóa dây</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Loại Khóa </label>
                <div className="material">Khóa dây</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Chất liệu </label>
                <div className="material">Da, Cao su</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Xuất xứ </label>
                <div className="material">Hàn Quốc</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Dịp </label>
                <div className="material">Hằng Ngày</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Chiều cao cổ giày </label>
                <div className="material">Cổ thấp</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Kho hàng </label>
                <div className="material">81</div>
              </div>
              <div className="box-describe">
                <label className="lable-describe">Gửi từ </label>
                <div className="material">Hà Nội</div>
              </div>
            </div>
          </div>
          <div className="paint-product">
            <div className="paint-head">
              <h2>MÔ TẢ SẢN PHẨM</h2>
            </div>
            <div className="paint-content">
              <span>
                Có gì ở đôi Fila sandblast low cực xinh này ạ???
                Được làm từ chất liệu da tổng hợp giúp sản phẩm có độ bền cao và nâng niu từng bước chân của bạn.
                Kiểu dáng giày năng động với thiết kế cổ thấp, thắt dây khỏe khoắn, màu sắc hợp thời trang. Đế cao
                su chắc chắn có khả năng ma sát tốt, chống trơn trượt, có thể di chuyển trên nhiều địa hình. Ngoài
                ra bạn có thể dễ dàng kết hợp giày thể thao FILA với nhiều phụ kiện và trang phục khác nhau để tạo
                nên một sét đồ thật xinh

                Tận 3 màu cho chị em lận ạ

                ✨ HÀNG CHUẨN AUTH CHÍNH HÃNG 100%
                - ORDER WEB HÀN/NHẬT// US UK
                - FULL BOX, cung cấp bill đầy đủ nếu cần
                - Ship toàn quốc
                Một đôi giày thể thao giúp các nàng tự tin, phong cách và cá tính hơn với những bộ cánh nâng động.
                Đồng thời, khi mang giày thể thao giúp bảo vệ đôi chân hoàn hảo tránh được những chấn thương bất ngờ
                gặp phải khi di chuyển và bảo vệ da tránh được những tác hại từ tia UV.
                ✨Một số sản phẩm có chữ "Made in China" hoặc "Made in Vietnam",... do xưởng sản xuất ở nước khác
                nhau như Trung Quốc, Việt Nam,...
                ✨ Liên hệ shop để order size khác
              </span>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}