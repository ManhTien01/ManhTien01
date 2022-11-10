const API_SERVER = "http://localhost:8080";

export const getProducts = (page, sort, search, category) => {

    return fetch(`${API_SERVER}/products/datasort?page=${page}&status=true&s=${search}&${sort}&category=${category}`).then((res) => res.json())

}

export const getProductById = (id) =>
    fetch(`${API_SERVER}/products/${id}`).then((res) => res.json())

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const getSortClick = (id) => {

}
