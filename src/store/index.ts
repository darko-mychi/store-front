import GlassX from "@/utils/glass/store/index";
import PersistedState from "@/utils/glass/store/persist";

// import store modules
import Home from "@/views/Home/store";
import Layout from "@/layouts/store";

const store = GlassX.store({
	compareState: true,
	modules: [Home, Layout],
	plugins: [PersistedState],
});

export default store;
