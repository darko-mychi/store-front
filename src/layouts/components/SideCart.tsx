import Button from "@/components/Button"
import Icon from "@/components/Icon";
import { GlassRouter } from "@/utils/glass/router";
import { useStore } from "@/utils/glass/store";
import { ItemsState } from "@/views/Home/components/@types/Item";
import { useState } from "react";

const SideCart = () => {
    const [cart]: ItemsState = useStore("cart");
    const [cartOpen, setCartOpen] = useState(false);

    const toggleSideCart = () => {
        setCartOpen(!cartOpen);
    };

    const closeAndRoute = () => {
        toggleSideCart();

        return GlassRouter.push({
          name: "checkout",
        });
    };

    const getTotalPrice = () => {
        let totalPrice = 0;

        cart.forEach(({ price }) => {
            totalPrice = Number(price) + totalPrice;
        });

        return totalPrice;
    };

    return (
        <>
            <Button
                className="floating__cart"
                onClick={toggleSideCart}
            >
                <div className="floating__cart__content flex flex:center-between">
                    <Icon>shopping_cart</Icon>
                    <span className="item__count ml:_1">
                        {cart.length}
                        {cart.length === 1 ? "Item" : "Items"}
                    </span>
                </div>
            </Button>
            <div className="side__cart">
                <div className="side__cart__header flex flex:center-between">
                    <span className="title">
                        {cart.length}
                        {cart.length === 1 ? "Item" : "Items"}
                    </span>
                    <Icon
                        icon="close"
                        className="modal__close"
                        onClick={toggleSideCart}
                    />
                </div>
                {
                    cart.length === 0 ? (
                        <div
                            style={{ padding: 25 }}
                        >
                            Cart is empty
                        </div>
                    ) : (
                        <div className="side__cart__list">
                            {/* <cart-game
                                v-for="(item, index) in cart"
                                :key="index"
                                :data="item"
                            /> */}
                        </div>
                    )
                }
                <a
                    href="/"
                    className="side__cart__footer"
                    v-if="cart.length > 0"
                    onClick={closeAndRoute}
                >
                    <button className="side__cart__checkout flex flex:center-between w:100">
                        <span className="checkout__label">CHECKOUT</span>
                        <span className="checkout__inner flex flex:center-all">
                            GHS {getTotalPrice()}
                        </span>
                    </button>
                </a>
            </div>
        </>
    );
};
 
export default SideCart;
