import React from "react";

function Header({ onDarkModeClick, darkMode }) {
	// body...
	return (
		<header>
			<h2>Shopster</h2>
			<button onClick={onDarkModeClick}>
				{darkMode ? "Dark" : "Light"} Mode
			</button>
		</header>
	);
}

export default Header;
