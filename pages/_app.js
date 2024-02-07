import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState, useEffect } from "react";
import Script from "next/script";
import ReactGA from "react-ga";
ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);

export default function App({ Component, pageProps }) {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

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
				<meta
					name="description"
					content="Rechtsanwältin für Migrationsrecht und Arbeitsrecht in Bielefeld."
				/>
				<title>Kanzlei Isbrandt</title>
			</Head>

			{/* Google Analytics Script */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="scriptGA1" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
			</Script>

			<Script
				id="cookieyes"
				type="text/javascript"
				src={`https://cdn-cookieyes.com/client_data/bc513647b0838e740a208ad9/script.js`}
				strategy="beforeInteractive"></Script>

			<Component
				{...pageProps}
				handleClick={toggleLanguage}
				currentLanguage={currentLanguage}
			/>
		</>
	);
}
