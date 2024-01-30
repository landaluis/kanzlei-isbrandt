import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Watermark from "../../public/Watermark.webp";

export default function DatenschutzContent() {
	return (
		<>
			<DatenContainer>
				<DatenTitle>Datenschutzerklärung</DatenTitle>
				<ImageContainer>
					<Image
						src={Watermark}
						alt="KI Logo"
						style={{
							height: "100%",
							width: "auto",
						}}
					/>
				</ImageContainer>
				<Content>
					<p> Allgemeiner Hinweis und Pflichtinformationen </p>
					<p>
						Die verantwortliche Stelle für die Datenverarbeitung auf dieser
						Website ist:
					</p>
					<p>
						Kanzlei Isbrandt
						<br />
						Christina Isbrandt
						<br />
						Friedrichstraße 24
						<br />
						33615 Bielefeld
					</p>
					<p>
						Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
						anderen über die Zwecke und Mittel der Verarbeitung von
						personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
					</p>
					<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
					<p>
						Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
						Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
						Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
						formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
						Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
					</p>
					<h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
					<p>
						Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
						Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
						zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher
						Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem
						sich der Sitz unseres Unternehmens befindet. Der folgende Link
						stellt eine Liste der Datenschutzbeauftragten sowie deren
						Kontaktdaten bereit:&nbsp;
						<StyledLink href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.">
							https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
						</StyledLink>
					</p>
					<h3>Recht auf Datenübertragbarkeit</h3>
					<p>
						Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
						Einwilligung oder in Erfüllung eines Vertrags automatisiert
						verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
						Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
						die direkte Übertragung der Daten an einen anderen Verantwortlichen
						verlangen, erfolgt dies nur, soweit es technisch machbar ist.
					</p>
					<h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
					<p>
						Sie haben jederzeit im Rahmen der geltenden gesetzlichen
						Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
						gespeicherten personenbezogenen Daten, Herkunft der Daten, deren
						Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
						Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und
						auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie
						sich jederzeit über die im Impressum aufgeführten
						Kontaktmöglichkeiten an uns wenden.
					</p>
					<h3>SSL- bzw. TLS-Verschlüsselung</h3>
					<p>
						Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
						Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
						Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
						über diese Website übermitteln, für Dritte nicht mitlesbar. Sie
						erkennen eine verschlüsselte Verbindung an der 'https://'
						Adresszeile Ihres Browsers und am Schloss-Symbol in der
						Browserzeile.
					</p>
					<h3>Server-Log-Dateien</h3>
					<p>
						In Server-Log-Dateien erhebt und speichert der Provider der Website
						automatisch Informationen, die Ihr Browser automatisch an uns
						übermittelt. Dies sind:
					</p>
					<ul>
						<li> Besuchte Seite auf unserer Domain</li>
						<li> Datum und Uhrzeit der Serveranfrage</li>
						<li>Browsertyp und Browserversion</li>
						<li> Verwendetes Betriebssystem</li>
						<li> Referrer URL</li>
						<li> Hostname des zugreifenden Rechners</li>
						<li> IP-Adresse</li>
					</ul>
					<p>Wir verarbeiten die vorgenannten Daten zu folgenden Zwecken:</p>
					<ul>
						<li>
							Gewährleistung eines reibungslosen Verbindungsaufbaus der
							Webseite,
						</li>
						<li>Gewährleistung einer komfortablen Nutzung unserer Webseite,</li>
						<li>Auswertung der Systemsicherheit und -stabilität sowie </li>
						<li> Zu weiteren administrativen Zwecken.</li>
					</ul>
					<p>
						Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1
						lit. f DSGVO. Unser berechtigtes Interesse an der vorbezeichneten
						Datenverarbeitung ergibt sich dabei aus den aufgelisteten Zwecken
						zur Datenerhebung. Wir verwenden die von uns erhobenen Daten nicht,
						um Rückschlüsse auf Ihre Person zu ziehen.
					</p>
					<h3>Cookies</h3>
					<p>
						Unsere Website verwendet Cookies. Das sind kleine Textdateien, die
						Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns
						dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu
						machen.
					</p>
					<p>
						Einige Cookies sind 'Session-Cookies'. Solche Cookies werden nach
						Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben
						andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst
						löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer
						Website wiederzuerkennen.
					</p>
					<p>
						Mit einem modernen Webbrowser können Sie das Setzen von Cookies
						überwachen, einschränken oder unterbinden. Viele Webbrowser lassen
						sich so konfigurieren, dass Cookies mit dem Schließen des Programms
						von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine
						eingeschränkte Funktionalität unserer Website zur Folge haben.
					</p>
					<p>
						Das Setzen von Cookies, die zur Ausübung elektronischer
						Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen
						erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf
						Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser
						Website haben wir ein berechtigtes Interesse an der Speicherung von
						Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung
						unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für
						Analyse-Funktionen) erfolgt, werden diese in dieser
						Datenschutzerklärung separat behandelt.
					</p>
					<h3>CookieYes</h3>
					<p>
						Diese Website verwendet das Cookie-Einwilligungs-Tool 'CookieYes',
						das von Mozilor Limited (nachfolgend 'CookieYes') bereitgestellt
						wird, um gültige Einwilligungen der Nutzer für Cookies und
						Cookie-basierte Anwendungen zu erhalten. Durch die Einbindung eines
						entsprechenden JavaScript-Codes wird den Nutzern beim Aufruf einer
						Seite ein Banner angezeigt, in dem durch Auswählen des
						entsprechenden Kästchens die Zustimmung zu bestimmten Cookies
						und/oder Cookie-basierten Anwendungen erteilt werden kann. Das Tool
						blockiert alle zustimmungspflichtigen Cookies, bis der einzelne
						Nutzer eine entsprechende Zustimmung erteilt. Damit wird
						sichergestellt, dass Cookies nur dann auf dem Endgerät des Nutzers
						gesetzt werden, wenn tatsächlich die Zustimmung erteilt wurde.
					</p>
					<p>
						Damit das Cookie-Einwilligungstool die Seitenaufrufe eindeutig
						einzelnen Nutzern zuordnen und die vom Nutzer vorgenommenen
						Einwilligungseinstellungen für eine Sitzung individuell erfassen,
						protokollieren und speichern kann, werden bestimmte
						Nutzerinformationen (u.a. die IP-Adresse) beim Aufruf unserer
						Website vom Cookie-Einwilligungstool erfasst, dann an die Server von
						CookieYes übermittelt und dort gespeichert.
					</p>
					<p>
						Weitere Informationen über die Verwendung von Daten durch CookieYes’
						finden Sie in der Datenschutzerklärung von CookieYes’:
					</p>
					<p>
						Mozilor Ltd.
						<br />3 Warren Yard, <br />
						Wolverton Mill, Milton Keynes, MK12 5NW, United Kingdom
					</p>{" "}
					<p>
						Datenschutzerklärung:&nbsp;
						<StyledLink href="https://www.cookieyes.com/privacy-policy/">
							https://www.cookieyes.com/privacy-policy/
						</StyledLink>
					</p>
					<p>
						Die Grundlage für die Datenverarbeitung ist insoweit Art. 6 Abs. 1
						lit. c DSGVO, der die Verarbeitung von Daten zur Erfüllung einer
						rechtlichen Verpflichtung, der der Verantwortliche unterliegt,
						erlaubt. Weitere Rechtsgrundlage für die beschriebene
						Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die
						Verarbeitung von Daten zur Wahrung der berechtigten Interessen des
						für die Verarbeitung Verantwortlichen erlaubt, sofern nicht die
						Interessen oder Grundrechte und Grundfreiheiten der betroffenen
						Person überwiegen.
					</p>
					<h3>Google Web Fonts</h3>
					<p>
						{" "}
						Unsere Website verwendet Web Fonts von Google. Anbieter ist die
						Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043,
						USA. Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die
						von uns gewünschte Darstellung unserer Website zu präsentieren,
						unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen.
						Dies erfolgt über den Abruf der Google Web Fonts von einem Server
						von Google in den USA und der damit verbundenen Weitergabe Ihre
						Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche
						Seite Sie bei uns besucht haben. Der Einsatz von Google Web Fonts
						erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber
						dieser Website haben wir ein berechtigtes Interesse an der optimalen
						Darstellung und Übertragung unseres Webauftritts.
					</p>
					<p>
						Das Unternehmen Google ist für das us-europäische
						Datenschutzübereinkommen 'Privacy Shield' zertifiziert. Dieses
						Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden
						Datenschutzniveaus gewährleisten.
					</p>
					<p>
						Einzelheiten über Google Web Fonts finden Sie unter: {" "}
						<StyledLink href="https://www.google.com/fonts#AboutPlace:about">
							https://www.google.com/fonts#AboutPlace:about
						</StyledLink>
						 und weitere Informationen in den Datenschutzbestimmungen von
						Google: 
						<StyledLink href="https://policies.google.com/privacy/partners?hl=de">
							https://policies.google.com/privacy/partners?hl=de
						</StyledLink>
					</p>
					<h3>Hosting</h3>
					<p>
						{" "}
						Wir hosten unsere Webseite bei Strato. Anbieter ist die Strato AG,
						Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend Strato). Details
						entnehmen Sie der Datenschutzerklärung von Strato:{" "}
						<StyledLink href="https://www.strato.de/datenschutz/">
							https://www.strato.de/datenschutz/
						</StyledLink>
						Die Verwendung von Strato erfolgt auf der Grundlage von Art. 6 Abs.
						1 S. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
						möglichst zuverlässigen Darstellungg unserer Webseite. Wird eine
						Einwilligung im Einzelfall abgefragt, erfolgt die Verarbeitung
						ausschließlich auf der Basis des Art. 6 (Abs. 1 S. 1 lit. a) DSGVO
						und § 25 Abs. 1 TTDSG. Dies gilt, soweit die Einwilligung die
						Speicherung von Cookies oder den Zugriff auf Informationen im
						Endgerät des Nutzers im Sinne des TTDSG umfasst (etwa ein
						Device-Fingerprinting). Diese Einwilligung ist jederzeit
						widerrufbar.
					</p>{" "}
					<h3>Auftragsdatenverarbeitung </h3>
					<p>
						Wir haben einen Vertrag über Auftragsdatenverarbeitung (AVV) mit
						Strato geschlossen. Dabei handelt es sich um einen gesetzlich
						vorgegebenen Vertrag, der gewährleistet, dass Strato die
						personenbezogenen Daten unserer Webseitenbesucher nur nach unseren
						Weisungen und unter Einhaltung der DSGVO verarbeitet.
					</p>
					<h3>Microsoft Bookings </h3>
					<p>
						Unsere Website verwendet den Terminbuchungsdienst „Microsoft
						Bookings“ (MS Bookings)
						<StyledLink href="https://products.office.com/de-de/business/scheduling-and-booking-app">
							(https://products.office.com/de-de/business/scheduling-and-booking-app)
						</StyledLink>
						der Firma Microsoft Corporation, One Microsoft Way, Redmond, WA
						98052-6399, USA für die Vereinbarung von Terminen bzgl.
						Energiedienstleistungen. Mit diesem Dienst kann der Nutzer online
						einen Beratungsstermin mit der Kanzlei vereinbaren. Für den
						Buchungsdienst MS Bookings werden Ihre Eingaben, Ihre IP-Adresse,
						die von Ihnen aufgerufene Seite sowie der Zugriffszeitpunkt und Ihre
						Browserkonfiguration an Microsoft übertragen. Die Rechtsgrundlage
						für die Verarbeitung Ihrer Daten in Bezug auf den Dienst MS Bookings
						ist Art. 6 Abs. 1 S. 1 Buchstabe a DSGVO (Einwilligung).
					</p>
					<p>
						Eine mögliche Widerrufserklärung ist an info@kanzlei-isbrandt.de zu
						richten.
					</p>
					<h3>Google AdWords und Google Conversion-Tracking</h3>
					<p>
						Unsere Website verwendet Google AdWords. Anbieter ist die Google
						Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, United
						States.AdWords ist ein Online-Werbeprogramm. Im Rahmen des
						Online-Werbeprogramms arbeiten wir mit Conversion-Tracking. Nach
						einem Klick auf eine von Google geschaltete Anzeige wird ein Cookie
						für das Conversion-Tracking gesetzt. Cookies sind kleine
						Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Google
						AdWords Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen
						nicht der persönlichen Identifizierung der Nutzer. Am Cookie können
						Google und wir erkennen, dass Sie auf eine Anzeige geklickt haben
						und zu unserer Website weitergeleitet wurden.
					</p>
					<p>
						Jeder Google AdWords-Kunde erhält ein anderes Cookie. Die Cookies
						sind nicht über Websites von AdWords-Kunden nachverfolgbar. Mit
						Conversion-Cookies werden Conversion-Statistiken für AdWords-Kunden,
						die Conversion-Tracking einsetzen, erstellt. Adwords-Kunden erfahren
						wie viele Nutzer auf ihre Anzeige geklickt haben und auf Seiten mit
						Conversion-Tracking-Tag weitergeleitet wurden. AdWords-Kunden
						erhalten jedoch keine Informationen, die eine persönliche
						Identifikation der Nutzer ermöglichen. Wenn Sie nicht am Tracking
						teilnehmen möchten, können Sie einer Nutzung widersprechen. Hier ist
						das Conversion-Cookie in den Nutzereinstellungen des Browsers zu
						deaktivieren. So findet auch keine Aufnahme in die
						Conversion-Tracking Statistiken statt.
					</p>
					<p>
						Die Speicherung von 'Conversion-Cookies' erfolgt auf Grundlage von
						Art. 6 Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben ein
						berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser
						Webangebot und unsere Werbung zu optimieren.
					</p>
					<p>
						Einzelheiten zu Google AdWords und Google Conversion-Tracking finden
						Sie in den Datenschutzbestimmungen von Google:{" "}
						<StyledLink href="https://www.google.de/policies/privacy/">
							https://www.google.de/policies/privacy/
						</StyledLink>
						.
					</p>
					<p>
						Mit einem modernen Webbrowser können Sie das Setzen von Cookies
						überwachen, einschränken oder unterbinden. Die Deaktivierung von
						Cookies kann eine eingeschränkte Funktionalität unserer Website zur
						Folge haben.
					</p>
					<h3>Externe Links </h3>
					<p>
						Sofern Sie externe Links nutzen, die im Rahmen unserer
						Internetseiten angeboten werden, erstreckt sich diese
						Datenschutzerklärung nicht auf diese Links. Wenn wir Links anbieten,
						bemühen wir uns sicherzustellen, dass auch diese unserer
						Datenschutz- und Sicherheitsstandards einhalten. Wir haben jedoch
						keinen Einfluss auf die Einhaltung der Datenschutz und
						Sicherheitsbestimmungen durch andere Anbieter. Informieren Sie sich
						deshalb bitte auf den Internetseiten der anderen Anbieter auch über
						die dort bereitgestellten Datenschutzerklärungen.
					</p>
					<h3>Soziale Medien </h3>
					<p>
						Wir betreiben auf unterschiedlichen Webseiten und sozialen
						Netzwerken Onlinepräsenzen, bei deren Besucht durch den jeweilig
						unten aufgeführten Betreiber die sogleich näher aufgeführten Daten
						erhoben und verarbeitet werden. Von den Betreibern der Webseiten
						werden die genannten Daten zur Erstellung von Nutzerprofilen
						angelegt und durch diese Nutzerprofile Werbe- und Marketingzwecke
						verfolgt. Die Datenerfassung und -speicherung erfolgt dabei
						unabhängig vom benutzten Endgerät. Dies ist insbesondere dann der
						Fall, wenn Sie Mitglied der jeweiligen Plattform sind und auf dem
						genutzten Endgerät eingeloggt sind. Die Nutzungsprofile können von
						den jeweiligen Anbietern genutzt werden, um Ihnen interessenbezogene
						Werbung auszuspielen. Gegen die Erstellung von derartigen Profilen
						steht Ihnen ein Widerrufsrecht zu, welches Sie gegenüber dem
						jeweiligen Anbieter geltend machen müssen. Sofern Sie beim Besuch
						unserer Profile bei dem jeweiligen Dienstanbieter auf Ihrem Endgerät
						und mit Ihrem Account eingeloggt sind, kann der jeweilige Anbieter
						Daten über Ihr Nutzungsverhalten auf unserem Profil erheben. Um eine
						solche Verknüpfung Ihrer Daten zu verhindern, ist vor dem Besuch
						unseres Profils bei den betreffenden Anbietern ein Ausloggen vom
						Dienst des Anbieters erforderlich.
					</p>
					<p>
						Zu welchem Zweck und in welchem Umfang Daten von Dritten erhoben
						werden, entnehmen Sie den unten verlinkten Datenschutzerklärungen
						der jeweiligen Anbieter. Dabei möchten wir darauf hinweisen, dass je
						nach Sitz des Anbieters die über dessen Plattform erfassten Daten
						außerhalb des Raums der Europäischen Union übertragen und
						verarbeitet werden können. Es besteht in diesem Fall das Risiko,
						dass das durch die DSGVO vorgeschriebene Schutzniveau für Ihre Daten
						nicht eingehalten und die Durchsetzung Ihrer Rechte nicht oder nur
						erschwert erfolgen kann.
					</p>
					<p>
						Widerspruchsmöglichkeiten: Zu den jeweiligen
						Widerspruchsmöglichkeiten verweisen wir auf die nachfolgend
						verlinkten Angaben der Anbieter.
					</p>
					<p>
						Wir unterhalten Onlinepräsenzen auf folgenden sozialen Netzwerken:
					</p>
					<p>
						Instagram <br />
						Dienstanbieter: Meta Platforms Ireland Limited, Merrion Road, Dublin
						4, D04 X2K5, Irland
						<br />
						Internetseite: <br />
						<StyledLink href="https://www.instagram.com/">
							https://www.instagram.com/
						</StyledLink>{" "}
						<br />
						Datenschutzerklärung: <br />
						<StyledLink href="http://instagram.com/about/legal/privacy">
							http://instagram.com/about/legal/privacy
						</StyledLink>{" "}
					</p>
					<h3>Google Maps</h3>
					<p>
						Auf dieser Website sind Inhalte von Google Maps eingebunden. Die
						Einbindung von Google Maps erfolgt durch einen Serveraufruf, in der
						Regel ein Server von Google in den USA. Hierdurch wird an den Server
						übermittelt, welche unserer Internetseiten Sie besucht haben. Auch
						wird die IP-Adresse des Browsers des Endgerätes des Besuchers dieser
						Internetseiten von Google gespeichert. Google Maps arbeitet mit
						einer Autofill-Funktion, aufgrund derer Ihre Adressdaten automatisch
						vervollständigt werden, um Ihnen die Eingabe zu erleichtern. Es
						gelten ferner die zusätzlichen Nutzungsbedingungen von Google Maps
						unter https://www.google.com/intl/de_US/help/terms_maps.html. Sie
						haben jederzeit die Möglichkeit, den Service von Google Maps zu
						deaktivieren und somit den Datentransfer an Google zu verhindern,
						indem Sie JavaScript in Ihrem Browser deaktivieren. Wir weisen Sie
						jedoch darauf hin, dass Sie in diesem Fall die Kartenanzeige nicht
						nutzen können.
					</p>
					<h3>Aktualität und Änderung dieser Datenschutzhinweise</h3>
					<p>Diese Datenschutzhinweise haben den Stand Februar 2024.</p>
					<p>
						Durch die Weiterentwicklung unserer Webseite und Angebote darüber
						oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
						Vorgaben kann es notwendig werden, diese
					</p>
					<p>
						Datenschutzhinweise zu ändern. Die jeweils aktuelle Version kann
						jederzeit auf der Webseite unter{" "}
						<StyledLink href="www.kanzlei-isbrandt.de/datenschutz">
							www.kanzlei-isbrandt.de/datenschutz/
						</StyledLink>{" "}
						von Ihnen abgerufen und ausgedruckt werden.
					</p>
				</Content>
			</DatenContainer>
		</>
	);
}
const ImageContainer = styled.div`
	position: absolute;
	top: 10rem;
	left: 50rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
	@media (max-width: 1440px) {
		left: 45rem;
	}
	@media (max-width: 1240px) {
		left: 40rem;
	}
	@media (max-width: 1100px) {
		left: 30rem;
	}
	@media (max-width: 900px) {
		left: 25rem;
	}
	@media (max-width: 768px) {
		left: 20rem;
		top: 11rem;
	}
	@media (max-width: 700px) {
		left: 15rem;
	}

	@media (max-width: 600px) {
		left: 10rem;
		top: 13rem;
	}

	@media (max-width: 500px) {
		left: 9rem;
		top: 12rem;
		height: 25rem;
		width: auto;
	}

	@media (max-width: 380px) {
		left: 5rem;
		top: 13rem;
		height: 20rem;
		width: auto;
	}
`;

