import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";

export default function Home({ handleClick, currentLanguage }) {
	return (
		<main>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<HomeContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</main>
	);
}
