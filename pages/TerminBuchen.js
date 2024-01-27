import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TerminBuchenContent from "@/components/TerminBuchenContent";

export default function TerminBuchenPage({ handleClick, currentLanguage }) {
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<TerminBuchenContent currentLanguage={currentLanguage} />

			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
