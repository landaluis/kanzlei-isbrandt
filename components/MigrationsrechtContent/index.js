import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";

export default function MigrationsrechtContent() {
	return (
		<>
			{" "}
			<ContentBox>
				<MigrationsrechtTitle>Migrationsrecht</MigrationsrechtTitle>
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
							{/* <Content1Title>Migrationsrecht</Content1Title> */}
							Das Migrationsrecht ist wie kaum ein anderes Rechtsgebiet stark
							von der aktuellen politischen Stimmung geprägt und unterliegt
							ständigen Veränderungen. In den letzten Jahren haben zahlreiche
							Gesetzesänderungen zu einer Einschränkung grundlegender
							Verfahrensrechte von Schutzsuchenden geführt. Daher erfordert die
							Arbeit in diesem Bereich eine fortwährende Auseinandersetzung mit
							der Frage, wie durch anwaltliches Engagement Verfahrensrechte
							erneut gewonnen werden können.
							<br />
							<br />
							Ich begleite Sie als Rechtsanwältin durch das gesamte
							Asylverfahren.
							<br />
							<br />
							Im allgemeinen Aufenthaltsrecht vertrete ich Sie in allen Fällen
							des Erwerbs, des Erhalts oder des Verlusts von Aufenthaltsrechten.
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
