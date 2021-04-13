import { modal } from "react-ts-modal";
import { setStore } from "@/utils/glass/store";
import { ItemCardProps } from "./@types/Item";

const ItemCard: React.FC<ItemCardProps> = ({
    item
}) => {
    const showItem = () => {
        setStore({
            item,
        });

        modal.show("item-details");
    };

    const itemImage = typeof item.image !== "string" ? item.image[0] : item.image;

	return (
		<div
            className="item__card col-12 col-md-3 cursor:pointer"
            onClick={showItem}
        >
            {
                item.discount > 0 && (
                    <div
                        className="item__card__console position:absolute"
                    >
                        -{item.discount}%
                    </div>
                )
            }
            <img
                src={itemImage}
                alt="Item Cover"
                className="item__card__image"
            />
            <h3 className="item__card__title mt:_1 mb:_1">{item.name}</h3>
            <h5 className="item__card__price">
                {item.currency} {item.price}
            </h5>
        </div>
	);
};

export default ItemCard;
