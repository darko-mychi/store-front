import ClipLoader from "react-spinners/ClipLoader";
import Button from "@/components/Button";
import { useStore } from "@/utils/glass/store";
import { useTitle } from "@/utils/hooks";
import { ItemsState } from "./components/@types/Item";

import Hero from "./components/Hero";
import ItemCard from "./components/ItemCard";
import ItemDetails from "./components/ItemDetails";
import SortBar from "./components/SortBar";

const Home: React.FC<any> = ({
	setState,
	fetchItems,
	state,
}) => {
	useTitle("Home");

	const [items]: ItemsState = useStore("items");

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
						state.loadingItems && (
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
						(state.showLoadMore && !state.loadingItems) && (
							<Button
								onClick={() => fetchItems(state.pager)}
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
