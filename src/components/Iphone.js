import React, { useEffect, useState } from "react";
import { BsBackspace } from "react-icons/bs";
import { IconContext } from "react-icons";
import StyledIphone from "../StyledIphone";
import { Link, useHistory } from "react-router-dom";

const months = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December",
};

export const Iphone = () => {
	const [time, setTime] = useState(null);

	const { push } = useHistory();

	const currMonth = months[new Date().getMonth()];
	const nextMonth = months[new Date().getMonth() + 1];

	const handleClick = () => {
		const body = document.getElementsByTagName("body");
		body[0].style.overflow = "";
	};

	const homeButton = () => {
		handleClick();
		push("/");
	};

	useEffect(() => {
		setInterval(() => {
			const time = new Date();
			const hours = time.getHours();
			const minutes = time.getMinutes();

			setTime(
				`${hours > 12 ? hours - 12 : hours}:${
					minutes < 10 ? "0" + minutes : minutes
				}`
			);
		}, 1000);
	}, []);

	return (
		<StyledIphone>
			<Link to="/" onClick={handleClick}>
				<IconContext.Provider
					value={{
						color: "white",
						size: "3em",
						className: "backspace-icon",
					}}
				>
					<BsBackspace />
				</IconContext.Provider>
			</Link>
			<div className="background-panels">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className="phone">
				<div className="phone-back">
					<div className="phone-left-side">
						<div className="phone-antena"></div>
						<div className="phone-button top"></div>
						<div className="phone-button"></div>
						<div className="phone-button bottom"></div>
						<div className="phone-antena bottom"></div>
					</div>
					<div className="phone-bottom">
						<div className="phone-antena"></div>
						<div className="bottom-speaker">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="phone-screw">
							<div></div>
						</div>
						<div className="phone-charger"></div>
						<div className="phone-screw right">
							<div></div>
						</div>
						<div className="bottom-speaker right">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="phone-antena right"></div>
					</div>
				</div>
				<div className="phone-screen"></div>
				<div className="phone-display">
					<div className="phone-notch">
						<div className="phone-speaker"></div>
					</div>
					<div className="display-content">
						<div className="notifications-bar">
							<div className="time">{time}</div>
							<div className="range"></div>
							<div className="wifi"></div>
							<div className="battery"></div>
						</div>
						<div className="nav">
							<div className="messages"></div>
							<div className="phone-number">Dashboard</div>
							<div className="menu"></div>
						</div>
						<div className="current-plan">
							<div className="plan">
								<div>
									<div className="plan-header">
										Amount Left to Zero Out:
									</div>
									<div className="plan-price">
										<span>$</span>529.95
									</div>
								</div>
								<div className="plan-date">
									<div>{currMonth} 28TH</div>
									<div>{nextMonth} 28TH</div>
								</div>
							</div>
							<div className="text-question">
								We noticed a new payment in your bank statement.
								Would you like us to take a look?
							</div>
						</div>
						<div className="plan-box">
							<div className="plan-options">
								<div>
									<div>
										7%<span> Rate</span>
									</div>
									<div>Interest</div>
								</div>
								<div>
									<div>
										96<span> Months</span>
									</div>
									<div>Left till Payoff</div>
								</div>
							</div>
							<div className="plan-text">
								<strong>$</strong> Savings Found
							</div>
							<a className="change-plan" href="/">
								Optimize
							</a>
						</div>
						<div className="plan-list">
							<div className="plan-limit">
								<div className="limit-text">
									<div>
										<strong>$364.75</strong>
										<span>Until {nextMonth} 28</span>
									</div>
									<span className="limit-subtext">
										Car Payment
									</span>
								</div>
								<div className="limit-icon"></div>
							</div>
							<div className="plan-limit">
								<div className="limit-text">
									<div>
										<strong>$1160.03</strong>
										<span>Until {nextMonth} 06</span>
									</div>
									<span className="limit-subtext">
										Mortgage Payment
									</span>
								</div>
								<div className="limit-icon upgrade"></div>
							</div>
						</div>
						<div className="bottom-icons">
							<div className="chart">
								<div></div>
							</div>
							<div className="eye">
								<div></div>
							</div>
							<div className="equalizer">
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div className="home-button"></div>
					</div>
				</div>
				<div className="phone-reflections">
					<div className="reflection-1"></div>
					<div className="reflection-2"></div>
					<div className="reflection-3"></div>
					<div className="reflection-4"></div>
					<div className="reflection-5"></div>
					<div className="reflection-6"></div>
					<div className="reflection-7"></div>
				</div>
			</div>
			<div className="homebtn" onClick={homeButton}></div>
		</StyledIphone>
	);
};
