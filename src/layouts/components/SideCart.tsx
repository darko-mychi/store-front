import GlassX, { useStore } from "glassx";
import { GlassRouter } from "glass-router";
import { useCallback, useEffect, useState } from "react";
import { CartItem, CartItemCardProps, CartState, SideCartProps } from "./@types/SideCart";
import Button from "@/components/Button"
import Icon from "@/components/Icon";

const SideCart: React.FC<SideCartProps> = ({
    cartOpen,
    setCartOpen
}) => {
    const [cart]: CartState = useStore("cart");
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    const checkBodyScroll = (cartOpen: boolean) => {
        if (cartOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    };

    const toggleSideCart = () => {
        setCartOpen(!cartOpen);
        checkBodyScroll(!cartOpen);
    };

    const closeAndRoute = () => {
        toggleSideCart();

        return GlassRouter.push({
          name: "checkout",
        });
    };

    const getTotalPrice = useCallback(() => {
        let totalPrice = 0;

        cart.forEach(({ price, quantity }) => {
            totalPrice = (Number(price) * Number(quantity)) + totalPrice;
        });

        setPrice(totalPrice);
    }, [cart]);

    const getQuantity = useCallback(() => {
        let totalQuantity = 0;

        cart.forEach(({ quantity }) => {
            totalQuantity += quantity;
        });

        return setQty(totalQuantity);
    }, [cart]);

    useEffect(() => {
        getTotalPrice();
        getQuantity();
    }, [cart, getTotalPrice, getQuantity]);

    useEffect(() => {
        checkBodyScroll(cartOpen);
    });

    return (
        <>
            {!cartOpen && (
                <Button
                    className="floating__cart"
                    onClick={toggleSideCart}
                >
                    <div className="floating__cart__content flex flex:center-between">
                        <Icon>shopping_cart</Icon>
                        <span className="item__count ml:_1">
                            {qty}{" "}
                            {qty === 1 ? "Item" : "Items"}
                        </span>
                    </div>
                </Button>
            )}
            <div className={`side__cart ${cartOpen && "-open"}`}>
                <div className="side__cart__header flex flex:center-between">
                    <span className="title">
                        {qty}{" "}
                        {qty === 1 ? "Item" : "Items"}
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
                            className="side__cart__empty"
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
                {cart.length > 0 && (
                    <a
                        href="/"
                        className="side__cart__footer"
                        v-if="cart.length > 0"
                        onClick={closeAndRoute}
                    >
                        <button className="side__cart__checkout flex flex:center-between w:100">
                            <span className="checkout__label">CHECKOUT</span>
                            <span className="checkout__inner flex flex:center-all">
                                GHS {price.toFixed(2)}
                            </span>
                        </button>
                    </a>
                )}
            </div>
        </>
    );
};

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
    const [glob, setCart]: CartState = useStore("cart");

    const { quantity, image, name, currency, price, id } = item;

    const updateCount = (action: string) => {
        const cart: CartItem[] = GlassX.get("cart");
        const items: CartItem[] = [];

        console.log(cart);

        cart.forEach((cartItem) => {
            if (cartItem.id !== id) {
                items.push(cartItem);
            } else {
                if (action === "add") {
                    cartItem.quantity += 1;
                    items.push(cartItem);
                }

                if (action === "remove") {
                    cartItem.quantity -= 1;

                    if (cartItem.quantity > 0) {
                        items.push(cartItem);
                    }
                }
            }
        });

        console.log(items);

        // setting double state cos of a bug with glassx
        setCart(items);
        GlassX.set({ cart: items });
    };

    return (
        <div className="cart-item__card flex">
            <div className="cart-item__card__quantities">
                <button onClick={() => updateCount("add")}>
                    <Icon>add</Icon>
                </button>
                <div className="cart-item__card__quantity">
                    {quantity}
                </div>
                <button onClick={() => updateCount("remove")}>
                    <Icon>remove</Icon>
                </button>
            </div>
            <img
                src={typeof image === "string" ? image : image[0]}
                alt="Cart item"
                className="cart-item__card__img"
            />
            <div className="cart-item__card__details">
                <h2 className="cart-item__card__name">
                    {name}
                </h2>
                <h5 className="cart-item__card__price mt:_1">
                    {currency} {price}
                </h5>
            </div>
        </div>
    );
};
 
export default SideCart;
