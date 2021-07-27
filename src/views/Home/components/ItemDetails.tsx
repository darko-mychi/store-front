import Button from "@/components/Button";
import Modal, { modal } from "react-ts-modal";
import GlassX, { useStore } from "glassx";
import { useState } from "react";
import { ItemState } from "./@types/Item";
import { CartItem } from "@/layouts/components/@types/SideCart";

const ItemDetails = () => {
	const [item]: ItemState = useStore("item");
	const [cart, setCart] = useStore("cart");
	const [addingToCart, setAddingToCart] = useState(false);

	const updateCart = (cartItem: Partial<CartItem>) => {
		const itemExists = cart.find((item: any) => item.id === cartItem.id);

		if (!itemExists) {
			cartItem.quantity = 1;

			return GlassX.set({ cart: [...cart, cartItem] });
		}

		const items: any[] = [];

		cart.forEach((item: any) => {
			if (item.id === cartItem.id) {
				item.quantity += 1;
			}

			items.push(item);
		});

		// setting double state cos of a bug with glassx
		GlassX.set({ cart: items });
		setCart(items);
	};

    let itemImage = item?.image;

	if (typeof itemImage !== "string" && typeof itemImage !== "undefined") {
		itemImage = itemImage[0];
	}

	const saveToCart = () => {
		setAddingToCart(true);
		
		setTimeout(() => {
			updateCart(item);
			setAddingToCart(false);
			modal.hide("item-details");
		}, 30);
	};

	return (
		<Modal
			className="item-details"
			name="item-details"
			size="xl"
			pageScroll={false}
		>
			<div className="row">
				<div className="col-6">
					<img
						src={itemImage}
						alt="Game large"
						className="item-details__image"
					/>
				</div>
				<div className="item-details__details col-6">
					{
						item?.tags?.length > 0 && (
							<div className="item-details__tags flex">
								{
									item?.tags?.map((tag, index) => (
										<div
											key={index}
											className="item-details__tag flex flex:center-all"
										>
											{tag}
										</div>
									))
								}
							</div>
						)
					}
					<h2 className="item-details__title mt:_4">{item?.name}</h2>
					<h5 className="item-details__price mt:_1">
						{item?.currency} {item?.price}
					</h5>
					<p className="item-details__description mt:_5 mb:_5">
						{item?.description}
					</p>
					<Button
						onClick={saveToCart}
						loading={addingToCart}
						color="black"
						loaderColor="white"
					>
						ADD TO CART
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ItemDetails;
