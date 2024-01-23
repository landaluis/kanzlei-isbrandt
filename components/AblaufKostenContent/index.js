import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";

export default function AblaufKostenContent({ currentLanguage }) {
	return (
		<>
			<AblaufKostenTitle>
				{currentLanguage === "DE" ? "Ablauf und Kosten" : "Procedure and Cost"}
			</AblaufKostenTitle>
			<SectionContent>
				<ContentWrapper>
					<ContentBox>
						<Content2>
							<Content2Title>
								{currentLanguage === "DE" ? "Ablauf" : "Procedure"}
							</Content2Title>
							{currentLanguage === "DE"
								? "	Eine Erstberatung buchen Sie bitte unter dem Punkt &quot;Online Termin buchen&quot;. Wahlweise können Sie einen Termin auch per E-Mail oder über das Kontaktformular anfragen. In Ihrer Anfrage schildern Sie bitte Ihren Fall und Ihre Erwartungen."
								: "Please schedule an initial consultation under the &quot;Book Online Appointment&quot; section. Alternatively, you can also request an appointment via email or through the contact form. In your inquiry, kindly describe your case and expectations."}{" "}
							<br />
							<br />{" "}
							{currentLanguage === "DE"
								? "Die erforderlichen Unterlagen schicken Sie mir bitte im Vorfeld sortiert als PDF- Datei zu, damit ich mich optimal auf Ihren Termin vorbereiten kann. Sofern Sie über keinen Scanner verfügen, nutzen Sie bitte eine Scan-App oder bringen die Unterlagen spätestens zum Beratungsgespräch mit."
								: "Please send the necessary documents to me in advance, organized as a PDF file, so that I can adequately prepare for your appointment. If you do not have access to a scanner, please use a scanning app or bring the documents to the consultation at the latest."}{" "}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "	Im Beratungsgespräch gehen wir gemeinsam alle wichtigen Fragen durch und erörtern die konkreten Erfolgsaussichten anhand der vorliegenden Informationen und eingereichten Unterlagen. Sie werden über die rechtlichen Aspekte des Falles aufgeklärt und das weitere Vorgehen wird besprochen."
								: "During the consultation, we will go through all essential questions together and discuss the specific chances of success based on the provided information and submitted documents. You will be informed about the legal aspects of the case, and the next steps will be discussed."}
							<br></br>
							<br></br>{" "}
							{currentLanguage === "DE"
								? "Während der Erstberatung werden bei Bedarf auch die im Rahmen der weiteren Beauftragung entstehenden Kosten erörtert."
								: "If necessary, the costs associated with further engagement will also be discussed during the initial consultation."}{" "}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Ich weise daraufhin, dass meine Kanzlei vollständig digital arbeitet. Diese unkomplizierte und direkte Kommunikation ermöglicht schnelle Reaktionsmöglichkeiten und kommt Ihnen als Mandant unmittelbar zugute. Aus diesem Grund darf ich Sie bitten, Unterlagen in sortierter PDF-Datei an meine E-Mail-Adresse zu übersenden."
								: "I would like to emphasize that my law firm operates entirely digitally. This straightforward and direct communication enables quick response times, directly benefiting you as the client. For this reason, I kindly request you to send documents in an organized PDF file to my email address."}{" "}
							<br></br> <br></br>
						</Content2>
					</ContentBox>
					<ContentBox>
						<Content1>
							<Content1Title>
								{currentLanguage === "DE" ? "Kosten" : "Cost"}
							</Content1Title>
							{currentLanguage === "DE"
								? "Eine effektive Vertretung in migrationsrechtlichen sowie arbeitsrechtlichen Verfahren erfordert ein Vertrauensverhältnis zwischen Mandant*innen und Rechtsanwältin. Die Beauftragung einer Rechtsanwältin ist mit Kosten verbunden. Daher ist es mir wichtig, dass von Anfang an über die entstehenden Kosten und Gebühren transparent aufgeklärt wird."
								: "Effective representation in immigration and employment law proceedings requires a trustful relationship between the client and the attorney. Engaging an attorney naturally comes with costs. Therefore, it is important to me that you are transparently informed about the arising costs and fees right from the beginning."}
							<br></br>
							<br></br>
							{currentLanguage === "DE"
								? "Die Höhe der Kosten richtet sich insbesondere nach dem Umfang, der Schwierigkeit und der Instanz des Verfahrens."
								: "The amount of costs depends particularly on the scope, difficulty, and stage of the proceedings. "}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Die Abrechnung der Anwaltsgebühren kann entweder nach den gesetzlichen Gebühren (RVG) oder nach einer individuellen Honorarvereinbarung erfolgen. Eine solche Honorarvereinbarung kann entweder ein Stunden- oder Pauschalhonorar vorsehen. Das RVG hingegen sieht Pauschalsätze vor, die sich nach dem jeweiligen Streit- bzw. Gegenstandswert richten."
								: "Billing for attorney fees can either be based on statutory fees (RVG) or on an individual fee agreement. Such a fee agreement may stipulate either an hourly or flat fee. The RVG, on the other hand, provides for fixed rates that are based on the respective value in dispute or the subject matter."}
							<br></br>
							<br></br>{" "}
							{currentLanguage === "DE"
								? "Bei der Mandatsannahme ist ein Kostenvorschuss zu leisten, dessen Höhe wir individuell vereinbaren können. Nach Annahme des Mandats sind Ratenzahlungen möglich. Sprechen Sie mich diesbezüglich gerne bei Ihrer Kontaktanfrage an!"
								: "A cost advance is required upon accepting the mandate, the amount of which can be individually agreed upon. After accepting the mandate, installment payments are possible. Feel free to address this in your contact request (online booking or via email)."}{" "}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Für Mandanten mit geringem Einkommen besteht die Möglichkeit, bei den Amtsgerichten Beratungshilfe zu beantragen. Bitte beantragen Sie vor der Beratung den Beratungshilfeschein beim zuständigen Amtsgericht und bringen Sie diesen zur Beratung mit. Nach der erfolgten Beratung können zusätzlich 15 Euro in Rechnung gestellt werden. "
								: "For clients with low income, there is the option to apply for legal aid at the local courts. Please apply for the legal aid certificate from the relevant local court before the consultation and bring it with you. After the consultation, an additional fee of 15 euros may be charged."}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Im Falle eines gerichtlichen Verfahrens können Mandant*innen mit geringem Einkommen Prozesskostenhilfe beantragen, durch die die Prozesskosten durch die Staatskasse erstattet werden."
								: "In the case of legal proceedings, clients with low income can apply for legal aid, through which the litigation costs are reimbursed by the state treasury."}
						</Content1>
					</ContentBox>
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
		</>
	);
}
const ContentBox = styled.div`
	padding: 2rem;
	border-radius: 10px;
	background-color: rgba(26, 77, 97, 0.2);
	margin-bottom: 4rem;
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 0rem;
	left: 49rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
`;
const Content1Title = styled.h1`
	color: #1a4d61;
	font-size: 2.5rem;
	margin-top: 0;
`;
const Content2Title = styled.h1`
	color: #1a4d61;
	font-size: 2.5rem;
`;
const Content1 = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
`;
const Content2 = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	margin-bottom: 0rem;
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
	font-size: 3rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 9rem;
	margin-bottom: 2rem;
`;
