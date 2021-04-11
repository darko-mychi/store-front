import ClipLoader from "react-spinners/ClipLoader";
import Button from "@/components/Button";
import { useStore } from "@/utils/glass/store";
import { useTitle } from "@/utils/hooks";
import { useEffect, useState } from "react";
import { ItemsState } from "./components/@types/Item";
import { items as api } from "@/api";

import Hero from "./components/Hero";
import ItemCard from "./components/ItemCard";
import ItemDetails from "./components/ItemDetails";
import SortBar from "./components/SortBar";

const Home = () => {
	useTitle("Home");

	const [items, setItems]: ItemsState = useStore("items");
	const [loadingItems, setLoadingItems] = useState(false);
	const [showLoadMore, setShowLoadMore] = useState(true);
	const [pager, setPager] = useState(1);

	// simulate API request for store items
	const loadItems = (page: number = 1) => {
		if (items.length !== 0 && page === 1) {
			return;
		}

		setLoadingItems(true);

		setTimeout(() => {
			// items here will be cached for faster loads
			setItems([
				...items || [],
				...api[page - 1],
			]);

			setLoadingItems(false);
			setPager(pager + 1);

			// to simulate last page
			if (page === api.length) {
				setShowLoadMore(false);
			}
		}, 3000);
	};

	useEffect(() => {
		// fetch items on first load
		loadItems();
	});

	return (
		<div className="homepage page">
			<Hero />

			<div className="page__content">
				<SortBar />
				<div className="item__cards row mt:0">
					{
						items && items.map((item, index) => (
							<ItemCard
								key={index}
								item={item}
							/>
						))
					}
					{
						loadingItems && (
							<div className="page__loader">
								<ClipLoader />
								<p>Loading items...</p>
							</div>
						)
					}
				</div>
				{items && <ItemDetails />}
				<div className="align-center">
					{
						// using pagination to "piece-load" content
						(showLoadMore && !loadingItems) && (
							<Button
								onClick={() => loadItems(pager)}
								color="blue"
							>
								load more
							</Button>
						)
					}
				</div>
			</div>
		</div>
	);
};

export default Home;
