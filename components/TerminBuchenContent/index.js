import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

export default function TerminBuchenContent({ currentLanguage }) {
	const [showBanner, setShowBanner] = useState(true);

	useEffect(() => {
		const isBannerClosed = localStorage.getItem("isBannerClosed");

		if (isBannerClosed) {
			setShowBanner(false);
		}
	}, []);

	const handleBannerClose = () => {
		setShowBanner(false);

		localStorage.setItem("isBannerClosed", "true");
	};

	return (
		<>
			{showBanner && (
				<BannerContainer>
					<h3>
						{" "}
						{currentLanguage === "DE"
							? "Wir respektieren Ihre persönliche Privatsphäre"
							: "We respect your personal privacy"}
					</h3>
					{currentLanguage === "DE"
						? "Diese Website verwendet Cookies. Sie können Ihre Cookie-Einstellungen unter Cookie-Einstellungen (Cookie Settings) unten auf der Buchungsseite anpassen."
						: "This website uses cookies. You can adjust your cookie settings under Cookie Settings at the bottom of the booking page."}
					<CloseButton onClick={handleBannerClose}>X</CloseButton>
				</BannerContainer>
			)}
			<TerminWrapper>
				{/* <div className="inline-widget">
					<InlineWidget url="https://calendly.com/kanzlei-isbrandt" />
				</div> */}

				<div className="inline-widget">
					<InlineWidget
						url="https://calendly.com/kanzlei-isbrandt/60min?primary_color=1a4d61"
						style="min-width:320px;height:1700px;"
					/>
				</div>
			</TerminWrapper>
		</>
	);
}

const TerminWrapper = styled.div`
	margin-top: 3rem;
	padding: 4rem;

	@media (max-width: 320px) {
		margin-top: 8.5rem;
		padding: 0.5rem;
	}
`;

const BannerContainer = styled.div`
	position: fixed;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	// background-color: #08181f;
	background-color: rgba(8, 24, 31, 0.9);
	color: #fff;
	padding: 10px;
	padding-bottom: 1.5rem;
	width: 80%;
	text-align: center;
	font-family: "Ruluko-Regular";
`;

const CloseButton = styled.span`
	position: absolute;
	top: 5px;
	right: 10px;
	cursor: pointer;
`;
