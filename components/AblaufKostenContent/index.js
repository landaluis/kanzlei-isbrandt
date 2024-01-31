import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.webp";

export default function AblaufKostenContent({ currentLanguage }) {
	return (
		<>
			<SectionContent>
				<AblaufKostenTitle>
					{currentLanguage === "DE"
						? "Ablauf und Kosten"
						: "Procedure and Cost"}
				</AblaufKostenTitle>
				<ContentWrapper>
					<ContentBox>
						<Content2>
							<Content2Title>
								{currentLanguage === "DE" ? "Ablauf" : "Procedure"}
							</Content2Title>
							{currentLanguage === "DE"
								? "Eine Erstberatung buchen Sie bitte unter dem Punkt 'Online Termin buchen'. Wahlweise können Sie einen Termin auch per E-Mail anfragen. In Ihrer Anfrage schildern Sie bitte ausführlich Ihren Fall und fügen die erforderlichen Unterlagen als PDF- Datei bei.	"
								: "To schedule an initial consultation, please use the 'Book Online Appointment' section. Alternatively, you can request an appointment via email or through the contact form. In your inquiry, please provide a detailed description of your case and attach the necessary documents in PDF format."}{" "}
							<br />
							<br />{" "}
							{currentLanguage === "DE"
								? "Die erforderlichen Unterlagen sind spätestens zur Erstberatung mitzubringen, da mir ansonsten eine umfassende Beratung nicht möglich ist."
								: "The required documents must be brought at the latest to the initial consultation, as otherwise, comprehensive advice may not be possible."}{" "}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Während des Beratungsgesprächs werden Ihre Fragen erörtert. Zusammen besprechen wir die konkreten Erfolgsaussichten anhand der vorliegenden Informationen und eingereichten Unterlagen sowie das weitere Vorgehen. Zusätzlich werden die im Rahmen der weiteren Beauftragung entstehenden Kosten erörtert."
								: "During the consultation, we will discuss your questions. Together, we will review the specific prospects of success based on the information and documents provided, as well as discuss the next steps. Additionally, the costs associated with further engagement will be discussed."}
							<br></br>
							<br></br>{" "}
							{currentLanguage === "DE"
								? "Nach erfolgter Erstberatung können Sie mich für die Durchsetzung Ihrer Rechte beauftragen. Sollte keine Beauftragung erfolgen, beispielsweise weil die Erstberatung schon zu einem zufriedenstellenden Ergebnis führte, sind selbstverständlich die Kosten der Erstberatung von Ihnen zu tragen. "
								: "After the initial consultation, you can commission me to enforce your rights. If no engagement takes place, for example, because the initial consultation already led to a satisfactory result, the costs of the initial consultation are naturally your responsibility."}{" "}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Ich möchte zusätzlich darauf hinweisen, dass meine Kanzlei vollständig digital arbeitet. Aufgrund dessen darf ich Sie bitten, mir Ihre Unterlagen vollständig und in sortierter Form als PDF- Datei zu übersenden. Scan-Apps für Smartphones sind kostenfrei downloadbar. Die digitale Übersendung Ihrer Unterlagen hat für Sie den Vorteil, dass ich hierauf schnell reagieren kann und kommt Ihnen daher auch unmittelbar zugute. "
								: "I would like to emphasize that my law firm operates entirely digitally. Therefore, I kindly ask you to send me your documents in a complete and organized manner as a PDF file. Scan apps for smartphones are available for free download. The digital submission of your documents has the advantage that I can respond quickly, which is immediately beneficial to you."}{" "}
							<br></br> <br></br>
						</Content2>
					</ContentBox>
					<ContentBox>
						<Content1>
							<Content1Title>
								{currentLanguage === "DE" ? "Kosten" : "Cost"}
							</Content1Title>
							{currentLanguage === "DE"
								? "Die rechtliche Vertretung erfordert ein Vertrauensverhältnis zwischen Mandant*innen und Rechtsanwältin. Dieses Vertrauensverhältnis betrifft auch die Vergütung der in Anspruch genommenen Dienstleistung. Die Beauftragung einer Rechtsanwältin ist selbstverständlich mit Kosten verbunden. Da Mandanten, die erstmalig eine Rechtsberatung in Anspruch nehmen, oftmals über die Kosten verunsichert sind, möchte ich nachfolgend über die entstehenden Kosten und Gebühren aufklären."
								: "Legal representation requires a relationship of trust between clients and the attorney. This trust extends to the compensation for the services provided. Engaging an attorney naturally involves costs. As clients seeking legal advice for the first time may often be uncertain about the expenses involved, I would like to provide information on the incurred costs and fees below."}
							<br></br>
							<br></br>
							{currentLanguage === "DE"
								? "Die erste Kontaktaufnahme per E-Mail, Online-Formular bzw. Telefon ist natürlich kostenlos. Die Erstberatung hingegen ist mit Kosten verbunden. Bezüglich der Höhe der Kosten kann im Vorfeld eine gesonderte Vereinbarung getroffen werden."
								: "The initial contact via email, contact form, or telephone is, of course, free of charge. However, the initial consultation incurs costs. Regarding the amount of the costs, a separate agreement can be made in advance."}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Nach erfolgter Erstberatung und Mandatsannahme ist ein Kostenvorschuss zu leisten, dessen Höhe wir individuell vereinbaren können. Nach Annahme des Mandats sind Ratenzahlungen möglich. Sprechen Sie mich diesbezüglich gerne in Ihrer Kontaktanfrage an!"
								: "Upon acceptance of the mandate after the initial consultation, an advance payment is required, the amount of which can be individually agreed upon. After accepting the mandate, installment payments are possible. Feel free to address this in your contact inquiry!"}
							<br></br>
							<br></br>{" "}
							{currentLanguage === "DE"
								? "Die Höhe der Kosten des übernommenen Verfahrens richtet sich insbesondere nach dem Umfang, der Schwierigkeit und der Instanz des Verfahrens. Die Abrechnung der Anwaltsgebühren kann entweder nach den gesetzlichen Gebühren (RVG) oder nach einer individuellen Honorarvereinbarung erfolgen. Eine solche Honorarvereinbarung kann entweder ein Stunden- oder Pauschalhonorar vorsehen. Das RVG hingegen sieht Pauschalsätze vor, die sich nach dem jeweiligen Streit- bzw. Gegenstandswert richten."
								: "The amount of costs for the undertaken proceedings depends particularly on the scope, complexity, and instance of the case. Attorney fees can be billed either according to statutory fees (RVG) or through an individual fee arrangement. Such a fee arrangement can provide for either hourly or flat-rate fees. The RVG, on the other hand, specifies lump-sum rates based on the respective dispute or object value."}{" "}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Für Mandanten mit geringem Einkommen besteht die Möglichkeit, bei den Amtsgerichten Beratungshilfe zu beantragen. Bitte beantragen Sie vor der Beratung den Beratungshilfeschein beim zuständigen Amtsgericht und bringen Sie diesen zur Beratung mit. Nach der erfolgten Beratung können zusätzlich 15 Euro in Rechnung gestellt werden."
								: "Clients with low income have the option to apply for legal aid at the district courts. Please apply for the legal aid certificate from the relevant district court before the consultation and bring it with you. After the consultation, an additional fee of 15 euros can be charged."}
							<br></br> <br></br>
							{currentLanguage === "DE"
								? "Im Falle eines gerichtlichen Verfahrens können Mandant*innen mit geringem Einkommen Prozesskostenhilfe beantragen, durch die die Prozesskosten durch die Staatskasse erstattet werden."
								: "In the case of a judicial proceeding, clients with low income can apply for legal aid, whereby the court costs are reimbursed by the state treasury."}
							<br></br> <br></br>
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
	border-radius: 10px;
	text-align: justify;

	@media (max-width: 425px) {
		text-align: left;
	}
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 8rem;
	left: 40rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;

	@media (max-width: 1350px) {
		top: 6rem;
		left: 35rem;
	}

	@media (max-width: 1200px) {
		left: 30rem;
	}
	@media (max-width: 1100px) {
		left: 25rem;
	}

	@media (max-width: 900px) {
		left: 20rem;
	}

	@media (max-width: 850px) {
		left: 17rem;
		top: 7rem;
	}
	@media (max-width: 750px) {
		left: 15rem;
	}

	@media (max-width: 650px) {
		left: 8rem;
		top: 8rem;
	}
	@media (max-width: 500px) {
		left: 7rem;
	}

	@media (max-width: 425px) {
		height: 20rem;
		width: auto;
		left: 7rem;
		top: 15rem;
	}
	@media (max-width: 320px) {
		left: 3rem;
	}
`;
const Content1Title = styled.h1`
	color: #1a4d61;
	font-size: 2.5rem;
	margin-top: 0;
	font-family: "Ruluko-Regular";
`;
const Content2Title = styled.h1`
	color: #1a4d61;
	font-size: 2.5rem;
	font-family: "Ruluko-Regular";
`;
const Content1 = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	font-family: "FiraSans-Regular";
`;
const Content2 = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	margin-bottom: 0rem;
	font-family: "FiraSans-Regular";
`;
const ContentWrapper = styled.div`
	max-width: 800px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;

	@media (max-width: 321px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;

const SectionContent = styled.div`
	position: relative;

	overflow: hidden;
	margin: 6rem 7rem 2rem;

	@media (max-width: 1000px) {
		margin: 10rem 7rem 2rem;
	}

	@media (max-width: 900px) {
		margin: 9rem 6rem 2rem;
	}

	@media (max-width: 650px) {
		margin: 9rem 4rem 2rem;
	}
	@media (max-width: 500px) {
		margin: 9rem 1rem 2rem;
	}
	@media (max-width: 375px) {
		margin: 9rem 1rem 2rem;
	}
`;

const AblaufKostenTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;
