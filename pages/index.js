import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import Head from "next/head";
import dynamic from "next/dynamic";

// Load the CookieYes script dynamically
const CookiesYesScript = dynamic(
	() => import("@/components/CookiesYesScript"),
	{
		ssr: false, // This ensures the script is not included during server-side rendering
	}
);

export default function Home({ handleClick, currentLanguage }) {
	return (
		<main>
			<Head>
				{/* Add the CookieYes script here */}
				<CookiesYesScript />
			</Head>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />

			<HomeContent currentLanguage={currentLanguage} />

			<Footer currentLanguage={currentLanguage} />
		</main>
	);
}
