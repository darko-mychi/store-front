import Button from "@/components/Button";
import Modal from "@/utils/glass/modal";
import { useStore } from "@/utils/glass/store";
import { useState } from "react";
import { ItemState } from "./@types/Item";

const ItemDetails = () => {
	const [item]: ItemState = useStore("item");
	const [addingToCart, setAddingToCart] = useState(false);

    let itemImage = item?.image;

	if (typeof itemImage !== "string" && typeof itemImage !== "undefined") {
		itemImage = itemImage[0];
	}

	const saveToCart = () => {
		setAddingToCart(true);

		setTimeout(() => {
			setAddingToCart(true);
		}, 3000);
	};

	return (
		<Modal
			className="game-details"
			name="game-details"
			size="lg"
		>
			<div className="row">
				<div className="col-6">
					<img
						src={itemImage}
						alt="Game large"
						className="game-details__image"
					/>
				</div>
				<div className="game-details__details col-6">
					{
						item?.tags?.length > 0 && (
							<div className="game-details__tags flex">
								{
									item?.tags?.map((tag, index) => (
										<div
											key={index}
											className="game-details__tag flex flex:center-all"
										>
											{tag}
										</div>
									))
								}
							</div>
						)
					}
					<h2 className="game-details__title mt:_4">{item?.name}</h2>
					<h5 className="game-details__price mt:_1">
						{item?.currency} {item?.price}
					</h5>
					<p className="game-details__description mt:_5 mb:_5">
						{item?.description}
					</p>
					<Button
						id="add-to-card-btn"
						onClick={saveToCart}
						loading={addingToCart}
						className="game-details__cart__btn"
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
