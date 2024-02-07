import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.webp";
import Link from "next/link";
import Migration from "../../public/Migration.webp";
import Arbeit from "../../public/Arbeit.webp";
import EuroZahnrad from "../../public/EuroZahnrad.webp";
import Startseite from "../../public/Startseite.webp";

export default function HomeContent({ currentLanguage }) {
	return (
		<>
			<HomeWrapper>
				<Teaser>
					<ImageContainer2>
						<Image
							src={Watermark}
							alt="KI Logo"
							style={{
								height: "100%",
								width: "auto",
							}}
						/>
					</ImageContainer2>
					<ImageContainer>
						<Image
							src={Startseite}
							alt="CI Photo"
							priority={true}
							loading="eager"
							style={{
								height: "100%",
								width: "auto",
							}}
						/>
					</ImageContainer>
					<TeaserContent>
						<TeaserTitle>
							{" "}
							{currentLanguage === "DE"
								? "Schön, dass Sie zu mir gefunden haben."
								: "I'm glad you found me."}
						</TeaserTitle>
						<p>
							{currentLanguage === "DE"
								? "Das Eintreten für Menschen-, Bürger- und Arbeitnehmer*innenrechte ist ein fester Bestandteil meiner anwaltlichen Tätigkeit. Ich vertrete in meiner Kanzlei die rechtlichen Interessen von Geflüchteten und Migrant*innen sowie Arbeitnehmer*innen."
								: " Advocating for human, citizen, and workers' rights is an integral part of my legal practice. In my law firm, I represent the legal interests of refugees, migrants, and workers. "}
							<br />
							<br />
							{currentLanguage === "DE"
								? "Vereinbaren Sie gerne eine Erstberatung per E-Mail oder über diese Homepage. "
								: "Feel free to schedule an initial consultation via email or through this website."}
							<br />
							<br />
							{currentLanguage === "DE"
								? "Ich freue mich über Ihre Anfrage!"
								: "I look forward to receiving your inquiry!"}
						</p>
						<br />

						<MehrUberMichLink>
							<Link
								href="/Ubermich"
								style={{ textDecoration: "none", color: "#1a4d61" }}>
								{currentLanguage === "DE" ? "Mehr Über mich" : "More about me"}
							</Link>
						</MehrUberMichLink>
					</TeaserContent>
				</Teaser>
				<Separator></Separator>
				<RechtsgebieteTitle>
					{" "}
					{currentLanguage === "DE" ? "Rechtsgebiete" : "Fields of law"}
				</RechtsgebieteTitle>
				<Rechtsgebiete>
					<Link href="/Migrationsrecht" style={{ textDecoration: "none" }}>
						<Circle>
							<Image
								src={Migration}
								alt="Migration"
								style={{
									objectFit: "contain",
									width: "40%",
									position: "relative",
									height: "unset",
								}}></Image>
							<TitleCircle>
								{currentLanguage === "DE"
									? "Migrationsrecht"
									: "Inmigration law"}
							</TitleCircle>
						</Circle>
					</Link>
					<Link href="/Arbeitsrecht" style={{ textDecoration: "none" }}>
						<Circle>
							<Image
								src={Arbeit}
								alt="work"
								style={{
									objectFit: "contain",
									width: "40%",
									position: "relative",
									height: "unset",
								}}></Image>
							<TitleCircle>
								{" "}
								{currentLanguage === "DE" ? "Arbeitsrecht" : "Employment law"}
							</TitleCircle>
						</Circle>
					</Link>
				</Rechtsgebiete>
				<Separator></Separator>
				<AblaufKostenWrapper>
					<Link
						href="/AblaufKosten"
						style={{
							textDecoration: "none",
							display: "flex",
							justifyContent: "center",
							textAlign: "center",
						}}>
						<AblaufKostenTitle>
							<Image
								src={EuroZahnrad}
								alt="EuroZahnrad"
								style={{
									objectFit: "contain",
									width: "10%",
									position: "relative",
									height: "unset",
								}}></Image>{" "}
							&nbsp;
							{currentLanguage === "DE"
								? "Ablauf und Kosten"
								: "Procedure and costs"}
						</AblaufKostenTitle>
					</Link>
				</AblaufKostenWrapper>
			</HomeWrapper>
		</>
	);
}
const MehrUberMichLink = styled.div`
	width: 9rem;
	display: flex;
	padding: 0.5rem;
	border-radius: 5px;
	margin-top: 0.5rem;
	cursor: pointer;
	font-size: 1.1rem;
	font-family: "Ruluko-Regular", sans-serif;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;

	&:hover {
		background-color: rgba(26, 77, 97, 0.2);
	}

	@media (max-width: 768px) {
		margin-left: auto;
		margin-right: auto;
	}
`;

const TitleCircle = styled.h3`
	margin: 1rem;
`;

