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
            <button
                onClick={() => addToCart(id)}
                className="btn-df"
            >
                <i className="fa-solid fa-cart-plus"></i>

                Add To Cart
            </button>
        </Show>
    )
}