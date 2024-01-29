import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";
import Link from "next/link";
import Migration from "../../public/Migration.png";
import work from "../../public/work.png";
import Arbeit from "../../public/Arbeit.png";
import euro from "../../public/euro.png";
import Startseite from "../../public/Startseite.jpg";

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
						</p>

						<p>
							{currentLanguage === "DE"
								? "Vereinbaren Sie gerne eine Erstberatung per E-Mail oder über diese Homepage. "
								: "Feel free to schedule an initial consultation via email or through this website."}
						</p>

						<p>
							{currentLanguage === "DE"
								? "Ich freue mich über Ihre Anfrage!"
								: "I look forward to receiving your inquiry!"}
						</p>
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
									width: "30%",
									position: "relative",
									height: "unset",
								}}></Image>
							<TitleCircle>
								{currentLanguage === "DE"
									? "Migrationsrecht"
									: "Inmigration law"}
							</TitleCircle>
							{/* <TextCircle>
								{currentLanguage === "DE"
									? "Wie Rechtsbeistand Verfahrensrechte einfordern kann."
									: "How legal aid can claim procedural rights"}
							</TextCircle> */}
						</Circle>
					</Link>
					<Link href="/Arbeitsrecht" style={{ textDecoration: "none" }}>
						<Circle>
							<Image
								src={Arbeit}
								alt="work"
								style={{
									objectFit: "contain",
									width: "30%",
									position: "relative",
									height: "unset",
								}}></Image>
							<TitleCircle>
								{" "}
								{currentLanguage === "DE" ? "Arbeitsrecht" : "Employment law"}
							</TitleCircle>
							{/* <TextCircle>
								{currentLanguage === "DE"
									? "Wie eine rechtliche Beratung die Komplexität des Arbeitsverhältnisses bewältigen kann?"
									: "How can legal advice deal with the complexity of the employment relationship?"}
							</TextCircle> */}
						</Circle>
					</Link>
				</Rechtsgebiete>
				<Separator></Separator>
				<AblaufKostenWrapper>
					<Link href="/AblaufKosten" style={{ textDecoration: "none" }}>
						<Image
							src={euro}
							alt="euro"
							style={{
								objectFit: "contain",
								width: "30%",
								position: "relative",
								height: "unset",
							}}></Image>
						<AblaufKostenTitle>
							{" "}
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
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	border: 1px solid #1a4d61;
	padding: 0.5rem;
	border-radius: 5px;
	margin-top: 2rem;
	cursor: pointer;
	font-size: 1.1rem;
	font-family: "Ruluko-Regular", sans-serif;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: 50%;

	@media (max-width: 768px) {
		margin-left: auto;
		margin-right: auto;
	}
`;

const TitleCircle = styled.h3`
	margin: 2rem;
`;
const TextCircle = styled.p`
	font-size: 1rem;
`;

const AblaufKostenWrapper = styled.div`
	border: 1px solid rgba(26, 77, 97, 0.5);
	border-radius: 15px;
	height: 15rem;
	width: 10rem;
	padding: 1rem;
	justify-content: center;
	margin: auto;
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	text-align: center;

	&:hover {
		background-color: rgba(26, 77, 97, 0.2);
	}
`;
const AblaufKostenTitle = styled.h2`
	font-size: 1.5rem;
	color: #1a4d61;
	padding: 0rem;
	margin-top: 2rem;
	margin-bottom: 0rem;
`;
const Separator = styled.div`
	border-bottom: 1px solid rgba(26, 77, 97, 0.5);
	padding-top: 0rem;
	padding-bottom: 4rem;
	width: 100%;
	justify-content: center;
	margin: 0 auto;
	margin-bottom: 2rem;
	display: flex;

	@media (max-width: 1024px) {
	}

	@media (max-width: 375px) {
		margin-bottom: 4rem;
	}
`;
const RechtsgebieteTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 375px) {
		font-size: 2.1rem;
		margin-top: 0rem;
	}
`;

const Circle = styled.div`
	// border: 1px solid #1a4d61;
	width: 25vw;
	height: 25vw;
	border-radius: 50%;
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
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.55);

	&:hover {
		background-color: rgba(26, 77, 97, 0.2);
	}
	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		margin-top: 2rem;
		width: 25rem;
		height: 25rem;
		font-size: 2rem;
	}

	@media (max-width: 425px) {
		width: 17rem;
		height: 17rem;
	}

	@media (max-width: 375px) {
		width: 15rem;
		height: 15rem;
		margin-top: 2rem;
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

	@media (max-width: 1250px) {
		margin-top: 4.5rem;
	}

	@media (max-width: 1024px) {
		margin-top: 3.5rem;
	}

	@media (max-width: 768px) {
		margin-right: 0;
		margin-top: 5.5rem;
	}

	@media (max-width: 630px) {
		margin-top: 6.5rem;
	}

	@media (max-width: 320px) {
	}

	@media (max-width: 290px) {
		height: 25rem;
		width: auto;
		margin-top: 4.5rem;
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
		margin: 2rem;
	}
	@media (max-width: 650px) {
		padding: 5rem 1rem 2rem;
		margin: 0;
	}
	@media (max-width: 425px) {
		padding: 5rem 1rem 2rem;
	}

	@media (max-width: 375px) {
		padding: 5rem 1rem 2rem;
	}
`;

const TeaserTitle = styled.h2`
	color: #1a4d61;
	font-family: "Ruluko-Regular";

	@media (max-width: 425px) {
		text-align: left;
		margin-top: 3rem;
	}
`;

const Teaser = styled.div`
	position: relative; /* Ensure relative positioning for child absolute positioning */
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
	}

	@media (max-width: 375px) {
		flex-direction: column;
	}
`;

const TeaserContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;

	font-family: "FiraSans-Regular";
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
		top: 4rem;
		left: 32rem;
	}

	@media (max-width: 1024px) {
		top: 4rem;
		left: 27rem;
	}

	@media (max-width: 960px) {
		top: 28rem;
		left: 26rem;
	}

	@media (max-width: 824px) {
		left: 17rem;
	}

	@media (max-width: 768px) {
		top: 40rem;
		left: 15rem;
	}

	@media (max-width: 425px) {
		height: 20rem;
		width: auto;
		left: 8rem;
		top: 42rem;
	}

	@media (max-width: 375px) {
		height: 16rem;
		width: auto;
		left: 9rem;
	}

	@media (max-width: 320px) {
		height: 16rem;
		width: auto;
		left: 6rem;
		top: 45rem;
	}

	@media (max-width: 290px) {
		height: 13rem;
		width: auto;
	}
`;
