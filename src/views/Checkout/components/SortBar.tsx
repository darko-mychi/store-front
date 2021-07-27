const SortBar = () => {
	return (
		<div className="sort__bar flex flex:center-between">
			<select name="sort" className="small">
				<option value="action">Action</option>
				<option value="fps">FPS</option>
				<option value="sports">Sports</option>
				<option value="3ps">3ps</option>
			</select>
			<div></div>
			<select name="order" className="small">
				<option value="latest">Latest</option>
				<option value="oldest">Oldest</option>
			</select>
		</div>
	);
};

export default SortBar;
