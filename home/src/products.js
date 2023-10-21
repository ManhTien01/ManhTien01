const API_SERVER = "http://localhost:8080";

export const getProducts = () => {
    return fetch(`${API_SERVER}/products/`).then((res) => res.json())
}

export const getProductById = (id) =>
    fetch(`${API_SERVER}/products/${id}`).then((res) => res.json())

export const searchProductByKeyword = (key) =>
    fetch(`${API_SERVER}/products?name=${key}`).then((res) => res.json())

export const searchProductByCategory = (key) =>
    fetch(`${API_SERVER}/products/category/${key}`).then((res) => res.json())

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
