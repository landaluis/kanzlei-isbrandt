import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Watermark from "../../public/Watermark.png";

export default function DatenschutzContent() {
	return (
		<>
			<DatenContainer>
				<DatenTitle>Datenschutzerklärung</DatenTitle>
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

					<h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
					<p>
						Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
						Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
						Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
						formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
						Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
					</p>

					<h4>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h4>
					<p>
						Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
						Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
						zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher
						Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem
						sich der Sitz unseres Unternehmens befindet. Der folgende Link
						stellt eine Liste der Datenschutzbeauftragten sowie deren
						Kontaktdaten bereit:
						<StyledLink href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.">
							https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
						</StyledLink>
					</p>
					<h4>Recht auf Datenübertragbarkeit</h4>
					<p>
						Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
						Einwilligung oder in Erfüllung eines Vertrags automatisiert
						verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
						Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
						die direkte Übertragung der Daten an einen anderen Verantwortlichen
						verlangen, erfolgt dies nur, soweit es technisch machbar ist.
					</p>
					<h4>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h4>
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
					<h4>SSL- bzw. TLS-Verschlüsselung</h4>
					<p>
						Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
						Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
						Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
						über diese Website übermitteln, für Dritte nicht mitlesbar. Sie
						erkennen eine verschlüsselte Verbindung an der „https://“
						Adresszeile Ihres Browsers und am Schloss-Symbol in der
						Browserzeile.
					</p>
					<h4>Server-Log-Dateien</h4>
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
					<p>
						Es findet keine Zusammenführung dieser Daten mit anderen
						Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6
						Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung
						eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
					</p>
					<h4>Cookies</h4>
					<p>
						Unsere Website verwendet Cookies. Das sind kleine Textdateien, die
						Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns
						dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu
						machen.
					</p>
					<p>
						Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach
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
					<h4>Real Cookie Banner</h4>

					<h4>Google Web Fonts</h4>
					<p>
						Unsere Website verwendet Web Fonts von Google. Anbieter ist die
						Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043,
						USA. Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die
						von uns gewünschte Darstellung unserer Website zu präsentieren,
						unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen.
						Dies erfolgt über den Abruf der Google Web Fonts von einem Server
						von Google in den USA und der damit verbundenen Weitergabe Ihre
						Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche
						Seite Sie bei uns besucht haben. Der Einsatz von Google Web Fonts
						erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber
						dieser Website haben wir ein berechtigtes Interesse an der optimalen
						Darstellung und Übertragung unseres Webauftritts. Das Unternehmen
						Google ist für das us-europäische Datenschutzübereinkommen „Privacy
						Shield“ zertifiziert. Dieses Datenschutzübereinkommen soll die
						Einhaltung des in der EU geltenden Datenschutzniveaus
						gewährleisten. Einzelheiten über Google Web Fonts finden Sie
						unter: https://www.google.com/fonts#AboutPlace:about und weitere
						Informationen in den Datenschutzbestimmungen von
						Google: https://policies.google.com/privacy/partners?hl=de
					</p>
					<h4>Calendly </h4>
					<p>
						Firma Privacy Department, Calendly LLC,115 E Main St., Ste A1B,
						Buford, GA 30518, USA für die Vereinbarung von Terminen. Mit diesem
						Dienst kann der Nutzer online einen Beratungsstermin mit der Kanzlei
						vereinbaren. Für den Buchungsdienst Calendly werden Ihre Eingaben,
						Ihre IP-Adresse, die von Ihnen aufgerufene Seite sowie der
						Zugriffszeitpunkt und Ihre Browserkonfiguration an Calendly
						übertragen. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten in
						Bezug auf den Dienst Calendly ist Art. 6 Abs. 1 S. 1 Buchstabe a
						DSGVO (Einwilligung).
					</p>
					<p>
						Indem Sie auf „Buchen“ klicken, erteilen Sie Ihre Einwilligung zur
						Verarbeitung Ihrer Daten zu den o.g. Zwecken im Rahmen der Dienste
						MS Bookings und MS Teams. Die Einverständniserklärung kann jederzeit
						mit Wirkung für die Zukunft widerrufen werden.
					</p>
					<p>
						Eine mögliche Widerrufserklärung ist an info@kanzlei-isbrandt.de zu
						richten.
					</p>
					<h4>Externe Links </h4>
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
					<h4>Soziale Medien </h4>
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
						Anbietern ein Ausloggen vom Dienst des Anbieters erforderlich. Zu
						welchem Zweck und in welchem Umfang Daten von Dritten erhoben
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
					<p>Instagram</p>
					<p>
						Dienstanbieter: Meta Platforms Ireland Limited, Merrion Road, Dublin
						4, D04 X2K5, Irland
					</p>
					<p>Internetseite: https://www.instagram.com/</p>
					<p>Datenschutzerklärung: http://instagram.com/about/legal/privacy</p>
					<h4>Google Maps</h4>
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
					<h4>Aktualität und Änderung dieser Datenschutzhinweise</h4>
					<p>Diese Datenschutzhinweise haben den Stand Februar 2024.</p>
					<p>
						Durch die Weiterentwicklung unserer Webseite und Angebote darüber
						oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
						Vorgaben kann es notwendig werden, diese Datenschutzhinweise zu
						ändern. Die jeweils aktuelle Version kann jederzeit auf der Webseite
						unter www.kanzlei-isbrandt.de/datenschutz/ von Ihnen abgerufen und
						ausgedruckt werden.
					</p>
				</Content>
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
			</DatenContainer>
		</>
	);
}

const ImageContainer = styled.div`
	position: absolute;
	top: 10rem;
	left: 39rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;

	@media (max-width: 1024px) {
		left: 30rem;
	}

	@media (max-width: 900px) {
		left: 25rem;
	}

	@media (max-width: 768px) {
		left: 20rem;
	}

	@media (max-width: 700px) {
		left: 15rem;
	}

	@media (max-width: 600px) {
		left: 10rem;
	}

	@media (max-width: 500px) {
		left: 9rem;
		top: 12rem;
		height: 25rem;
		width: auto;
	}
`;

const Content = styled.div`
	font-size: 1.2rem;
	line-height: 1.75;
	color: #111827;
	font-family: "FiraSans-Regular";
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

	@media (max-width: 1024px) {
		padding: 9rem 12rem 4rem;
	}

	@media (max-width: 900px) {
		padding: 9rem 8rem 4rem;
	}

	@media (max-width: 768px) {
		// padding: 9rem 8rem 4rem;
	}

	@media (max-width: 700px) {
		padding: 9rem 3rem 4rem;
	}

	@media (max-width: 400px) {
		padding: 9rem 1rem 4rem;
	}
`;

const DatenTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
`;

const StyledLink = styled.a`
	color: #1a4d61;
`;
