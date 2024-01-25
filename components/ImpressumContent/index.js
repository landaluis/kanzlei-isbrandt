import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Watermark from "../../public/Watermark.png";

export default function ImpressumContent() {
	return (
		<>
			<ImpressumContainer>
				<ImpressumTitle>Impressum </ImpressumTitle>
				<Content>
					<p>
						Kanzlei Isbrandt
						<br />
						Christina Isbrandt
						<br />
						Friedrichstraße 24
						<br />
						33615 Bielefeld
						<br />
						Tel: 0521 44813645 <br />
						Fax: 0521 44813646
						<br />
						info@kanzlei-isbrandt.de <br />
						Berufshaftpflichtversicherung:
						<br />
						Allianz Versicherungs-AG
						<br />
						Königinstraße 28
						<br />
						0802 München
						<br />
						<StyledLink href="http://www.allianz.de">
							www.allianz.de
						</StyledLink>{" "}
					</p>
					<p>
						Geltungsbereich: Europa
						<br />
						Berufsbezeichnung: Rechtsanwältin
						<br />
						Berufsbezeichnung verliehen in: Deutschland
						<br />
						Zuständige Kammer / Aufsichtsbehörde:
						<br />
						Rechtsanwaltskammer Hamm
						<br />
						Ostenallee 18
						<br />
						59063 Hamm
						<br />
						Tel: 02381/985000
						<br />
						Fax: 02381/985050
						<br />
						Email: info@rak-hamm.de
						<br />
						Link:{" "}
						<StyledLink href="www.rechtsanwaltskammer-hamm.de">
							www.rechtsanwaltskammer-hamm.de
						</StyledLink>
					</p>
					<p>
						Berufsrechtliche Regelungen: <br />
						Bundesrechtsanwaltsordnung (BRAO) <br />
						Berufsordnung für Rechtsanwälte (BORA) <br />
						Fachanwaltsordnung (FAO) <br />
						Berufsregeln der Rechtsanwälte der Europäischen Union
						(CCBE-Berufsregeln)
					</p>
					<p>
						Die berufsrechtlichen Regelungen können Sie hier einsehen:
						<br />
						<StyledLink href="https://www.brak.de/fuer-anwaelte/berufsrecht/">
							https://www.brak.de/fuer-anwaelte/berufsrecht/
						</StyledLink>
					</p>
					<p>
						Plattform der EU zur außergerichtlichen <br />
						Online-Streitbeilegung:{" "}
						<StyledLink href="http://ec.europa.eu/consumers/odr/">
							http://ec.europa.eu/consumers/odr/
						</StyledLink>
					</p>
					<p>Verantwortlich für den Inhalt (gem. § 18 Abs. 2 MStV):</p>
					<p>
						Christina Isbrandt
						<br />
						Friedrichstraße 24
						<br />
						33615 Bielefeld
					</p>
					{/* <p>USt.-IdNr.: </p> */}
				</Content>
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
			</ImpressumContainer>
		</>
	);
}

const ImageContainer = styled.div`
	position: absolute;
	top: 10rem;
	left: 39rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;

	@media (max-width: 1024px) {
		left: 30rem;
	}

	@media (max-width: 900px) {
		left: 25rem;
	}

	@media (max-width: 768px) {
		left: 20rem;
	}

	@media (max-width: 700px) {
		left: 15rem;
	}

	@media (max-width: 600px) {
		left: 10rem;
	}

	@media (max-width: 500px) {
		left: 9rem;
		top: 12rem;
		height: 25rem;
		width: auto;
	}
`;

const Content = styled.div`
	font-size: 1.2rem;
	line-height: 1.75;
	color: #111827;
	font-family: "FiraSans-Regular";
`;

const ImpressumContainer = styled.div`
	padding-top: 140px;
	color: #7a8387;
	padding: 9rem 17rem 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #7a8387;
	overflow: hidden;

	@media (max-width: 1024px) {
		padding: 9rem 12rem 4rem;
	}

	@media (max-width: 768px) {
		padding: 9rem 8rem 4rem;
	}

	@media (max-width: 700px) {
		padding: 9rem 3rem 4rem;
	}

	@media (max-width: 400px) {
		padding: 9rem 1rem 4rem;
	}
`;

const ImpressumTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
`;

const StyledLink = styled.a`
	color: #1a4d61;
`;
