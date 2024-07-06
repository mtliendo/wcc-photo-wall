import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>WCC Photo Wall</title>
				<meta property="og:title" content="Community Events" />

				<meta
					property="og:image"
					content="https://res.cloudinary.com/dblm6lgj0/image/upload/c_limit,w_640/f_auto/q_auto/E712CDF8-0E0C-40B6-B173-B6C3C8ABBD6F_1_105_c_esjxei?_a=BAVFB+DW0"
				/>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
