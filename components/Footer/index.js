import React from "react";
import styled from "styled-components";
import ImpressumLink from "../ImpressumLink";
import LogoKI from "../../public/LogoKI.png";
import Image from "next/image";
import KontaktLinkFooter from "../KontaktLinkFooter";

export default function Footer({ currentLanguage }) {
	return (
		<>
			<FooterContainer>
				<Section1>
					<List1>
						<ListItem>Tel: 02381/985000</ListItem>
						<ListItem>Fax: 02381/985050</ListItem>
						<ListItem>Email: info@rak-hamm.de</ListItem>
					</List1>
					<List2>
						{" "}
						<ListItem>
							<ImpressumLink />
						</ListItem>
						<ListItem>
							<KontaktLinkFooter currentLanguage={currentLanguage} />
						</ListItem>
					</List2>
					<ImageContainer>
						<Image
							src={LogoKI}
							alt="KI Logo"
							style={{
								height: "100%",
								width: "auto",
							}}
						/>
					</ImageContainer>
				</Section1>
				<Section2>
					<Copyright>Copyright 2024 &copy; Christina Isbrandt</Copyright>
				</Section2>
			</FooterContainer>
		</>
	);
}
const ImageContainer = styled.div`
	position: relative;
	top: 0.5rem;
	left: 0rem;
	opacity: 1;
	pointer-events: none;
	z-index: 4;
	height: 10rem;
	width: auto;

	@media (max-width: 375px) {
		display: none;
	}
`;
const Section1 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	@media (max-width: 375px) {
		flex-direction: column;
	}
`;
const Section2 = styled.div``;
const Copyright = styled.div`
	color: #7a8387;
	font-size: 1rem;
	margin-top: auto;
	text-align: center;
	padding-bottom: 1rem;
	padding-top: 4rem;
`;

const FooterContainer = styled.div`
	background-color: #08181f;
	flex-direction: column;
	display: flex;
	padding: 3rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	text-align: center;
	bottom: 0;
	width: 100%;
	min-height: auto;

	font-size: 1.2rem;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 375px) {
		padding: 0.5rem;
	}
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const List1 = styled(List)`
	margin-left: 2rem;
	font-size: 1.35rem;

	@media (max-width: 375px) {
		padding: 1rem;
		font-size: 1.1rem;
		margin-top: 1rem;
	}
`;

const List2 = styled(List)`
	margin-left: 5rem;
	padding: 1rem 1.5rem 1rem 1.5rem;
	border-left: 1px dotted rgba(255, 255, 255, 0.2);
	border-right: 1px dotted rgba(255, 255, 255, 0.2);

	@media (max-width: 375px) {
		padding: 1rem;
		margin-left: 0;
	}
`;

const ListItem = styled.li`
	margin-right: 20px;
	margin-bottom: 2rem;
	color: #7a8387;
`;