import { Item } from "@/views/Home/components/@types/Item";

export interface CartItem extends Item {
    // because items are managed locally
    quantity: number;
};

export interface CartItemCardProps {
    item: CartItem;
};

export type CartState = [CartItem[], Function];

export interface SideCartProps {
    setCartOpen: any;
    cartOpen: boolean;
};
