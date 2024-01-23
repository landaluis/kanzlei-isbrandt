import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontaktContent from "@/components/KontaktContent";

export default function KontaktPage({ handleClick, currentLanguage }) {
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<KontaktContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
