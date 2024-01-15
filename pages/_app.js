import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Kanzlei Isbrandt</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
