import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState, useEffect } from "react";

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
				<meta name="description" content=" " />
				<title>Kanzlei Isbrandt</title>
				<script
					id="cookieyes"
					type="text/javascript"
					src="https://cdn-cookieyes.com/client_data/bc513647b0838e740a208ad9/script.js"></script>
			</Head>

			<Component
				{...pageProps}
				handleClick={toggleLanguage}
				currentLanguage={currentLanguage}
			/>
		</>
	);
}
