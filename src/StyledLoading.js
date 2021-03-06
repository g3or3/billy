import styled from "styled-components";

const StyledLoading = styled.div`
	background-image: linear-gradient(45deg, #6e6f74, #202022);
	min-height: 100vh;

	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.center {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 606px;
		height: 200px;
	}

	/* smartphone */

	.smartphone {
		float: left;
		width: 80px;
		height: 120px;
		margin: 40px 0 0 0;
		border: 5px #fff solid;
		border-top-width: 15px;
		border-bottom-width: 20px;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
	}

	.smartphone:before {
		content: "";
		display: block;
		width: 10px;
		height: 3px;
		margin: -9px auto;
		background: #8ebd40;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
	}

	.smartphone:after {
		content: "";
		display: block;
		width: 12px;
		height: 12px;
		margin: 4px auto;
		background: #8ebd40;
		border-radius: 10px;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
	}

	.smartphone .content {
		width: 60px;
		height: 100px;
		margin: 15px 0 0 0;
		padding: 10px;
		background: #8ebd40;
		color: #8ebd40;
		font-size: 0.5em;
		overflow: hidden;
	}

	.smartphone ul li {
		height: 6px;
		margin: 0 0 5px 0;
		border-color: #197425;
		background: #197425;
	}

	.smartphone ul {
		animation: smartphone 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-o-animation: smartphone 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-moz-animation: smartphone 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-webkit-animation: smartphone 4s cubic-bezier(0.25, 0.1, 0.25, 1)
			infinite;
	}

	@keyframes smartphone {
		20%,
		60% {
			transform: translateY(-80%);
		}
		80% {
			margin-top: 0;
		}
	}

	@-o-keyframes smartphone {
		20%,
		60% {
			-o-transform: translateY(-80%);
		}
		80% {
			margin-top: 0;
		}
	}

	@-moz-keyframes smartphone {
		20%,
		60% {
			-moz-transform: translateY(-80%);
		}
		80% {
			margin-top: 0;
		}
	}

	@-webkit-keyframes smartphone {
		20%,
		60% {
			-webkit-transform: translateY(-80%);
		}
		80% {
			margin-top: 0;
		}
	}

	/* tablet */

	.tablet {
		float: left;
		width: 120px;
		height: 160px;
		margin: 0 80px;
		border: 5px #fff solid;
		border-top-width: 15px;
		border-bottom-width: 20px;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
	}

	.tablet:before {
		content: "";
		display: block;
		width: 10px;
		height: 3px;
		margin: -9px auto;
		background: #8ebd40;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
	}

	.tablet:after {
		content: "";
		display: block;
		width: 12px;
		height: 12px;
		margin: 5px auto;
		background: #8ebd40;
		border-radius: 10px;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
	}

	.tablet .content {
		width: 120px;
		height: 160px;
		margin: 15px 0 0 0;
		background: #8ebd40;
		color: #8ebd40;
		font-size: 0.5em;
		overflow: hidden;
		z-index: 1000;
	}

	.tablet .wrap {
		width: 1000px;
	}

	.tablet ul {
		float: left;
		width: 100px;
		margin: 10px;
		animation: tablet 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-o-animation: tablet 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-moz-animation: tablet 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-webkit-animation: tablet 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
	}

	.tablet ul li {
		height: 6px;
		margin: 0 0 5px 0;
		border-color: #197425;
		background: #197425;
	}

	@keyframes tablet {
		20%,
		60% {
			transform: translate(-120px);
		}
		80% {
			transform: translate(0);
		}
	}
	@-o-keyframes tablet {
		20%,
		60% {
			-o-transform: translate(-120px);
		}
		80% {
			-o-transform: translate(0);
		}
	}
	@-moz-keyframes tablet {
		20%,
		60% {
			-moz-transform: translate(-120px);
		}
		80% {
			-moz-transform: translate(0);
		}
	}
	@-webkit-keyframes tablet {
		20%,
		60% {
			-webkit-transform: translate(-120px);
		}
		80% {
			-webkit-transform: translate(0);
		}
	}

	/* laptop */

	.laptop {
		float: left;
		width: 200px;
		height: 120px;
		margin: 56px 0 0 0;
		border: 5px #fff solid;
		border-radius: 2px;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
	}

	.laptop:before {
		content: "";
		display: block;
		position: absolute;
		width: 40px;
		height: 3px;
		margin: 126px 0 0 80px;
		background: #8ebd40;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		-moz-border-radius-bottomleft: 5px;
		-moz-border-radius-bottomright: 5px;
		-webkit-border-bottom-left-radius: 5px;
		-webkit-border-bottom-right-radius: 5px;
		z-index: 1;
	}

	.laptop:after {
		content: "";
		display: block;
		position: absolute;
		width: 240px;
		height: 8px;
		margin: 6px 0 0 -20px;
		background: #fff;
		border-radius: 2px;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		-moz-border-radius-bottomleft: 5px;
		-moz-border-radius-bottomright: 5px;
		-webkit-border-bottom-left-radius: 5px;
		-webkit-border-bottom-right-radius: 5px;
	}

	.laptop .content {
		width: 180px;
		height: 100px;
		margin: 0px 0 0 0;
		padding: 10px;
		background: #8ebd40;
		color: #8ebd40;
		font-size: 0.5em;
		overflow: hidden;
	}

	.laptop ul li {
		height: 6px;
		margin: 0 0 5px 0;
		border-color: #197425;
		background: #197425;
	}

	.laptop ul {
		animation: laptop 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-o-animation: laptop 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-moz-animation: laptop 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
		-webkit-animation: laptop 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
	}

	@keyframes laptop {
		20% {
			transform: translateY(-50%);
		}
		40%,
		60% {
			transform: translateY(-80%);
		}
		80% {
			transform: translateY(0);
		}
	}

	@-o-keyframes laptop {
		20% {
			-o-transform: translateY(-50%);
		}
		40%,
		60% {
			-o-transform: translateY(-80%);
		}
		80% {
			-o-transform: translateY(0);
		}
	}

	@-moz-keyframes laptop {
		20% {
			-moz-transform: translateY(-50%);
		}
		40%,
		60% {
			-moz-transform: translateY(-80%);
		}
		80% {
			-moz-transform: translateY(0);
		}
	}

	@-webkit-keyframes laptop {
		20% {
			-webkit-transform: translateY(-50%);
		}
		40%,
		60% {
			-webkit-transform: translateY(-80%);
		}
		80% {
			-webkit-transform: translateY(0);
		}
	}
`;

export default StyledLoading;
