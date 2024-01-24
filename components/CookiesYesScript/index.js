import Script from "next/script";

const CookiesYesScript = () => (
	<Script
		id="cookieyes"
		type="text/javascript"
		src="https://cdn-cookieyes.com/client_data/bc513647b0838e740a208ad9/script.js"
		strategy="lazyOnload"
	/>
);

export default CookiesYesScript;
