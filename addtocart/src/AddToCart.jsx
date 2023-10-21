import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id, priceOptionId, quantity }) => {
    const [loggerIn, setLoggerIn] = createSignal(false);

    createEffect(() => {
        return jwt.subscribe((jwt) => {
            setLoggerIn(!!jwt)
        })
    })

    return (
        <Show when={loggerIn()}>
            <button
                onClick={() => priceOptionId ? addToCart(id, priceOptionId, quantity) : alert("Vui lòng chọn các lựa chọn!")}
                className="btn-df btn-cart"
            >
                <i className="fa-solid fa-cart-plus"></i>

                Add To Cart
            </button>
            <div className="btn-df btn-cart-buy">Mua ngay</div>

        </Show>
    )
}