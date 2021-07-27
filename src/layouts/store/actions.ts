import { hermes } from "@/utils/hermes";
import { State } from "glassx/dist/@types/store";
import { toast } from "react-toastify";

interface actionsContext {
    commit: Function;
    state: State;
};

export const updateCart = async (context: actionsContext) => {
    try {
        const res = await hermes({ url: "" });
        context.commit("UPDATE_CART", res.data.data.cart);
    } catch (error) {
        toast.error("Could not add item to cart, please refresh the page and try again.")
    }
};
