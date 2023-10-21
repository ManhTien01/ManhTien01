import React, { useState } from "react";

const Search = ({onSearch}) => {

  const [keyword,setKeyword] = useState('')

  const searchHandler = (e) => {
    e.preventDefault()
    onSearch(keyword)
  }

  return (


    <form onSubmit={searchHandler} className="header__search ">
      <div className="header__search-input-wrap">

        <input
          type="text"
          className="header__search-input"
          placeholder="Nhập để tìm kiếm sản phẩm"
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="header__search-history">
          <h3 className="header__search-history-title">Lịch sử tìm kiếm</h3>
          <ul className="header__search-history-list">
            <li className="header__search-history-item"><a href="">Giày nike air fore 1</a></li>
            <li className="header__search-history-item"><a href="">Giày thể thao cho nữ</a></li>
            <li className="header__search-history-item"><a href="">Chelsea boot</a></li>
          </ul>
        </div>
      </div>
      <div className="header__search-select">
        <span className="header__search-select-label">
          Trong shop
        </span>
        <i className="header__search-select-icon fa-solid fa-chevron-down"></i>
        <ul className="header__search-option">
          <li className="header__search-option-item">
            <span>Trong shop</span>
            <i className="header__search-option-icon fa-solid fa-check"></i>
          </li>
          <li className="header__search-option-item">
            <span>Ngoài shop</span>
            <i className=" header__search-option-icon fa-solid fa-check"></i>
          </li>

        </ul>
      </div>
      <button className="header__search-btn">
        <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>

      </button>
    </form>


  )
}

export default Search