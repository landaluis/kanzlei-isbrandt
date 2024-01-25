import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";

export default function ArbeitsrechtContent({ currentLanguage }) {
	return (
		<>
			<ContentBox>
				<ArbeitsrechtTitle>
					{" "}
					{currentLanguage === "DE" ? "Arbeitsrecht" : "Employment Law "}
				</ArbeitsrechtTitle>
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
								? "Das Arbeitsrecht ist für beinahe alle in Deutschland lebenden Menschen von erheblicher Bedeutung. Einerseits nimmt Erwerbsarbeit in der Regel einen großen Teil des Alltags der Menschen ein, andererseits hängt von einem Arbeitsplatz häufig die wirtschaftliche Existenz ab. Für dieses besonders wichtige Feld hat der Gesetzgeber eine Vielzahl gesetzlicher Regelungen getroffen, die sowohl das tägliche Arbeitsleben als auch Extremsituationen regeln. Bei der Fülle an Informationen und Regelungen ist eine Beratung in vielen Rechtsfragen oft unumgänglich."
								: "Employment Law Employment law is of significant importance for almost all individuals living in Germany. On the one hand, gainful employment usually constitutes a substantial part of people's daily lives, and on the other hand, an individual's economic existence is often dependent on having a job. For this particularly crucial field, the legislator has established a multitude of legal regulations that govern both everyday working life and extreme situations. Given the abundance of information and regulations, seeking advice is often unavoidable in many legal matters. "}
							<br />
							<br />
							{currentLanguage === "DE"
								? "Im Bereich des Arbeitsrechts berate und vertrete ich Arbeitnehmer*innen vor Gericht (bspw. in Rahmen einer Kündigungsschutzklage) sowie in außergerichtlichen Verhandlungen mit der*die Arbeitgeber*in. "
								: "In the field of employment law, I provide advice and representation to employees in court (for example, in the context of an unfair dismissal lawsuit) as well as in out-of-court negotiations with employers."}
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
	padding: 1rem;
	border-radius: 10px;
	background-color: rgba(26, 77, 97, 0.2);
	margin: 9rem 10rem 2rem;
	overflow: hidden;
	position: relative;

	@media (max-width: 1024px) {
		margin: 11rem 7rem 2rem;
	}

	@media (max-width: 900px) {
		margin: 11rem 5rem 2rem;
	}

	@media (max-width: 700px) {
		margin: 11rem 3rem 2rem;
	}
	@media (max-width: 500px) {
		margin: 11rem 2rem 2rem;
	}
	@media (max-width: 321px) {
		margin: 9rem 1rem 2rem;
	}
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 3rem;
	left: 30rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;

	@media (max-width: 1024px) {
		top: 1rem;
		left: 27rem;
	}

	@media (max-width: 900px) {
		top: 1rem;
		left: 20rem;
	}
	@media (max-width: 700px) {
		top: 1rem;
		left: 19rem;
	}

	@media (max-width: 650px) {
		top: 1rem;
		left: 10rem;
	}

	@media (max-width: 650px) {
		top: 1rem;
		left: 8rem;
	}
	@media (max-width: 320px) {
		left: 3rem;
	}
`;

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
	font-family: "FiraSans-Regular";
`;

const SectionContent = styled.div`
	position: relative;
	width: 100%;
`;

const ArbeitsrechtTitle = styled.h1`
	font-size: 2.5rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 0rem;
	margin-bottom: 0;

	@media (max-width: 321px) {
		font-size: 2rem;
	}
`;