const AblaufKostenWrapper = styled.div`
	border-radius: 10px;
	width: auto;
	padding: 2rem;
	justify-content: space-around;
	margin: auto;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	text-align: center;
	height: 100%;

	&:hover {
		background-color: rgba(26, 77, 97, 0.2);
	}
`;
const AblaufKostenTitle = styled.h2`
	display: flex;
	align-items: center;
	font-size: 2.5rem;
	color: #1a4d61;
	padding: 0rem;
	justify-content: center;
	position: relative;
	margin: auto;
	margin-left: 1rem;
	text-align: center;

	@media (max-width: 375px) {
		font-size: 2rem;
	}
`;

const Separator = styled.div`
	border-bottom: 1px solid rgba(26, 77, 97, 0.5);
	padding-top: 0rem;
	padding-bottom: 4rem;
	width: 100%;
	justify-content: center;
	margin: 0 auto;
	margin-bottom: 1rem;
	display: flex;
`;
const RechtsgebieteTitle = styled.h1`
	font-size: 2.5rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}

	@media (max-width: 375px) {
		font-size: 2rem;
		margin-top: 0rem;
	}
`;

const Circle = styled.div`
	width: 25vw;
	height: 25vw;
	border-radius: 10px;
	background-color: #f8f8f8;
	text-align: center;
	color: #1a4d61;
	font-size: 2rem;
	transition: background-color 0.3s ease;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: rgba(26, 77, 97, 0.2);
	}
	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		width: 25rem;
		height: 25rem;
		font-size: 2rem;
		padding: 0rem;
	}

	@media (max-width: 425px) {
		width: 17rem;
		height: 17rem;
	}

	@media (max-width: 375px) {
		width: 15rem;
		height: 15rem;
		font-size: 1.3rem;
	}
`;
const Rechtsgebiete = styled.div`
	display: flex;
	justify-content: space-around;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;
const ImageContainer = styled.div`
	position: relative;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
	margin-right: 3rem;

	@media (max-width: 960px) {
		margin-right: 0;
	}

	@media (max-width: 350px) {
		width: auto;
		height: 25rem;
	}

	@media (max-width: 330px) {
		width: auto;
		height: 20rem;
	}
`;
const HomeWrapper = styled.div`
	margin: 5rem;
	padding: 5rem 2rem 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 1000px) {
		padding: 5rem 1rem 2rem;
		margin-top: 6rem;
	}

	@media (max-width: 768px) {
		padding: 5rem 0rem 2rem;
		margin: 6rem;
		margin-top: 7rem;
	}
	@media (max-width: 650px) {
		padding: 5rem 0rem 2rem;
		margin: 4rem;
		margin-top: 8rem;
	}
	@media (max-width: 500px) {
		margin: 1rem;
		margin-top: 7rem;
	}
	@media (max-width: 425px) {
		margin-top: 7rem;
	}

	@media (max-width: 375px) {
		margin-top: 5rem;
	}
`;

const TeaserTitle = styled.h2`
	color: #1a4d61;
	font-family: "Ruluko-Regular";
	margin: 0;

	@media (max-width: 425px) {
		text-align: left;
		margin-top: 1rem;
	}
`;

const Teaser = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	font-size: 1.3rem;
	margin-top: 0rem;
	color: #333;
	text-align: justify;
	line-height: 1.5;
	overflow: hidden;
	align-items: center;

	@media (max-width: 960px) {
		flex-direction: column;
	}

	@media (max-width: 425px) {
		justify-content: center;
		text-align: left;
	}

	@media (max-width: 375px) {
		flex-direction: column;
		font-size: 1rem;
	}
`;

const TeaserContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	font-family: "FiraSans-Regular";

	@media (max-width: 960px) {
		margin-top: 2rem;
	}
`;

const ImageContainer2 = styled.div`
	position: absolute;
	top: 0;
	left: 47rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
	overflow: hidden;

	@media (max-width: 1260px) {
		top: 1rem;
		left: 39rem;
	}
	@media (max-width: 1200px) {
		left: 35rem;
	}

	@media (max-width: 1024px) {
		left: 27rem;
	}

	@media (max-width: 960px) {
		top: 28rem;
		left: 25rem;
	}

	@media (max-width: 900px) {
		top: 30rem;
		left: 22rem;
	}

	@media (max-width: 824px) {
		left: 17rem;
		top: 33rem;
	}

	@media (max-width: 768px) {
		top: 35rem;
		left: 12rem;
	}

	@media (max-width: 768px) {
		top: 35rem;
		left: 8rem;
	}

	@media (max-width: 425px) {
		height: 20rem;
		width: auto;
		left: 8rem;
		top: 35rem;
	}

	@media (max-width: 375px) {
		height: 16rem;
		width: auto;
		left: 9rem;
	}
	@media (max-width: 360px) {
		left: 7rem;
	}

	@media (max-width: 320px) {
		height: 16rem;
		width: auto;
		left: 6rem;
	}

	@media (max-width: 290px) {
		height: 13rem;
		width: auto;
	}
`;
