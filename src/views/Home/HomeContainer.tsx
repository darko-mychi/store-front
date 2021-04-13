import { State } from '@/utils/glass/store/@types/store';
import React from 'reactn';
import Home from './Home';
import { items as api } from "@/api";

class HomeContainer extends React.Component<any> {
    state = {
        loadingItems: false,
        showLoadMore: true,
        pager: 1,
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        const globalState: any = this.global;

		// caching for first page load
		if (globalState.items.length !== 0) {
			// content is already loaded when page is refreshed
			// resave the first 8 items to avoid flooding the page initially
			const shopItems = [];

			for (let index = 0; index < 8; index++) {
				shopItems.push(globalState.items[index]);
			}

			this.setGlobal({
                items: shopItems
            });

			return;
		}

		this.fetchItems();
	};

    // simulate API request for store items
	fetchItems = (page: number = 1) => {
        const globalState: any = this.global;

		this.setState({
            loadingItems: true,
        });

		setTimeout(() => {
			// items here will be cached for faster loads
			this.setGlobal({
                items: [
                    ...globalState.items || [],
                    ...api[page - 1],
                ]
            });

            this.setState({
                loadingItems: false,
                pager: this.state.pager + 1,
            });

			// to simulate last page
			if (page === api.length) {
				this.setState({
                    showLoadMore: false,
                });
			}
		}, 3000);
	};

    setContainerState = (state: State) => {
        this.setState(state);
    }

    render() { 
        const props = {
            setState: this.setContainerState,
            fetchItems: this.fetchItems,
            state: this.state,
        };

        return <Home {...props} />;
    }
}
 
export default HomeContainer;