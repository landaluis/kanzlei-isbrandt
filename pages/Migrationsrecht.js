import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MigrationsrechtContent from "@/components/MigrationsrechtContent";

export default function MigrationsrechtPage({ handleClick, currentLanguage }) {
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<MigrationsrechtContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
