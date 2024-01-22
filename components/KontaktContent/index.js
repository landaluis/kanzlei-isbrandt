import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";
import Map from "../../public/Map.png";

export default function KontaktContent() {
	return (
		<>
			{" "}
			<KontaktContainer>
				<KontakTitle>Kontakt</KontakTitle>
				<Row>
					<KontaktMap>
						<Section1>
							<Image
								src={Map}
								alt="KI Logo"
								style={{
									height: "100%",
									width: "100%",
								}}
							/>
						</Section1>
						<Section2>
							<p>Bürogemeinschaft Friedrichstraße</p>
							<p>
								Kanzlei Isbrandt
								<br />
								Friedrichstraße 24
								<br />
								33615 Bielefeld{" "}
							</p>
							<p>
								E-Mail: info@kanzlei-isbrandt.de <br />
								Tel: <br />
								Fax:{" "}
							</p>
						</Section2>
					</KontaktMap>

					<RightSide>
						<Directions>
							<TitleH2>Bürogemeinschaft Friedrichstraße</TitleH2>
							<TitleH3>Anreise mit dem Auto </TitleH3>
							<p>
								Wenn Sie mit dem Auto anreisen, empfehle ich genügend Zeit für
								die Suche eines Parkplatzes einzuplanen. Alternativ können Sie
								auch die Parkhäuser am Hauptbahnhof oder Zentrum nutzen. Diese
								sind wenige Gehminuten von der Kanzlei entfernt.{" "}
							</p>
							<TitleH3>Anreise mit Bus und Bahn</TitleH3>

							<p>
								Vom Hauptbahnhof gelangen Sie mit der Stadtbahn der Linie 4
								(Richtung Universität) zur Haltestelle Siegfriedplatz. Von dort
								aus sind es weniger als 150 m bis zur Kanzlei.
							</p>
							<TitleH3>Barrierefreiheit</TitleH3>

							<p>
								Meine Kanzlei befindet sich im ersten Stock und ist über eine
								Treppe zugänglich. Ein Aufzug steht leider nicht zur Verfügung.
								Falls Sie auf eine barrierearme Umgebung angewiesen sind, bitte
								ich Sie, dies bereits in Ihrer Kontaktanfrage anzugeben. Es
								besteht selbstverständlich die Möglichkeit, dass unser
								Beratungsgespräch an einem barrierearmen Ort stattfindet. In
								diesem Fall werde ich mich um alle weiteren organisatorischen
								Details kümmern.
							</p>
						</Directions>
						<Offnung>
							<TitleH3>Öffnungszeiten</TitleH3>
							<TimeContainer1>
								<Day>Montag &ndash; Donnerstag</Day>
								<Hour>08:30 &ndash; 17:30 Uhr</Hour>
							</TimeContainer1>
							<TimeContainer2>
								<Day>Freitags</Day>
								<Hour>08:30 &ndash; 13:00 Uhr</Hour>
							</TimeContainer2>

							<h3>Termine nur nach Vereinbarung!</h3>
						</Offnung>
					</RightSide>
				</Row>

				<ImageContainer>
					<Image
						src={Watermark}
						alt="KI Logo"
						style={{
							height: "auto",
							width: "20rem",
						}}
					/>
				</ImageContainer>
			</KontaktContainer>
		</>
	);
}
const TimeContainer1 = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto; /* Adjust the width as needed */
	flex-direction: row;
	margin-bottom: 1rem;
`;
const TimeContainer2 = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto; /* Adjust the width as needed */
	flex-direction: row;
`;

const Day = styled.p`
	display: flex;
	text-align: left;
	margin: 0; /* Remove default margin */
`;

const Hour = styled.p`
	display: flex;
	text-align: right;
	margin: 0; /* Remove default margin */
`;
const TitleH2 = styled.h2`
	color: #1a4d61;
`;
const TitleH3 = styled.h3`
	color: #1a4d61;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
`;
const Directions = styled.div``;
const Offnung = styled.div``;
const RightSide = styled.div`
	color: #111827;
	margin-left: 5rem;
	line-height: 1.5;
`;

const Section1 = styled.div`
	width: 20rem;
	padding: none;
`;
const Section2 = styled.div`
	padding: 1rem 2rem 1rem;
`;

const KontaktMap = styled.div`
	color: #111827;
	// justify-content: space-between;
	// padding: 2rem;
	flex-direction: column;
	display: flex;
	position: relative;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
	width: 20rem;
	height: 29rem;
	margin-top: 3rem;
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 10rem;
	left: 55rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
`;

const KontaktContainer = styled.div`
	padding-top: 130px;
	color: #7a8387;

	// width: 100%;
	padding: 8rem 15rem 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;

	color: #7a8387;
`;

const KontakTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	margin-bottom: 1rem;
`;
