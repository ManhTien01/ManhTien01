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
    <div className="lg-gutters vote">
        <div className="infor-shop">
            <div className="shop-avatar">
               <img  className="shopee-avatar__img " src="https://cf.shopee.vn/file/171f7785a60935e2f6ddae65c26d0285_tn" alt="anh" />
            </div>
            <div className="shop-infor-detail">
                <div className="name-shop">miu_authentic</div>
                <div className="activity-shop ">Online 23 phút trước</div>
                <div className="contact">
                    <button type="button" className="contact-box">
                        <i className="fa-solid fa-cart-plus"></i>
                        {/* <svg viewBox="0 0 16 16" className="shopee-svg-icon pa-h8D">
                            <g fill-rule="evenodd">
                                <path
                                    d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z">
                                </path>
                            </g>
                        </svg> */}
                    </button>
                    <span>Chat ngay</span>
                </div>
                <div className="watch-shop">
                    {/* <svg className="shopee-svg-icon" enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"
                        stroke-width="0">
                        <path
                            d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z">
                        </path>
                    </svg> */}
                    <span className = "view_s"> Xem Shop</span>
                </div>
            </div>
        </div>
        <div className="vote-detail">
            <div className="Reviews-from-customers">
                <div className="box-vote">
                    <label className="vote-lable">Đánh giá:</label>
                    <span className="numeral">247</span>
                </div>
                <div className="box-vote">
                    <label className="vote-lable">Sản phẩm:</label>
                    <span className="numeral">196</span>
                </div>
            </div>
            <div className="Reviews-from-customers setting-mid">
                <div className="box-vote">
                    <label className="vote-lable">tỉ lệ phản hồi:</label>
                    <span className="numeral">91%</span>
                </div>
                <div className="box-vote">
                    <label className="vote-lable">thời gian phản hồi:</label>
                    <span className="numeral">trong vài phút</span>
                </div>
            </div>
            <div className="Reviews-from-customers setting-right">
                <div className="box-vote">
                    <label className="vote-lable">tham gia:</label>
                    <span className="numeral">13 tháng trước</span>
                </div>
                <div className="box-vote">
                    <label className="vote-lable">Người theo dõi:</label>
                    <span className="numeral">9,9k</span>
                </div>
            </div>
        </div>
    </div>
    <div className="lg-gutters describe-product">
        <div className="describe">
            <div className="describe-head">
                <h2 className="h2_detail">CHI TIẾT SẢN PHẨM</h2>
            </div>
        </div>
        <div className="describe-detail">
            <div className="content-describe">
                <div className="OktMMO">
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
                         <i className="fa-solid fa-angle-right"></i>
                        <a className="CyVtI7 _2yC5g9" href="/Giày-Dép-Nam-cat.11035801">Giày Dép Nam</a>
                        {/* <svg
                            enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"
                            className="shopee-svg-icon _2ON4et icon-arrow-right">
                            <path
                                d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                            </path>
                        </svg> */}
                        <i className="fa-solid fa-angle-right"></i>
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
                <span>Có gì ở đôi Fila sandblast low cực xinh này ạ???
                    Được làm từ chất liệu da tổng hợp giúp sản phẩm có độ bền cao và nâng niu từng bước chân của bạn.
                    Kiểu dáng giày năng động với thiết kế cổ thấp, thắt dây khỏe khoắn, màu sắc hợp thời trang. Đế cao
                    su chắc chắn có khả năng ma sát tốt, chống trơn trượt, có thể di chuyển trên nhiều địa hình. Ngoài
                    ra bạn có thể dễ dàng kết hợp giày thể thao FILA với nhiều phụ kiện và trang phục khác nhau để tạo
                    nên một sét đồ thật xinh
                    <span>
                        Tận 3 màu cho chị em lận ạ
                    </span>
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