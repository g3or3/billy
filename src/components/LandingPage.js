import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import logo from "../assets/logo.png";
import example from "../assets/example.png";

const StyledLandingPage = styled.div`
	background-color: ${(props) => (props.darkMode ? "#282828" : "white")};
	margin-top: 5%;
	font-family: "Nunito", sans-serif;

	.main-section {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 13%;
	}

	.section-heading {
		font-size: 2.5rem;
		margin: 5% 0;
	}

	.main-left {
		padding-left: 5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
		color: ${(props) => (props.darkMode ? "white" : "#282828")};
	}

	.call-to-action-btns {
		margin-top: 5%;
		display: flex;
	}

	.cta-btn {
		background-color: #7ed957;
		border-radius: 15px;
		display: flex;
		justify-content: center;
		width: 25%;
		margin-right: 10%;
	}

	.learn-more {
		background-color: #fff;
		border: 2px solid #7ed957;
	}

	.btn {
		font-family: "Amatic SC", cursive;
		color: white;
		text-decoration: none;
		text-align: center;
		font-size: 2rem;
		padding: 8% 0;
		width: 100%;
	}

	.learn-more-btn {
		color: #7ed957;
	}

	.main-right {
		display: flex;
		justify-content: center;
	}

	.logo {
		width: 70%;
	}

	#about {
		width: 100%;
		height: 1vh;
		margin-bottom: 13%;
	}

	.about-section {
		display: flex;
		width: 100%;
		justify-content: space-between;
		margin-bottom: 30%;
	}

	.about-left {
		width: 50%;
		display: flex;
		justify-content: center;
	}

	.profile-img1,
	.profile-img2 {
		border-radius: 50%;
		width: 35%;
	}

	.profile-img1 {
		margin-right: 1%;
		margin-bottom: 20%;
	}

	.profile-img2 {
		margin-left: 1%;
		margin-top: 20%;
	}

	.about-right {
		width: 45%;
		margin-left: 3%;
		margin-right: 6%;
		padding-right: 2%;
		padding-left: 2%;
		font-size: 1.3rem;
		border-radius: 20px;
		background-color: #7ed957;
		color: white;
		text-align: center;
		box-shadow: 1px 1px 19px 1px
			${(props) => (props.darkMode ? "white" : "rgba(0, 0, 0, 0.7)")};
	}

	.social1 {
		position: relative;
		bottom: -55%;
		left: -50%;
		color: ${(props) => (props.darkMode ? "white" : "#2867B2")};
	}

	.social2 {
		position: relative;
		bottom: -93%;
		left: -35%;
		color: ${(props) => (props.darkMode ? "white" : "#2867B2")};
	}

	.product-section {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 15%;
	}

	.product-left {
		width: 30%;
		margin-left: 6%;
		padding: 0 5% 0 5%;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		background-color: #7ed957;
		color: white;
		text-align: center;
		box-shadow: 1px 1px 19px 1px
			${(props) => (props.darkMode ? "white" : "rgba(0, 0, 0, 0.7)")};
	}

	.product-right {
		width: 45%;
		display: flex;
		justify-content: center;
		margin-right: 3.5%;
	}

	p {
		margin-top: 0;
	}

	.example-img {
		width: 100%;
		border-radius: 20px;
	}
`;

const LandingPage = ({ theme }) => {
	return (
		<StyledLandingPage darkMode={theme}>
			<section className="main-section">
				<div className="main-left">
					<h2 className="section-heading">
						Debt management solution helping users effectively pay
						down their debt
					</h2>
					<p style={{ fontSize: "1.2rem" }}>
						Our mission is to help people own their financial future
						by analyzing their financial information and optimizing
						their debt payments.{" "}
					</p>
					<div className="call-to-action-btns">
						<div className="cta-btn">
							<NavLink className="btn" to="/demo">
								Demo
							</NavLink>
						</div>
						<div className="cta-btn learn-more">
							<a className="btn learn-more-btn" href="#product">
								Learn More
							</a>
						</div>
					</div>
				</div>
				<div className="main-right">
					<img className="logo" src={logo} alt="Billy logo" />
				</div>
			</section>
			<div id="about"> </div>
			<section className="about-section">
				<div className="about-left">
					<img
						className="profile-img1"
						src="https://media-exp1.licdn.com/dms/image/C4D03AQELgNHQ2Iwcag/profile-displayphoto-shrink_800_800/0/1582760083283?e=1624492800&v=beta&t=1FMVw-4oAmOY0LhDvmPtM4958NTMMVUnuS5i0A3bJlA"
						alt="Daniela"
					/>
					<IconContext.Provider
						value={{
							size: "3em",
							className: "social1",
						}}
					>
						<a
							href="https://www.linkedin.com/in/danielagomezsanchez/"
							rel="noreferrer"
							target="_blank"
						>
							<AiFillLinkedin />
						</a>
					</IconContext.Provider>
					<img
						className="profile-img2"
						src="https://media-exp1.licdn.com/dms/image/C4D03AQEqDj2ucdnQcg/profile-displayphoto-shrink_800_800/0/1589453572566?e=1624492800&v=beta&t=Fiplm0dZ1DZr2rFtb0zbB2IUffJYOkjCv1F2eSeP0eM"
						alt="George"
					/>
					<IconContext.Provider
						value={{
							size: "3em",
							className: "social2",
						}}
					>
						<a
							href="https://www.linkedin.com/in/george-vinueza-g3or3/"
							rel="noreferrer"
							target="_blank"
						>
							<AiFillLinkedin />
						</a>
					</IconContext.Provider>
				</div>
				<div className="about-right">
					<h3
						className="section-heading"
						style={{
							fontFamily: "Amatic SC, cursive",
							fontSize: "4rem",
						}}
					>
						Meet the Team
					</h3>
					<p>
						Daniela and George are both students at the University
						of Central Florida majoring in Finance and pursuing a
						Fintech minor. Both are passionate about educating their
						communities in best practices for personal money
						management.
					</p>
				</div>
			</section>

			<section id="product" className="product-section">
				<div className="product-left">
					<h3
						className="section-heading"
						style={{
							fontFamily: "Amatic SC, cursive",
							fontSize: "4rem",
						}}
					>
						How it Works
					</h3>
					<p>
						Every month you start with a number – your total monthly
						expenses. The goal is to “zero out” your monthly debt by
						end of month.
					</p>
					<p>
						Payments are prioritized by: Interest rate, Amount
						(Total interest paid) & Term / Maturity Date
					</p>
					<p>
						Billy's algorithm establishes and routinely optimizes a
						user's financial plan in order to make sure their
						payments are maximizing their interest savings.
					</p>
				</div>
				<div className="product-right">
					<img
						className="example-img"
						src={example}
						alt="example of a budget"
					/>
				</div>
			</section>
		</StyledLandingPage>
	);
};

export default LandingPage;
