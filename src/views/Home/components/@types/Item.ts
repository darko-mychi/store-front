import { Setter } from "@/utils/glass/store/@types/store";

export interface ItemCardProps {
    item: Item;
};

export interface Item {
    id: number;
    discount: number | string;
    image: string | string[];
    name: string;
    description: string;
    currency: string;
    price: string;
    tags: string[];
};

export type ItemsState = [Item[], Setter];

export type ItemState = [Item, Setter];
