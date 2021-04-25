import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import "react-toggle/style.css";
import Toggle from "react-toggle";

const StyledHeader = styled.header`
	background-color: ${(props) => (props.darkMode ? "#282828" : "white")};
	display: flex;
	justify-content: space-between;

	.header-name {
		margin-top: 2%;
		font-size: 4rem;
		font-family: "Amatic SC", cursive;
		color: #7ed957;
		padding-left: 5%;
	}

	.nav-links {
		width: 40%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 5%;
	}

	.header-link {
		text-decoration: none;
		color: ${(props) => (props.darkMode ? "white" : "#282828")};
		font-family: "Amatic SC", cursive;
		font-size: 2rem;
	}

	.demo-box {
		background-color: #7ed957;
		border-radius: 15px;
		width: 40%;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}

	.demo {
		color: white;
		font-size: 2.5rem;
		width: 100%;
		text-align: center;
		padding: 10% 0;
	}
`;

const Header = ({ theme, changeTheme }) => {
	return (
		<StyledHeader darkMode={theme}>
			<h1 className="header-name">Billy</h1>
			<nav className="nav-links">
				<Toggle className="toggle" onChange={changeTheme} />
				<a className="header-link" href="#about">
					About
				</a>
				<a className="header-link" href="#product">
					Product
				</a>
				<div className="demo-box">
					<NavLink className="header-link demo" to="/demo">
						Demo
					</NavLink>
				</div>
			</nav>
		</StyledHeader>
	);
};

export default Header;
