import ClipLoader from "react-spinners/ClipLoader";
import Button from "@/components/Button";
import { useStore } from "@/utils/glass/store";
import { useTitle } from "@/utils/hooks";
import { ItemsState } from "./components/@types/Item";

import Hero from "./components/Hero";
import ItemCard from "./components/ItemCard";
import ItemDetails from "./components/ItemDetails";
import SortBar from "./components/SortBar";
import Main from "@/layouts/Main";

const Home: React.FC<any> = ({
	fetchItems,
	state,
}) => {
	useTitle("Home");

	const [items]: ItemsState = useStore("items");

	return (
		<Main className="homepage page">
			<Hero />

			<div className="page__content">
				{items?.length > 0 && <SortBar />}
				<div className="item__cards row mt:0">
					{
						items?.map((item, index) => (
							<ItemCard
								key={index}
								item={item}
							/>
						))
					}
				</div>
				<ItemDetails />
				<div className="flex flex:center-all">
					{
						state.loadingItems && (
							<div className="section__loader flex-col flex:center-all">
								<ClipLoader />
								<p>Loading items...</p>
							</div>
						)
					}
					{
						// using pagination to "piece-load" content
						(state.showLoadMore && !state.loadingItems) && (
							<Button
								onClick={() => fetchItems(state.pager)}
								color="black"
							>
								load more
							</Button>
						)
					}
				</div>
			</div>
		</Main>
	);
};

export default Home;
