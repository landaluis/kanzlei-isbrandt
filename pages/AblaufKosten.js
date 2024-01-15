import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

export default function AblaufKostenPage() {
	return (
		<>
			<Header />

			<AblaufKostenTitle>Ablauf & Kosten</AblaufKostenTitle>
			<SectionContent>
				<ContentWrapper>
					<Content>
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
					</Content>
				</ContentWrapper>
			</SectionContent>

			<Footer />
		</>
	);
}

const Content = styled.div`
	font-size: 15px;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
`;

const ContentWrapper = styled.div`
	max-width: 800px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
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
