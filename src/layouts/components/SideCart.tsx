import Button from "@/components/Button"
import Icon from "@/components/Icon";
import { GlassRouter } from "@/utils/glass/router";
import { useStore } from "@/utils/glass/store";
import { useState } from "react";
import { CartItemCardProps, CartState } from "./@types/SideCart";

const SideCart = () => {
    const [cart]: CartState = useStore("cart");
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
            <div className={`side__cart ${cartOpen && "-cart-open"}`}>
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
                            {
                                cart.map((item, index) => (
                                    <CartItemCard
                                        key={index}
                                        item={item}
                                    />
                                ))
                            }
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

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
    const { quantity, image, name, currency, price } = item;

    return (
        <div className="cart-game__card flex">
            <div className="cart-game__card__quantities">
                <button>
                    <Icon>add</Icon>
                </button>
                <div className="cart-game__card__quantity">
                    {quantity}
                </div>
                <button>
                    <Icon>remove</Icon>
                </button>
            </div>
            <img
                src={typeof image === "string" ? image : image[0]}
                alt="Cart item"
                className="cart-game__card__img"
            />
            <div className="cart-game__card__details">
                <h2 className="cart-game__card__name">
                    {name}
                </h2>
                <h5 className="cart-game__card__price mt:_1">
                    {currency} {price}
                </h5>
            </div>
        </div>
    );
};
 
export default SideCart;
