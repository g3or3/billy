import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Demo from "./Demo";

const App = () => {
	return (
		<>
			<Route path="/demo">
				<Demo />
			</Route>
			<Route path="/">
				<Header />
				<LandingPage />
			</Route>
		</>
	);
};

export default App;
