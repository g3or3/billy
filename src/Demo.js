import React, { useEffect, useState } from "react";
import { Iphone } from "./components/Iphone";
import Loading from "./components/Loading";

const Demo = () => {
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		window.scroll(0, 0);
		const body = document.getElementsByTagName("body");
		body[0].style.overflow = "hidden";

		const timeout = setTimeout(() => {
			setDisplay(true);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [setDisplay]);

	return display ? <Iphone /> : <Loading />;
};

export default Demo;
