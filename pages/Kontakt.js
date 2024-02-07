import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontaktContent from "@/components/KontaktContent";
import { useEffect } from "react";

export default function KontaktPage({ handleClick, currentLanguage }) {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<KontaktContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
