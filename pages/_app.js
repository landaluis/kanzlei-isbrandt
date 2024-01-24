import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState, useEffect } from "react";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
	const [currentLanguage, setCurrentLanguage] = useState("DE");

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedLanguage = localStorage.getItem("selectedLanguage") || "DE";
			setCurrentLanguage(storedLanguage);
		}
	}, []);

	const toggleLanguage = () => {
		const newLanguage = currentLanguage === "DE" ? "EN" : "DE";
		setCurrentLanguage(newLanguage);

		if (typeof window !== "undefined") {
			localStorage.setItem("selectedLanguage", newLanguage);
		}
	};

	return (
		<>
			<GlobalStyle />
			<Head>
				{/* <Script
					src={`https://cdn-cookieyes.com/client_data/bc513647b0838e740a208ad9/script.js`}
					strategy="beforeInteractive"></Script> */}
				<meta name="description" content=" " />
				<title>Kanzlei Isbrandt</title>
			</Head>

			<Component
				{...pageProps}
				handleClick={toggleLanguage}
				currentLanguage={currentLanguage}
			/>
		</>
	);
}
