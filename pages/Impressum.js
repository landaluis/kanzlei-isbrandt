import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import ImpressumContent from "@/components/ImpressumContent";

export default function Impressum({ handleClick, currentLanguage }) {
	return (
		<>
			{" "}
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<ImpressumContent />
			<Footer currentLanguage={currentLanguage} />{" "}
		</>
	);
}
