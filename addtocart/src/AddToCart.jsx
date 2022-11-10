import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id }) => {
    const [loggerIn, setLoggerIn] = createSignal(false);

    createEffect(() => {
        return jwt.subscribe((jwt) => {
            setLoggerIn(!!jwt)
        })
    })

    return (
        <Show when={loggerIn()}>
            <div
                onClick={() => addToCart(id)}
                className="btn-df btn-cart"
            >
                <i className="fa-solid fa-cart-plus"></i>

                Add To Cart
            </div>
            <div className="btn-df btn-cart-buy">Mua ngay</div>

        </Show>
    )
}