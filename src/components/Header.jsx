import React from "react";

const Header = ({ name }) => {
	return (
		<div className="mb-10">
			<p className="ml-20 text-1xl font-extrabold tracking-tight text-slate-900">
				{name}
			</p>
		</div>
	);
};

export default Header;
