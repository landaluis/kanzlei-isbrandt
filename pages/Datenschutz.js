import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DatenschutzContent from "@/components/DatenschutzContent";

export default function Datenschutz({ handleClick, currentLanguage }) {
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<>
			{" "}
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<DatenschutzContent />
			<Footer currentLanguage={currentLanguage} />{" "}
		</>
	);
}
