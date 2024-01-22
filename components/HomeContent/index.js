import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";
import Link from "next/link";
import asylum from "../../public/asylum.png";
import work from "../../public/work.png";
import euro from "../../public/euro.png";

export default function HomeContent() {
	return (
		<>
			<HomeWrapper>
				<Teaser>
					<ImageContainer>
						<Image
							src={Watermark}
							alt="KI Logo"
							style={{
								height: "100%",
								width: "auto",
							}}
						/>
					</ImageContainer>
					<TeaserContent>
						<TeaserTitle>Schön, dass Sie zu mir gefunden haben.</TeaserTitle>
						<p>
							Das entschiedene Eintreten für Menschen-, Bürger- und
							Arbeitnehmer*innenrechte ist ein fester Bestandteil meiner
							anwaltlichen Tätigkeit. Ich vertrete neben den rechtlichen
							Interessen von Geflüchteten und Migrant*innen auch
							Arbeitnehmer*innen.
						</p>

						<p>
							Über die anwaltliche Tätigkeit hinaus engagiere ich mich für
							Bürger*innen &ndash; und Menschenrechte in verschiedenen
							rechtspolitischen Vereinigungen.
						</p>

						<p>
							Insbesondere die Vertretung von Menschen aus der LGBTQI+-Community
							und Opfern von Sexismus, frauenspezifischer Gewalt und Ableismus
							ist mir ein großes Anliegen.
						</p>
					</TeaserContent>
				</Teaser>
				<Separator></Separator>
				<RechtsgebieteTitle>Rechtsgebiete</RechtsgebieteTitle>
				<Rechtsgebiete>
					<Link href="/Migrationsrecht" style={{ textDecoration: "none" }}>
						<Circle>
							<Image
								src={asylum}
								alt="asylum"
								style={{
									objectFit: "contain",
									width: "30%",
									position: "relative",
									height: "unset",
								}}></Image>
							<TitleCircle>Migrationsrecht</TitleCircle>
							<TextCircle>
								Wie Rechtsbeistand Verfahrensrechte einfordern kann.
							</TextCircle>
						</Circle>
					</Link>
					<Link href="/Arbeitsrecht" style={{ textDecoration: "none" }}>
						<Circle>
							<Image
								src={work}
								alt="work"
								style={{
									objectFit: "contain",
									width: "30%",
									position: "relative",
									height: "unset",
								}}></Image>
							<TitleCircle>Arbeitsrecht</TitleCircle>
							<TextCircle>
								Wie eine rechtliche Beratung die Komplexität des
								Arbeitsverhältnisses bewältigen kann?
							</TextCircle>
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
						<AblaufKostenTitle>Ablauf und Kosten</AblaufKostenTitle>
					</Link>
				</AblaufKostenWrapper>
			</HomeWrapper>
		</>
	);
}
const TitleCircle = styled.h3`
	margin: 1rem;
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
	display: flex;
	flex-direction: row;
	text-align: center;

	&:hover {
		background-color: rgba(
			26,
			77,
			97,
			0.2
		); /* Change the background color on hover */
	}
`;
const AblaufKostenTitle = styled.h2`
	font-size: 1.5rem;
	color: #1a4d61;
	padding: 0rem;
	// text-align: right;
	margin-top: 2rem;
	margin-bottom: 0rem;
`;
const Separator = styled.div`
	border-bottom: 1px solid rgba(26, 77, 97, 0.5);
	padding-top: 1rem;
	padding-bottom: 4rem;
	width: 80%;
	justify-content: center;
	margin: 0 auto;
	margin-bottom: 2rem;
	display: flex;
`;
const RechtsgebieteTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 0rem;
`;

const Circle = styled.div`
	// margin-top: 5rem;

	border: 1px solid #1a4d61;
	width: 25vw;
	height: 25vw;
	border-radius: 50%;
	background-color: #f8f8f8;
	// background-color: rgba(26, 77, 97, 1);
	text-align: center;
	// line-height: 100px;
	color: #1a4d61;
	// align-items: center;
	text-decoration: none;
	// font-family: Arial, sans-serif;
	font-size: 2rem;
	transition: background-color 0.3s ease;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: rgba(
			26,
			77,
			97,
			0.2
		); /* Change the background color on hover */
	}
`;
const Rechtsgebiete = styled.div`
	display: flex;
	justify-content: space-around;
`;
const ImageContainer = styled.div`
	position: relative;
	opacity: 0.8;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
`;
const HomeWrapper = styled.div`
	margin: 5rem;
	padding: 5rem 2rem 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
`;

const TeaserTitle = styled.h2`
	color: #1a4d61;
`;

const Teaser = styled.div`
	display: flex;
	flex-direction: row;
	// max-width: 90%;
	font-size: 1.3rem;
	margin-top: 0rem;
	color: #333;
	text-align: justify;
`;

const TeaserContent = styled.div`
	display: flex;
	flex-direction: column;
`;
