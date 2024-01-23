import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";

export default function MigrationsrechtContent({ currentLanguage }) {
	return (
		<>
			{" "}
			<ContentBox>
				<MigrationsrechtTitle>
					{" "}
					{currentLanguage === "DE" ? "Migrationsrecht" : "Immigration Law"}
				</MigrationsrechtTitle>
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
				<SectionContent>
					<ContentWrapper>
						<Content1>
							{currentLanguage === "DE"
								? "Das Migrationsrecht ist wie kaum ein anderes Rechtsgebiet stark von der aktuellen politischen Stimmung geprägt und unterliegt ständigen Veränderungen. In den letzten Jahren haben zahlreiche Gesetzesänderungen zu einer Einschränkung grundlegender Verfahrensrechte von Schutzsuchenden geführt. Daher erfordert die Arbeit in diesem Bereich eine fortwährende Auseinandersetzung mit der Frage, wie durch anwaltliches Engagement Verfahrensrechte erneut gewonnen werden können."
								: "Immigration law, more than almost any other legal field, is heavily influenced by the current political climate and is subject to constant changes. In recent years, numerous legislative amendments have led to a restriction of fundamental procedural rights for those seeking protection. Therefore, working in this area requires a continual engagement with the question of how procedural rights can be regained through legal advocacy."}
							<br />
							<br />
							{currentLanguage === "DE"
								? "	Ich begleite Sie als Rechtsanwältin durch das gesamte Asylverfahren."
								: "As an attorney, I guide you through the entire asylum process. "}
							<br />
							<br />
							{currentLanguage === "DE"
								? "Im allgemeinen Aufenthaltsrecht vertrete ich Sie in allen Fällen des Erwerbs, des Erhalts oder des Verlusts von Aufenthaltsrechten."
								: "In general residence law, I represent you in all cases involving the acquisition, retention, or loss of residency rights."}
							<br />
							<br />
							{currentLanguage === "DE"
								? "	Zudem befasse ich mich auch mit der Frage der Verfestigung des Aufenthaltsstatus. Dies betrifft insbesondere die Erteilung einer Niederlassungserlaubnis (einen zeitlich unbefristeten Aufenthaltstitel) oder die Erlangung der deutschen Staatsangehörigkeit."
								: "Additionally, I address the issue of solidifying residency status, particularly concerning the issuance of a settlement permit (an unlimited residence permit) or the acquisition of German citizenship."}

							<br />
							<br />
						</Content1>
					</ContentWrapper>
				</SectionContent>
			</ContentBox>
		</>
	);
}
const ContentBox = styled.div`
	// border: 1px solid;
	// color: #1a4d61;
	padding: 1rem;
	border-radius: 10px;
	background-color: rgba(26, 77, 97, 0.2);
	// margin-bottom: 1rem;
	// margin-top: 7rem;
	margin: 9rem 10rem 2rem;
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 8rem;
	left: 52rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
`;
// const Content1Title = styled.h1`
// 	color: #1a4d61;
// 	font-size: 2.5rem;
// `;

const Content1 = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	text-align: justify;
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

const SectionContent = styled.div`
	position: relative;
	width: 100%;
`;

const MigrationsrechtTitle = styled.h1`
	font-size: 2.5rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 0rem;
`;
