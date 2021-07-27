import { useStore } from "glassx";
import { useEffect, useState } from "react";
import { items as api } from "@/api";
import Home from "./Home";

const HomeContainer = () => {
    const [items, setItems] = useStore("items");
    const [loading, setLoading] = useState(false);
    const [pager, setPager] = useState(1);
    const [showLoadMore, setShowLoadMore] = useState(true);

    const loadItems = () => {
        // caching for first page load
        if (items.length !== 0) {
            // content is already loaded when page is refreshed
            // resave the first 8 items to avoid flooding the page initially
            const shopItems = [];

            for (let index = 0; index < 8; index++) {
                shopItems.push(items[index]);
            }

            setItems(shopItems);

            return;
        }

        fetchItems();
    };

    useEffect(() => {
        loadItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // simulate API request for store items
    const fetchItems = (page: number = 1) => {
        setLoading(true);

        setTimeout(() => {
            // items here will be cached for faster loads
            setItems([
                ...items || [],
                ...api[page - 1],
            ]);

            setLoading(false);
            setPager(pager + 1);

            // to simulate last page
            if (page === api.length) {
                setShowLoadMore(false);
            }
        }, 3000);
    };

    const homeProps = {
        fetchItems,
        loading,
        pager,
        showLoadMore
    };

    return <Home {...homeProps} />
};

export default HomeContainer;
