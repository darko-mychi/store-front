import { State } from "glassx/dist/@types/store";

export const UPDATE_CART = (state: State, cartItem: State) => {
    return { cart: [...state.cart, cartItem] };
};
