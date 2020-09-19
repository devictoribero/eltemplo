import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1" />
					<link
						rel="shortcut icon"
						href="/static/images/favicon.ico" />
					<link
						href="/css/global.css"
						rel="stylesheet"
					/>
					<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
					<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@700;800&family=Teko:wght@600;700&display=swap" rel="stylesheet"/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}