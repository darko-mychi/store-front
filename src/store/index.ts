import GlassX, { PersistedState } from "glassx";

// import store modules
import Home from "@/views/Home/store";
import Layout from "@/layouts/store";

const store = GlassX.store({
	compareState: true,
	modules: [Home, Layout],
	plugins: [PersistedState],
});

export default store;
