import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";

export default function ArbeitsrechtContent() {
	return (
		<>
			<ArbeitsrechtTitle>Arbeitsrecht</ArbeitsrechtTitle>
			<SectionContent>
				<ContentWrapper>
					<Content1>
						{/* <Content1Title>Arbeitsrecht</Content1Title> */}
						Das Arbeitsrecht ist für beinahe alle in Deutschland lebenden
						Menschen von erheblicher Bedeutung. Einerseits nimmt Erwerbsarbeit
						in der Regel einen erheblichen Teil des Alltags der Menschen ein,
						andererseits hängt von einem Arbeitsplatz häufig die wirtschaftliche
						Existenz ab. Für dieses besonders wichtige Feld hat der Gesetzgeber
						eine Vielzahl gesetzlicher Regelungen getroffen, die sowohl das
						tägliche Arbeitsleben als auch Extremsituationen regeln. Bei der
						Fülle an Informationen und Regelungen ist eine Beratung in vielen
						Rechtsfragen oft unumgänglich.
						<br />
						<br />
						Im Bereich des Arbeitsrechts berate und vertrete ich
						Arbeitnehmer*innen vor Gericht (bspw. in Rahmen einer
						Kündigungsschutzklage) sowie in außergerichtlichen Verhandlungen mit
						der*die Arbeitgeber*in. <br />
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
	top: -7rem;
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

const ArbeitsrechtTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 9rem;
	margin-bottom: 0;
`;
