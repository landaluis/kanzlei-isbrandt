import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

export default function TerminBuchenPage() {
	return (
		<>
			<Header />
			<TerminTitle> Termin Buchen Page</TerminTitle>
			<Footer></Footer>
		</>
	);
}

const TerminTitle = styled.h1`
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
