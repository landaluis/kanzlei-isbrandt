import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

export default function RechtsgebietePage() {
	return (
		<>
			<Header />
			<EmptyDiv> Rechtsgebiete Page</EmptyDiv>
			<Footer />
		</>
	);
}

const EmptyDiv = styled.div`
	height: 500px;
`;
