function Header() {
	var root = document.getElementById('root');

	return (
		<>
			<div className="bg-slate-100 h-52 w-full absolute top-0 left-0 rounded-b-3xl dark:bg-slate-800"></div>
			<div className="relative flex justify-between pt-8">
			<h1 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-1 dark:text-white">Social Media Dashboard</h1>
				<div className="toggle-switch flex flex-col sm:flex-row">
					<span className="text-sm lg:text-lg mb-2 sm:mb-0 font-bold text-slate-600 dark:text-slate-400">Dark Mode</span>
					<input className="checkbox" type="checkbox" id="checkbox"
						onClick={() => {
							root.classList.toggle('dark');
							root.classList.toggle('dark-bg');
						}} />
					<label className="toggle-label" htmlFor="checkbox">
						<div className="toggle-item"></div>
					</label>
				</div>
			</div>
		</>
	);
}

export default Header;