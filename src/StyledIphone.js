import styled from "styled-components";

const StyledIphone = styled.div`
	background-image: linear-gradient(45deg, #6e6f74, #202022);
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Open Sans", sans-serif;

	.backspace-icon {
		z-index: 1;
		position: absolute;
		top: 10%;
		right: 10%;
		cursor: pointer;
	}

	.background-panels {
		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		width: 1800px;
		border: 2px solid #0f0f0f;
		flex-wrap: wrap;
		transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg);
	}
	.background-panels div {
		height: 500px;
		width: 580px;
		border: 2px solid #0f0f0f;
		box-shadow: inset 3px 0 0px -1px #4b4c4f, inset 0 -3px 1px -1px #424346,
			inset 0 -4px 0 -1px #353639,
			inset 5px 0 1px -1px rgba(182, 182, 190, 0.6),
			inset 0 -5px 1px -1px rgba(182, 182, 190, 0.2);
	}
	.phone {
		position: absolute;
		left: calc(50% - 8px);
		top: calc(50% - 2px);
		transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg);
	}
	@media screen and (max-width: 1400px) {
		.phone {
			transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg)
				scale(0.8);
		}
	}
	.phone-back {
		position: absolute;
		top: -3px;
		transform: translate(-50%, -50%);
		height: 734px;
		width: 430px;
		background-image: linear-gradient(to bottom, #3a3b3f 70%, #1d1d1f);
		border-radius: 74px 40px 84px 50px;
		box-shadow: -26px 8px 8px -10px rgba(0, 0, 0, 0.3),
			-6px 6px 6px 0 rgba(0, 0, 0, 0.6),
			-30px 14px 10px -10px rgba(0, 0, 0, 0.5),
			-20px 40px 8px 0 rgba(0, 0, 0, 0.1),
			-20px 30px 8px 0 rgba(0, 0, 0, 0.1),
			inset 20px 0 15px -6px rgba(0, 0, 0, 0.6),
			inset 2px 0 4px -2px rgba(0, 0, 0, 0.6),
			inset 2px 0 1px -2px rgba(255, 255, 255, 0.1),
			inset 0 -15px 10px -10px rgba(255, 255, 255, 0.15);
	}
	.phone-back:before {
		content: "";
		display: block;
		height: 300px;
		width: 100px;
		position: absolute;
		background-color: #fff;
		left: 16px;
		bottom: 40px;
		border-radius: 20px;
		filter: blur(5px);
		opacity: 0.1;
		transform: rotate(4deg);
	}
	.phone-back:after {
		content: "";
		display: block;
		height: 300px;
		width: 100px;
		position: absolute;
		background-color: #fff;
		left: 26px;
		bottom: 40px;
		border-radius: 20px;
		filter: blur(4px);
		opacity: 0.25;
		transform: rotate(2deg);
	}
	.phone-screen {
		position: absolute;
		top: -16px;
		left: 14px;
		transform: translate(-50%, -50%);
		height: 710px;
		width: 400px;
		background-color: #000;
		border-radius: 48px 40px 52px 45px;
		box-shadow: -2px 0 0px -1px rgba(255, 255, 255, 0.4),
			-1px 3px 3px -3px rgba(255, 255, 255, 0.7);
	}
	.phone-display {
		position: absolute;
		z-index: 1;
		top: -23px;
		left: 20px;
		transform: translate(-50%, -50%);
		height: 690px;
		width: 378px;
		background-color: #fbfbfb;
		border-radius: 45px 37px 41px 41px;
	}
	.phone-notch {
		position: absolute;
		top: -1px;
		left: 50%;
		transform: translate(-50%);
		width: 210px;
		background-color: #131313;
		border-top: 6px solid #000;
		height: 21px;
		z-index: 3;
		border-radius: 0 0 20px 20px;
	}
	.phone-notch:after {
		content: "";
		display: block;
		height: 12px;
		width: 12px;
		background-color: transparent;
		position: absolute;
		left: -12px;
		top: -5px;
		border-radius: 50%;
		box-shadow: 5px -5px 0 -3px #000;
	}
	.phone-notch:before {
		content: "";
		display: block;
		height: 12px;
		width: 12px;
		background-color: transparent;
		position: absolute;
		right: -12px;
		top: -5px;
		border-radius: 50%;
		box-shadow: -4px -4px 0 -3px #000;
	}
	.phone-speaker {
		position: absolute;
		top: 6px;
		width: 58px;
		height: 6px;
		border-radius: 20px;
		background-color: #2b2b2b;
		overflow: hidden;
		box-shadow: 0 0 0 1px #363637, inset -3px 3px 1px 0px #000,
			inset -3px 4px 0px -1px rgba(255, 255, 255, 0.5);
		left: 50%;
		transform: translateX(-50%);
	}
	.phone-speaker:after {
		content: "";
		display: block;
		height: 4px;
		width: 4px;
		background-color: #87888c;
		position: absolute;
		right: -1px;
		border-radius: 50%;
		top: -1px;
	}
	.phone-speaker:before {
		content: "";
		display: block;
		height: 4px;
		width: 4px;
		background-color: #898a8e;
		position: absolute;
		right: -2px;
		border-radius: 50%;
		top: 4px;
	}
	.phone-left-side {
		position: absolute;
		left: 0;
		top: 60px;
		width: 30px;
		height: 100%;
	}
	.phone-left-side .phone-antena {
		position: absolute;
		height: 20px;
		width: 50px;
		left: -5px;
		top: 10px;
		border-radius: 50%;
		transform: rotate(-40deg) skewX(20deg);
		background-color: transparent;
		box-shadow: 0px -2px 1px -2px #000;
	}
	.phone-left-side .phone-antena.bottom {
		top: auto;
		bottom: 128px;
	}
	.phone-left-side .phone-antena:after {
		content: "";
		display: block;
		height: 20px;
		width: 50px;
		position: absolute;
		transform: rotate(-2deg);
		left: -5px;
		top: 3px;
		border-radius: 50%;
		background-color: transparent;
		box-shadow: 0px -2px 1px -2px #000;
	}
	.phone-button {
		position: absolute;
		top: 100px;
		left: 4px;
		height: 47px;
		width: 12px;
		background-color: #010101;
		border-radius: 30px;
		transform: skewY(-40deg);
		box-shadow: -32px -16px 10px 0 rgba(0, 0, 0, 0.4),
			-4px 0 4px 0 rgba(0, 0, 0, 0.4);
	}
	.phone-button.bottom {
		top: 160px;
	}
	.phone-button.top {
		top: 48px;
		height: 29px;
		width: 14px;
		left: 2px;
		border-radius: 10px 10px 10px 3px;
		box-shadow: inset 2px 0 0 -1px rgba(255, 255, 255, 0.25);
	}
	.phone-button.top:after {
		height: 27px;
		width: 8px;
		left: 4px;
		top: 0px;
	}
	.phone-button.top:before {
		height: 28px;
		width: 8px;
		left: 6px;
		top: 0px;
		box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.4);
	}
	.phone-button:before {
		content: "";
		display: block;
		position: absolute;
		height: 45px;
		width: 10px;
		background-image: linear-gradient(to bottom, #6a6b6f 85%, #0b0b0b);
		border-radius: 20px;
	}
	.phone-button:after {
		content: "";
		display: block;
		position: absolute;
		left: -2px;
		top: -1px;
		height: 44px;
		width: 10px;
		background-color: #2d2d2f;
		border-radius: 20px;
		box-shadow: inset -1px -1px 0 -1px rgba(255, 255, 255, 0.6);
	}
	.phone-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.phone-bottom .bottom-speaker {
		position: absolute;
		display: flex;
		left: calc(50% - 120px);
		bottom: 6px;
		transform: skewX(-50deg);
	}
	.phone-bottom .bottom-speaker.right {
		left: calc(50% + 45px);
	}
	.phone-bottom .bottom-speaker div {
		height: 6px;
		width: 6px;
		background-color: #212121;
		box-shadow: inset -4px -3px 2px -2px #000,
			1px -1px 0 -1px rgba(255, 255, 255, 0.5);
		margin: 0 3px;
		border-radius: 50%;
		position: relative;
		overflow: hidden;
	}
	.phone-bottom .bottom-speaker div:after {
		content: "";
		display: block;
		height: 3px;
		width: 3px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		bottom: -1px;
		left: 3px;
		opacity: 0.4;
	}
	.phone-bottom .phone-screw {
		position: absolute;
		bottom: 5px;
		left: calc(50% - 38px);
		height: 9px;
		width: 9px;
		background-image: linear-gradient(
			to right,
			#1a1a1c 30%,
			#a1a2a7 60%,
			#1a1a1c 80%
		);
		border-radius: 50%;
		transform: translateX(-50%) skewX(-50deg);
	}
	.phone-bottom .phone-screw.right {
		left: calc(50% + 36px);
	}
	.phone-bottom .phone-screw div {
		height: 6px;
		width: 6px;
		border-radius: 50%;
		background-color: #252527;
		box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.9), inset -2px 1px 1px -1px #000;
		position: relative;
	}
	.phone-bottom .phone-screw div:after {
		content: "";
		display: block;
		height: 4px;
		width: 4px;
		background-color: #151515;
		transform: rotate(45deg);
		position: absolute;
		top: 1px;
		box-shadow: inset -1px -1px 0 0px rgba(255, 255, 255, 0.6);
	}
	.phone-bottom .phone-charger {
		position: absolute;
		left: 50%;
		bottom: 2px;
		background-image: linear-gradient(
			to right,
			#121214 5%,
			#434446 20%,
			#434446 60%,
			#7a7b80 75%,
			#1b1b1d 90%
		);
		transform: translateX(-50%) skewX(-50deg);
		height: 14px;
		width: 48px;
		overflow: hidden;
		border-radius: 15px 16px 24px 20px;
		box-shadow: 1px 1px 1px -1px rgba(255, 255, 255, 0.4),
			inset -2px -2px 0 -1px #0e0e0e, inset -3px -3px 0 -1px #252527,
			inset 3px 3px 0 -1px #050505;
	}
	.phone-bottom .phone-charger:after {
		content: "";
		display: block;
		height: 10px;
		width: 42px;
		background-color: #050505;
		border-radius: 20px 8px 16px 10px;
		box-shadow: 1px 1px 0 -1px rgba(255, 255, 255, 0.4);
	}
	.phone-bottom .phone-antena {
		position: absolute;
		height: 20px;
		width: 50px;
		bottom: 8px;
		left: 60px;
		border-radius: 40%;
		opacity: 0.7;
		transform: rotate(-45deg) skewX(20deg) scaleY(-1);
		background-color: transparent;
		box-shadow: 0px -2px 1px -2px #000;
	}
	.phone-bottom .phone-antena.right {
		left: auto;
		right: 70px;
		box-shadow: 0px -2px 1px -2px #000,
			19px -2px 0 -2px rgba(255, 255, 255, 0.4);
	}
	.phone-bottom .phone-antena.right:after {
		box-shadow: 0px -2px 1px -2px #000,
			19px -2px 0 -2px rgba(255, 255, 255, 0.4);
	}
	.phone-bottom .phone-antena:after {
		content: "";
		display: block;
		height: 20px;
		width: 50px;
		position: absolute;
		transform: rotate(-2deg);
		left: -3px;
		top: 3px;
		border-radius: 40%;
		background-color: transparent;
		box-shadow: 0px -2px 1px -2px #000;
	}
	.phone-reflections {
		position: absolute;
		top: -17px;
		left: 15px;
		transform: translate(-50%, -50%);
		height: 709px;
		width: 399px;
		border-radius: 48px 40px 52px 45px;
		background-color: transparent;
		z-index: 4;
		overflow: hidden;
	}
	.phone-reflections .reflection-1 {
		position: absolute;
		height: 200%;
		width: 120%;
		background-color: #fff;
		opacity: 0.1;
		left: -320px;
		top: -200px;
		transform: rotate(32deg);
		z-index: 10;
	}
	.phone-reflections .reflection-2,
	.phone-reflections .reflection-3 {
		position: absolute;
		height: 100%;
		left: -94px;
		width: 100px;
		border-radius: 100px;
		background-color: #000;
		top: calc(50% + 14px);
		transform: translateY(-50%);
		z-index: 11;
	}
	.phone-reflections .reflection-3 {
		background: #6d6c71;
		left: -8px;
		height: 60%;
		width: 10px;
		opacity: 0.6;
		top: 70%;
	}
	.phone-reflections .reflection-4 {
		position: absolute;
		height: 60%;
		top: 0;
		background-color: #67686c;
		width: 16px;
	}
	.phone-reflections .reflection-4:before {
		content: "";
		display: block;
		position: absolute;
		height: 100px;
		width: 100px;
		background-color: transparent;
		left: 16px;
		top: 4px;
		border-radius: 44px 40px 0 0;
		box-shadow: -20px 0px 0 0 #67686c;
	}
	.phone-reflections .reflection-4:after {
		content: "";
		display: block;
		height: 80px;
		width: 80px;
		background-color: transparent;
		position: absolute;
		border-radius: 60px 0 0 0;
		left: 0px;
		top: -1px;
		transform: rotate(15deg);
		box-shadow: -25px -3px 2px -8px #000;
	}
	.phone-reflections .reflection-5 {
		position: absolute;
		height: 50%;
		bottom: 0;
		left: 4px;
		width: 12px;
		background-color: #000;
		border-radius: 50%;
	}
	.phone-reflections .reflection-6 {
		position: absolute;
		width: 80px;
		height: 20px;
		background-color: #000;
		border-radius: 50%;
		transform: rotate(40deg);
		bottom: -4px;
		left: -14px;
		z-index: 12;
	}
	.phone-reflections .reflection-6:after {
		content: "";
		display: block;
		position: absolute;
		height: 100px;
		width: 20px;
		background-color: #000;
		right: -17px;
		top: -78px;
		border-radius: 40%;
		transform: rotate(50deg);
	}
	.phone-reflections .reflection-6:before {
		content: "";
		display: block;
		position: absolute;
		height: 50px;
		width: 50px;
		background-color: transparent;
		top: -51px;
		left: 7px;
		transform: rotate(-20deg);
		border-radius: 40%;
		box-shadow: 4px 15px 1px -10px #000;
	}
	.reflection-7 {
		position: absolute;
		bottom: -4px;
		left: 10px;
		height: 20px;
		width: 40px;
		border-radius: 20px 0px 6px 10px;
		transform: skewX(60deg) skewY(-10deg) scaleY(-1) scaleX(-1) scale(0.8);
		background-color: #5c5d61;
		z-index: 13;
	}
	.reflection-7:after {
		content: "";
		display: block;
		height: 20px;
		width: 30px;
		background-color: #5c5d61;
		border-radius: 50%;
		position: absolute;
		top: -3px;
		right: 6px;
		transform: rotate(40deg) skewX(-54deg) skewY(47deg) scaleY(1) scaleX(1);
	}
	.reflection-7:before {
		content: "";
		display: block;
		position: absolute;
		height: 18px;
		width: 15px;
		background-color: #5c5d61;
		left: 6px;
		bottom: -6px;
		border-radius: 2px;
		transform: rotate(253deg) skewX(10deg);
	}
	.display-content {
		position: absolute;
		top: 0;
		left: 0;
		height: 690px;
		width: 378px;
		border-radius: 45px 37px 41px 41px;
		overflow: hidden;
	}
	.display-content:before {
		content: "";
		display: block;
		position: absolute;
		height: 60%;
		width: 100%;
		top: -10%;
		background-image: linear-gradient(to top, #8ebd40, #8ebd40);
		transform: skewY(-15deg);
	}
	.notifications-bar .time {
		color: #fff;
		font-size: 11px;
		position: absolute;
		left: 40px;
		top: 10px;
	}
	.notifications-bar .range {
		position: absolute;
		height: 4px;
		width: 2px;
		background-color: #fff;
		right: 70px;
		top: 14px;
	}
	.notifications-bar .range:after,
	.notifications-bar .range:before {
		content: "";
		display: block;
		position: absolute;
		height: 6px;
		width: 2px;
		background-color: #fff;
		bottom: 0;
		left: 4px;
	}
	.notifications-bar .range:before {
		height: 8px;
		left: 8px;
	}
	.notifications-bar .wifi {
		position: absolute;
		right: 40px;
		top: 10px;
	}
	.notifications-bar .wifi,
	.notifications-bar .wifi:before {
		display: inline-block;
		border: 4px double transparent;
		border-top-color: #fff;
		border-radius: 50%;
	}
	.wifi:before {
		content: "";
		width: 0;
		height: 0;
		position: relative;
		top: -5px;
	}
	.battery {
		height: 5px;
		width: 12px;
		position: absolute;
		top: 12px;
		right: 20px;
		border-radius: 1px;
		border: 1px solid #fff;
	}
	.battery:after {
		content: "";
		position: absolute;
		height: 2px;
		width: 1px;
		background-color: #fff;
		right: -3px;
		top: 1px;
	}
	.nav {
		position: absolute;
		top: 70px;
		width: 100%;
		display: flex;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.nav .phone-number {
		color: #fff;
		font-size: 14px;
		flex: 1;
		text-align: center;
	}
	.nav .messages {
		margin: 0 10px;
		width: 14px;
		height: 10px;
		width: 16px;
		border: 1px solid #fff;
		border-radius: 3px;
		position: relative;
	}
	.nav .messages:before {
		content: "";
		display: block;
		position: absolute;
		background-color: #8ebd40;
		width: 3px;
		height: 4px;
		border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;
		bottom: -3px;
		left: 4px;
		transform: rotate(35deg);
	}
	.nav .messages:after {
		content: "3";
		position: absolute;
		top: -4px;
		right: -4px;
		display: block;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		color: #708dbf;
		background-color: #fff;
		font-size: 9px;
		font-weight: bold;
		text-align: center;
	}
	.nav .menu {
		height: 1px;
		width: 10px;
		background-color: #fff;
		margin: 0 10px;
		position: relative;
		top: 7px;
		transform: scale(1.4);
	}
	.nav .menu:before {
		content: "";
		display: block;
		position: relative;
		width: 14px;
		top: -4px;
		height: 1px;
		left: -4px;
		background-color: #fff;
	}
	.nav .menu:after {
		content: "";
		display: block;
		position: relative;
		width: 6px;
		height: 1px;
		top: 3px;
		background-color: #fff;
		left: 4px;
	}
	.current-plan {
		position: absolute;
		top: 110px;
		width: 100%;
		color: #fff;
	}
	.current-plan .plan {
		flex: 1;
		display: flex;
		padding-left: 40px;
		box-sizing: border-box;
	}
	.current-plan .plan div:first-of-type {
		flex: 1;
	}
	.current-plan .plan-header {
		font-weight: 300;
		font-size: 11px;
		margin-bottom: 3px;
		letter-spacing: 1px;
	}
	.current-plan .plan-price {
		font-size: 2.5em;
		font-weight: 600;
		position: relative;
		left: -16px;
	}
	.current-plan .plan-price span {
		font-size: 20px;
		position: relative;
		top: -14px;
		left: -6px;
	}
	.current-plan .plan-date {
		font-weight: 300;
		font-size: 11px;
		letter-spacing: 1px;
		flex: none;
		width: 120px;
	}
	.current-plan .plan-date div:first-of-type {
		margin-bottom: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	}
	.text-question {
		padding-left: 40px;
		margin-top: 20px;
		font-weight: 300;
		font-size: 15px;
		line-height: 1.4em;
	}
	.plan-box {
		position: absolute;
		top: 270px;
		background-color: #fff;
		padding: 20px;
		border-radius: 5px;
		left: 50%;
		transform: translateX(-50%);
		width: 85%;
		box-sizing: border-box;
		color: #17222d;
		box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
	}
	.plan-box .plan-options {
		display: flex;
		margin-bottom: 20px;
	}
	.plan-box .plan-options > div {
		flex: 1;
	}
	.plan-box .plan-options > div:first-of-type {
		border-right: 1px solid rgba(0, 0, 0, 0.2);
	}
	.plan-box .plan-options > div div {
		font-size: 11px;
		opacity: 0.6;
		padding-left: 30px;
	}
	.plan-box .plan-options > div div:first-of-type {
		font-weight: 700;
		font-size: 16px;
		opacity: 1;
	}
	.plan-box .plan-options > div div:first-of-type span {
		font-size: 0.8em;
		opacity: 0.6;
		font-weight: 400;
	}
	.plan-text {
		font-size: 11px;
		text-align: center;
		margin-bottom: 20px;
	}
	.change-plan {
		display: block;
		text-decoration: none;
		text-align: center;
		color: #fff;
		font-weight: 400;
		font-size: 14px;
		background-image: linear-gradient(to right, #8ebd40, #8ebd40);
		padding: 10px 0;
		border-radius: 5px;
		margin-bottom: 20px;
	}
	.plan-list {
		position: absolute;
		top: 460px;
		color: #17222d;
		box-sizing: border-box;
		width: 80%;
	}
	.plan-list .plan-limit {
		padding: 20px 40px;
		width: 100%;
		display: flex;
	}
	.plan-list .plan-limit:first-of-type {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	.plan-list .plan-limit .limit-icon {
		height: 30px;
		width: 30px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		position: relative;
		margin-right: 10px;
		top: 8px;
	}
	.plan-list .plan-limit .limit-icon.upgrade {
		border: none;
		background-image: linear-gradient(to bottom, #8ebd40, #8ebd40);
		box-shadow: 0 4px 10px -2px #8ebd40;
	}
	.plan-list .plan-limit .limit-icon.upgrade:after {
		border-color: #fff;
		width: 6px;
		left: 12px;
		top: 11px;
		transform: rotate(135deg);
	}
	.plan-list .plan-limit .limit-icon.upgrade:before {
		content: "";
		display: block;
		height: 5px;
		width: 12px;
		border-bottom: 1px solid #17222d;
		border-left: 1px solid #17222d;
		transform: rotate(-45deg);
		position: absolute;
		left: 12px;
		top: 15px;
		border-color: #fff;
		width: 6px;
		transform: rotate(135deg);
	}
	.plan-list .plan-limit .limit-icon:after {
		content: "";
		display: block;
		height: 5px;
		width: 12px;
		border-bottom: 1px solid #17222d;
		border-left: 1px solid #17222d;
		transform: rotate(-45deg);
		position: absolute;
		left: 10px;
		top: 9px;
	}
	.plan-list .plan-limit .limit-text {
		flex: 1;
	}
	.plan-list .plan-limit .limit-text div strong {
		font-size: 20px;
		opacity: 1;
	}
	.plan-list .plan-limit .limit-text div span {
		font-size: 12px;
		opacity: 0.6;
		border-left: 1px solid #17222d;
		margin-left: 4px;
		padding-left: 4px;
	}
	.plan-list .plan-limit .limit-text .limit-subtext {
		opacity: 0.6;
		font-size: 11px;
		position: relative;
		top: -4px;
	}
	.bottom-icons {
		display: flex;
		position: absolute;
		bottom: 30px;
		width: 100%;
	}
	.bottom-icons > div {
		flex: 1;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.bottom-icons .equalizer div {
		height: 18px;
		width: 1px;
		position: relative;
		background-color: #8ebd40;
	}
	.bottom-icons .equalizer div:nth-child(2) {
		left: 5px;
	}
	.bottom-icons .equalizer div:nth-child(2):after {
		top: 11px;
	}
	.bottom-icons .equalizer div:nth-child(3) {
		left: 10px;
	}
	.bottom-icons .equalizer div:nth-child(3):after {
		top: 4px;
	}
	.bottom-icons .equalizer div:after {
		content: "";
		display: block;
		height: 4px;
		width: 4px;
		background-color: #8ebd40;
		border: 1px solid #fff;
		border-radius: 5 0%;
		position: relative;
		left: -2px;
		top: 2px;
	}
	.bottom-icons .eye {
		border-left: 1px solid rgba(0, 0, 0, 0.2);
		border-right: 1px solid rgba(0, 0, 0, 0.2);
	}
	.bottom-icons .eye div {
		height: 6px;
		width: 6px;
		border: 2px solid #8ebd40;
		border-radius: 50%;
		position: relative;
	}
	.bottom-icons .eye div:after,
	.bottom-icons .eye div:before {
		content: "";
		display: block;
		height: 30px;
		width: 28px;
		border-top: 2px solid #8ebd40;
		border-radius: 50%;
		position: absolute;
		top: -6px;
		left: -12px;
	}
	.bottom-icons .eye div:before {
		border-top: none;
		border-bottom: 2px solid #8ebd40;
		top: -18px;
	}
	.bottom-icons .chart div {
		height: 6px;
		width: 1px;
		background-color: #8ebd40;
		position: relative;
		top: 5px;
		transform: scale(1.4);
	}
	.bottom-icons .chart div:after {
		content: "";
		display: block;
		height: 14px;
		width: 1px;
		background-color: #8ebd40;
		position: absolute;
		left: 4px;
		bottom: 0;
	}
	.bottom-icons .chart div:before {
		content: "";
		display: block;
		height: 10px;
		width: 1px;
		background-color: #8ebd40;
		position: absolute;
		left: 8px;
		bottom: 0;
	}
	.home-button {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 120px;
		height: 4px;
		background-color: rgba(0, 0, 0, 0.15);
		bottom: 12px;
		border-radius: 4px;
	}
	.homebtn {
		position: absolute;
		left: 65%;
		top: 69%;
		transform: translateX(-50%);
		width: 120px;
		height: 4px;
		bottom: 12px;
		border-radius: 4px;
		z-index: 1;
		cursor: pointer;
		transform: rotate(-30deg);
	}
`;

export default StyledIphone;
