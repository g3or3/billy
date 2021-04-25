import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Demo from "./Demo";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const handleChange = () => {
		setDarkMode((mode) => !mode);
	};

	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];
		body.style.background = darkMode ? "#282828" : "white";
	}, [darkMode]);

	return (
		<>
			<Route path="/demo">
				<Demo />
			</Route>
			<Route path="/">
				<Header theme={darkMode} changeTheme={handleChange} />
				<LandingPage theme={darkMode} />
			</Route>
		</>
	);
};

export default App;