const Content = styled.div`
	font-size: 1rem;
	line-height: 1.75;
	color: #111827;
	font-family: "FiraSans-Regular";
	z-index: 1;
	position: relative;
`;

const DatenContainer = styled.div`
	padding-top: 140px;
	color: #7a8387;
	padding: 9rem 17rem 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #7a8387;
	overflow: hidden;
	@media (max-width: 1200px) {
		padding: 9rem 14rem 4rem;
	}
	@media (max-width: 1024px) {
		padding: 9rem 12rem 4rem;
	}
	@media (max-width: 900px) {
		padding: 9rem 8rem 4rem;
	}
	@media (max-width: 768px) {
		padding: 11rem 6rem 4rem;
	}
	@media (max-width: 700px) {
		padding: 11rem 3rem 4rem;
	}
	@media (max-width: 400px) {
		padding: 11rem 1rem 4rem;
	}
	@media (max-width: 380px) {
		padding: 8rem 1rem 4rem;
	}
`;

const DatenTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;

	@media (max-width: 550px) {
		font-size: 2rem;
	}

	@media (max-width: 550px) {
		font-size: 2rem;
	}
	@media (max-width: 360px) {
		font-size: 1.2rem;
	}
`;
const StyledLink = styled.a`
	color: #1a4d61;
`;
