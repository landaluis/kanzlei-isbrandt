import React from "react";
import styled from "styled-components";
import Watermark from "../../public/Watermark.png";
import Image from "next/image";
import Übermich from "../../public/Übermich.jpg";

export default function UbermichContent({ currentLanguage }) {
	return (
		<>
			<ContentBox>
				<Title>{currentLanguage === "DE" ? "Über mich" : "About me"}</Title>

				<SectionContent>
					{" "}
					<ContentWrapper>
						<Content>
							<ImageContainer2>
								<Image
									src={Übermich}
									alt="CI Photo"
									style={{
										height: "100%",
										width: "auto",
										maxWidth: "100%",
									}}
								/>
							</ImageContainer2>
							<p>
								{currentLanguage === "DE"
									? "Ich studierte Rechtswissenschaften an der Universität Bielefeld. Bereits dort legte ich meinen Interessensschwerpunkt auf das Migrationsrecht und belegte den Schwerpunktbereich 'Einwanderung und soziale Integration'."
									: "I studied law at the University of Bielefeld. Already there, I focused my interests on migration law and chose the specialization 'Immigration and Social Integration.' "}
							</p>

							<p>
								{currentLanguage === "DE"
									? "Nach dem Ersten Staatsexamen absolvierte ich das Referendariat am Landgericht Bielefeld. Meine Anwalts – sowie Wahlstation absolvierte ich in einer auf Migrationsrecht spezialisierten Kanzlei."
									: "After completing the First State Examination, I undertook my legal clerkship at the District Court in Bielefeld. I completed my internship and elective clerkship at a law firm specializing in migration law."}
							</p>

							<p>
								{currentLanguage === "DE"
									? "Nach meinem Zweiten Staatsexamen und der Zulassung zur Anwaltschaft habe ich zunächst zweieinhalb Jahre als angestellte Rechtsanwältin in einer renommierten Kanzlei für Migrations- und Sozialrecht in Bielefeld gearbeitet."
									: "Following my Second State Examination and admission to the bar, I initially worked as an employed lawyer for two and a half years at a renowned law firm specializing in migration and social law in Bielefeld."}
							</p>

							<p>
								{currentLanguage === "DE"
									? "Meine Rechtsanwaltskanzlei wurde im Jahr 2024 gegründet. In meiner Kanzlei biete ich neben dem Rechtsgebiet Migrationsrecht auch das Rechtsgebiet Arbeitsrecht an."
									: "I established my own law firm in the year 2024. In addition to specializing in migration law, my practice also covers the field of labor law."}
							</p>

							<p>
								{currentLanguage === "DE"
									? "Mitgliedschaften:"
									: "Memberships:"}
							</p>
							<ul>
								<li>
									{currentLanguage === "DE"
										? "Deutscher Anwaltverein (DAV)"
										: "Deutscher Anwaltverein (DAV)"}
								</li>
								<li>
									{currentLanguage === "DE"
										? "Bielefelder Anwaltverein"
										: "Bielefelder Anwaltverein"}
								</li>
								<li>
									{currentLanguage === "DE"
										? "Arbeitsgemeinschaft Migrationsrecht beim Deutschen Anwaltverein"
										: "Arbeitsgemeinschaft Migrationsrecht beim Deutschen Anwaltverein"}
								</li>
								<li>
									{currentLanguage === "DE"
										? "Republikanischer Anwältinnen- Und Anwälteverein e.V."
										: "Republikanischer Anwältinnen- Und Anwälteverein e.V."}{" "}
								</li>
								<li>
									{currentLanguage === "DE"
										? "FORUM Junge Anwaltschaft"
										: "FORUM Junge Anwaltschaft"}
								</li>
								<li>
									{currentLanguage === "DE"
										? "Deutscher Juristinnenbund e.V."
										: "Deutscher Juristinnenbund e.V."}{" "}
								</li>
							</ul>

							<p>
								{currentLanguage === "DE"
									? "Da mir der Austausch unter jungen Anwält*innen und Berufsanfänger*innen wichtig ist, bin ich seit August 2023 Regionalbeauftragte für das FORUM Junge Anwaltschaft im Landgerichtsbezirk Bielefeld. "
									: " Since August 2023, I have been serving as the Regional Representative for the FORUM Young Lawyers in the Bielefeld Regional Court district, as I consider the exchange among young lawyers and beginners in the field crucial. "}{" "}
							</p>
							<p>
								{currentLanguage === "DE"
									? "Zudem bin ich für die Karin und Walter Blüchert Gedächtnisstiftung mit Sitz in Hamburg als wissenschaftliche Mitarbeiterin in dem Projekt 'Soziales Entschädigungsrecht' ehrenamtlich tätig."
									: "Additionally, I volunteer as a research assistant in the project 'Social Compensation Law' for the Karin and Walter Blüchert Memorial Foundation based in Hamburg."}
							</p>
						</Content>
					</ContentWrapper>
					{/* <ImageContainer>
						<Image
							src={Watermark}
							alt="KI Logo"
							style={{
								height: "100%",
								width: "auto",
							}}
						/>
					</ImageContainer> */}
				</SectionContent>
			</ContentBox>
		</>
	);
}

const ImageContainer2 = styled.div`
	position: relative;
	z-index: 2;
	height: 30rem;
	width: auto;
	float: left;
	margin-top: 1.2rem;
	padding-right: 2rem;
	max-width: 100%;

	@media (max-width: 800px) {
		text-align: center;
		margin: 0 auto;
		float: none;
		margin-left: auto;
		margin-right: auto;
		padding-right: 0;
		margin-bottom: 3rem;
	}

	@media (max-width: 375px) {
		width: auto;
		height: 20rem;
		// height: 10rem;
	}
`;
const Content = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	text-align: justify;
	margin-left: 2rem;
	font-family: "FiraSans-Regular";

	@media (max-width: 900px) {
		margin-left: 0rem;
	}

	@media (max-width: 800px) {
		margin: 0 auto; /* Center the container horizontally */
		// text-align: center; /* Center the child elements */
		float: none;
	}
`;

const SectionContent = styled.div`
	position: relative;
	width: 100%;
	flex: 1;
	// overflow: hidden;
`;

const ContentBox = styled.div`
	padding: 2rem;
	border-radius: 10px;
	background-color: rgba(26, 77, 97, 0.2);
	// margin: 8rem 2rem 4rem;
	margin: 9rem 10rem 2rem;
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	// @media (max-width: 321px) {
	// 	margin-left: 1rem;
	// 	margin-right: 1rem;
	// }

	@media (max-width: 1024px) {
		margin: 11rem 7rem 2rem;
	}

	@media (max-width: 900px) {
		margin: 11rem 5rem 2rem;
	}

	@media (max-width: 700px) {
		margin: 11rem 3rem 2rem;
	}
	@media (max-width: 500px) {
		margin: 11rem 2rem 2rem;
		padding: 1rem;
	}
	@media (max-width: 321px) {
		margin: 9rem 1rem 2rem;
	}
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 0rem;
	left: 46rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;

	@media (max-width: 320px) {
		height: 15rem;
		width: auto;
		top: 10rem;
		left: 3rem;
	}
`;

const ContentWrapper = styled.div`
	max-width: 800px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0rem;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 0rem;
	margin-bottom: 0;
`;
