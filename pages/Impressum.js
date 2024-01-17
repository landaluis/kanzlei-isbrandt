import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";
// import Watermark from "../../public/Watermark.png";
import StandardContainer from "@/components/StandardContainer";

export default function Impressum() {
	return (
		<>
			{" "}
			<Header />
			{/* <StandardContainer> */}
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
						Tel: <br />
						Fax: <br />
						info@ Berufshaftpflichtversicherung:
						<br />
						Allianz Versicherungs-AG
						<br />
						Königinstraße 28
						<br />
						0802 München
						<br />
						www.allianz.de{" "}
					</p>
					<p>
						Geltungsbereich: Europa
						<br />
						Berufsbezeichnung: Rechtsanwältin
						<br />
						Berufsbezeichnung verliehen in: Deutschland Zuständige Kammer /
						Aufsichtsbehörde:
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
						Link: www.rechtsanwaltskammer-hamm.de
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
						https://www.brak.de/fuer-anwaelte/berufsrecht/
					</p>
					<p>
						Plattform der EU zur außergerichtlichen <br />
						Online-Streitbeilegung: http://ec.europa.eu/consumers/odr/
					</p>
					<p>Verantwortlich für den Inhalt (gem. § 18 Abs. 2 MStV):</p>
					<p>
						Christina Isbrandt
						<br />
						Friedrichstraße 24
						<br />
						33615 Bielefeld
					</p>
					<p>USt.-IdNr.: </p>
				</Content>
				{/* <Image
					src={Watermark}
					alt="KI Logo"
					style={{
						objectFit: "contain",
						width: "100%",
						position: "relative",
						height: "unset",
					}}
				/> */}
			</ImpressumContainer>
			{/* </StandardContainer> */}
			<Footer />{" "}
		</>
	);
}

const Content = styled.div`
	font-size: 1.2rem;
	line-height: 1.75;
	color: #111827;
`;

const ImpressumContainer = styled.div`
	padding: 3rem;
	padding-top: 140px;
	color: #7a8387;

	width: 100%;
	padding: 0 17rem 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
	padding-top: 140px;
	color: #7a8387;
`;

const ImpressumTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
`;
