const API_SERVER = "http://localhost:8080";

export const getProducts = () =>
    fetch(`${API_SERVER}/products`).then((res) => res.json())

export const getProductById = (id) =>
    fetch(`${API_SERVER}/products/${id}`).then((res) => res.json())

export const findProductByText = (text) =>
    fetch(`${API_SERVER}/products/datasort?s${text}`).then((res) => res.json())

export const sortProductByAscPrice = () =>
    fetch(`${API_SERVER}/products/datasort?sort_price=asc`).then((res) => res.json())

export const sortProductByDescPrice = () =>
    fetch(`${API_SERVER}/products/datasort?sort_price=desc`).then((res) => res.json())

export const sortProductBySold = () =>
    fetch(`${API_SERVER}/products/datasort?sort_sold=desc`).then((res) => res.json())

export const sortProductByTime = () =>
    fetch(`${API_SERVER}/products/datasort?sort_time=desc`).then((res) => res.json())

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})
