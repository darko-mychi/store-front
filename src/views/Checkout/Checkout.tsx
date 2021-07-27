import { useTitle } from "@/utils/hooks";
import Main from "@/layouts/Main";

const Checkout = () => {
	useTitle("Checkout");

	return (
		<Main page="checkout">
			<div className="page__content">
				Checkout
			</div>
		</Main>
	);
};

export default Checkout;
