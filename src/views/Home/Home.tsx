import ClipLoader from "react-spinners/ClipLoader";
import Button from "@/components/Button";
import { useStore } from "glassx";
import { useTitle } from "@/utils/hooks";
import { ItemsState } from "./components/@types/Item";

import Hero from "./components/Hero";
import ItemCard from "./components/ItemCard";
import ItemDetails from "./components/ItemDetails";
import SortBar from "./components/SortBar";
import Main from "@/layouts/Main";

const Home: React.FC<any> = ({
	fetchItems,
	loading,
	pager,
	showLoadMore
}) => {
	useTitle("Home");

	const [items]: ItemsState = useStore("items");

	return (
		<Main page="home">
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
						loading && (
							<div className="section__loader flex-col flex:center-all">
								<ClipLoader />
								<p>Loading items...</p>
							</div>
						)
					}
					{
						// using pagination to "piece-load" content
						(showLoadMore && !loading) && (
							<Button
								onClick={() => fetchItems(pager)}
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
