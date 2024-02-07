import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpressumContent from "@/components/ImpressumContent";
import { useEffect } from "react";

export default function Impressum({ handleClick, currentLanguage }) {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<>
			{" "}
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<ImpressumContent />
			<Footer currentLanguage={currentLanguage} />{" "}
		</>
	);
}
