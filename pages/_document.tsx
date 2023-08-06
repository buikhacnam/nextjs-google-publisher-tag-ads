import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preload"
                    href="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
                    as="script"
                ></link>
            </Head>
            <body>
                <Main />
                <Script
                    async
                    src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
                    strategy="beforeInteractive"
                />
                <NextScript />
            </body>
        </Html>
    )
}
