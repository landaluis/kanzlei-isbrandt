import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DatenschutzContent from "@/components/DatenschutzContent";

export default function Datenschutz({ handleClick, currentLanguage }) {
	return (
		<>
			{" "}
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<DatenschutzContent />
			<Footer currentLanguage={currentLanguage} />{" "}
		</>
	);
}
