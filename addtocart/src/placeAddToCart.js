import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

export default function placeAddToCart(el, id, priceOptionId, count) {
    render(() => <AddToCart id={id} priceOptionId={priceOptionId} quantity={count} />, el);
}
