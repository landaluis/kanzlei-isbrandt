import React from "react";
import styled from "styled-components";

export default function AblaufKostenContent() {
	return (
		<>
			<AblaufKostenTitle>Ablauf & Kosten</AblaufKostenTitle>
			<SectionContent>
				<ContentWrapper>
					<Content1>
						<Content1Title>Kosten</Content1Title>
						Eine effektive Vertretung in migrationsrechtlichen sowie
						arbeitsrechtlichen Verfahren erfordert ein Vertrauensverhältnis
						zwischen Mandant*innen und Rechtsanwältin. Die Beauftragung einer
						Rechtsanwältin ist mit Kosten verbunden. Daher ist es mir wichtig,
						dass von Anfang an über die entstehenden Kosten und Gebühren
						transparent aufgeklärt wird.<br></br>
						<br></br> Die Höhe der Kosten richtet sich insbesondere nach dem
						Umfang, der Schwierigkeit und der Instanz des Verfahrens.<br></br>{" "}
						<br></br>
						Die Abrechnung der Anwaltsgebühren kann entweder nach den
						gesetzlichen Gebühren (RVG) oder nach einer individuellen
						Honorarvereinbarung erfolgen. Eine solche Honorarvereinbarung kann
						entweder ein Stunden- oder Pauschalhonorar vorsehen. Das RVG
						hingegen sieht Pauschalsätze vor, die sich nach dem jeweiligen
						Streit- bzw. Gegenstandswert richten. <br></br>
						<br></br> Bei der Mandatsannahme ist ein Kostenvorschuss zu leisten,
						dessen Höhe wir individuell vereinbaren können. Nach Annahme des
						Mandats sind Ratenzahlungen möglich. Sprechen Sie mich diesbezüglich
						gerne bei Ihrer Kontaktanfrage an! <br></br> <br></br>Für Mandanten
						mit geringem Einkommen besteht die Möglichkeit, bei den
						Amtsgerichten Beratungshilfe zu beantragen. Bitte beantragen Sie vor
						der Beratung den Beratungshilfeschein beim zuständigen Amtsgericht
						und bringen Sie diesen zur Beratung mit. Nach der erfolgten Beratung
						können zusätzlich 15 Euro in Rechnung gestellt werden. <br></br>{" "}
						<br></br>Im Falle eines gerichtlichen Verfahrens können
						Mandant*innen mit geringem Einkommen Prozesskostenhilfe beantragen,
						durch die die Prozesskosten durch die Staatskasse erstattet werden.
					</Content1>
					<Content2>
						<Content2Title>Ablauf</Content2Title>
						Eine Erstberatung buchen Sie bitte unter dem Punkt „Online Termin
						buchen“. Wahlweise können Sie einen Termin auch per E-Mail oder über
						das Kontaktformular anfragen. In Ihrer Anfrage schildern Sie bitte
						Ihren Fall und Ihre Erwartungen. <br />
						<br /> Die erforderlichen Unterlagen schicken Sie mir bitte im
						Vorfeld sortiert als PDF- Datei zu, damit ich mich optimal auf Ihren
						Termin vorbereiten kann. Sofern Sie über keinen Scanner verfügen,
						nutzen Sie bitte eine Scan-App oder bringen die Unterlagen
						spätestens zum Beratungsgespräch mit.<br></br> <br></br>
						Im Beratungsgespräch gehen wir gemeinsam alle wichtigen Fragen durch
						und erörtern die konkreten Erfolgsaussichten anhand der vorliegenden
						Informationen und eingereichten Unterlagen. Sie werden über die
						rechtlichen Aspekte des Falles aufgeklärt und das weitere Vorgehen
						wird besprochen.<br></br>
						<br></br> Während der Erstberatung werden bei Bedarf auch die im
						Rahmen der weiteren Beauftragung entstehenden Kosten erörtert.{" "}
						<br></br> <br></br>Ich weise daraufhin, dass meine Kanzlei
						vollständig digital arbeitet. Diese unkomplizierte und direkte
						Kommunikation ermöglicht schnelle Reaktionsmöglichkeiten und kommt
						Ihnen als Mandant unmittelbar zugute. Aus diesem Grund darf ich Sie
						bitten, Unterlagen in sortierter PDF-Datei an meine E-Mail-Adresse
						zu übersenden. <br></br> <br></br>
					</Content2>
				</ContentWrapper>
			</SectionContent>
		</>
	);
}
const Content1Title = styled.h1``;
const Content2Title = styled.h1``;
const Content1 = styled.div`
	font-size: 15px;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
`;
const Content2 = styled.div`
	font-size: 15px;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	margin-bottom: 2.5rem;
`;
const ContentWrapper = styled.div`
	max-width: 800px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
`;

const SectionContent = styled.div`
	position: relative;
	width: 100%;
`;

const AblaufKostenTitle = styled.h1`
	width: 100%;
	background-color: darkgray;
	font-size: 1.7rem;
	line-height: 4;
	padding: 10px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	margin-top: 6rem;
	border-bottom: 1px solid black;
`;
