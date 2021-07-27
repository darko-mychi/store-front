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

export type ItemsState = [Item[], Function];

export type ItemState = [Item, Function];
