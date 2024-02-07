import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AblaufKostenContent from "@/components/AblaufKostenContent";

export default function AblaufKostenPage({ handleClick, currentLanguage }) {
	ReactGA.pageview(window.location.pathname + window.location.search);

	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<AblaufKostenContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
