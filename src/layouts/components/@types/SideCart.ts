import { Setter } from "@/utils/glass/store/@types/store";
import { Item } from "@/views/Home/components/@types/Item";

export interface CartItem extends Item {
    // because items are managed locally
    quantity: number;
};

export interface CartItemCardProps {
    item: CartItem;
};

export type CartState = [CartItem[], Setter];
