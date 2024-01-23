import React from "react";
import styled from "styled-components";
import Watermark from "../../public/Watermark.png";
import Image from "next/image";

export default function UbermichContent({ currentLanguage }) {
	return (
		<>
			<ContentBox>
				<Title>{currentLanguage === "DE" ? "Über mich" : "About me"}</Title>
				<SectionContent>
					<ContentWrapper>
						<Content>
							<p>
								{currentLanguage === "DE"
									? "Nach meiner Schullaufbahn studierte ich Rechtswissenschaften an der Universität Bielefeld. Bereits dort legte ich meinen Schwerpunkt auf das Migrationsrecht und belegte den Schwerpunkt &quot;Einwanderung und soziale Integration&quot;."
									: "After completing my school education, I pursued legal studies at the University of Bielefeld. During my time there, I focused on immigration law and chose the specialization &quot;Immigration and Social Integration.&quot; "}
							</p>

							<p>
								{currentLanguage === "DE"
									? "Nach dem Ersten Staatsexamen absolvierte ich das Referendariat am Landgericht Bielefeld, wobei ich auch hier dem Migrationsrecht Priorität einräumte und meine Anwalts- sowie Wahlstation in einer auf Migrationsrecht spezialisierten Kanzlei absolvierte."
									: "Following the First State Examination, I undertook the legal clerkship at the Bielefeld Regional Court, where I continued to prioritize immigration law. I completed my legal traineeship, including my internship and elective stage, in a law firm specializing in migration law."}
							</p>

							<p>
								{currentLanguage === "DE"
									? "Nach meinem Zweiten Staatsexamen und der Zulassung zur Anwaltschaft habe ich zunächst zweieinhalb Jahre als angestellte Rechtsanwältin in einer renommierten Kanzlei für Migrations- und Sozialrecht in Bielefeld gearbeitet."
									: "Upon completing my second State Examination and obtaining admission to the bar, I initially worked as an employed attorney for two and a half years at a renowned firm specializing in migration and social law in Bielefeld."}
							</p>

							<p>
								{currentLanguage === "DE"
									? "Meine Rechtsanwaltskanzlei wurde im Jahr 2024 gegründet. In meiner Kanzlei biete ich neben dem Rechtsgebiet Migrationsrecht auch das Rechtsgebiet Arbeitsrecht an."
									: "I established my own law firm in 2024, where, in addition to immigration law, I also practice labor law."}
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
									? "Da mir der Austausch unter jungen Anwält*innen und Berufsanfänger*innen wichtig ist, bin ich seit August 2023 Regionalbeauftragte für das FORUM Junge Anwaltschaft im Landgerichtsbezirk Bielefeld."
									: "Since August 2023, I have been serving as the Regional Representative for the FORUM Young Lawyers in the Bielefeld Regional Court district, as I consider the exchange among young lawyers and beginners in the field crucial. "}{" "}
							</p>
							<p>
								{currentLanguage === "DE"
									? "Zudem bin ich für die Karin und Walter Blüchert Gedächtnisstiftung mit Sitz in Hamburg als wissenschaftliche Mitarbeiterin in dem Projekt &quot;Soziales Entschädigungsrecht&quot; ehrenamtlich tätig."
									: "Additionally, I volunteer as a research assistant in the project &quot;Social Compensation Law&quot; for the Karin and Walter Blüchert Memorial Foundation based in Hamburg."}
							</p>
						</Content>
					</ContentWrapper>
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
				</SectionContent>
			</ContentBox>
		</>
	);
}

const Content = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	text-align: justify;
`;

const SectionContent = styled.div`
	position: relative;
	width: 100%;
`;

const ContentBox = styled.div`
	padding: 2rem;
	border-radius: 10px;
	background-color: rgba(26, 77, 97, 0.2);
	margin-bottom: 4rem;
	margin-top: 7rem;
`;

const ImageContainer = styled.div`
	position: absolute;
	top: -7rem;
	left: 49rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
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
