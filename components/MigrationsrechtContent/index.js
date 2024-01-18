import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";

export default function MigrationsrechtContent() {
	return (
		<>
			<MigrationsrechtTitle>Migrationsrecht</MigrationsrechtTitle>
			<SectionContent>
				<ContentWrapper>
					<Content1>
						{/* <Content1Title>Migrationsrecht</Content1Title> */}
						Das Migrationsrecht ist wie kaum ein anderes Rechtsgebiet stark von
						der aktuellen politischen Stimmung geprägt und unterliegt ständigen
						Veränderungen. In den letzten Jahren haben zahlreiche
						Gesetzesänderungen zu einer Einschränkung grundlegender
						Verfahrensrechte von Schutzsuchenden geführt. Daher erfordert die
						Arbeit in diesem Bereich eine fortwährende Auseinandersetzung mit
						der Frage, wie durch anwaltliches Engagement Verfahrensrechte erneut
						gewonnen werden können.
						<br />
						<br />
						Ich begleite Sie als Rechtsanwältin durch das gesamte Asylverfahren.
						<br />
						<br />
						Im allgemeinen Aufenthaltsrecht vertrete ich Sie in allen Fällen des
						Erwerbs, des Erhalts oder des Verlusts von Aufenthaltsrechten.
						<br />
						<br />
						Zudem befasse ich mich auch mit der Frage der Verfestigung des
						Aufenthaltsstatus. Dies betrifft insbesondere die Erteilung einer
						Niederlassungserlaubnis (einen zeitlich unbefristeten
						Aufenthaltstitel) oder die Erlangung der deutschen
						Staatsangehörigkeit.
						<br />
						<br />
					</Content1>
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
`;

const Content1 = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
`;

const ContentWrapper = styled.div`
	max-width: 800px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;
`;

const SectionContent = styled.div`
	position: relative;
	width: 100%;
`;

const MigrationsrechtTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 9rem;
	margin-bottom: 0;
`;
