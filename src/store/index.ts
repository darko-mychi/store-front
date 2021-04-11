import GlassX from "@/utils/glass/store/index";
import PersistedState from "@/utils/glass/store/persist";

// import store modules
import Home from "@/views/Home/store";

const store = GlassX.store({
	compareState: true,
	modules: [Home],
	plugins: [PersistedState],
});

export default store;
