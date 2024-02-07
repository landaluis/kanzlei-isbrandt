import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MigrationsrechtContent from "@/components/MigrationsrechtContent";
import { useEffect } from "react";

export default function MigrationsrechtPage({ handleClick, currentLanguage }) {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<MigrationsrechtContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
