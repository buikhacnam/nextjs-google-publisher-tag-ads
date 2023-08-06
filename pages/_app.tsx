import type { AppProps } from "next/app"
import "../styles/globals.css"
import { Header } from "@/stories/Header"
import AdsProvider from "@/context/AdsProvider"
import Head from "next/head"

export default function App({
    Component,
    pageProps: { ...pageProps },
}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <Header logo={"/next.svg"} headerHeight={80} />
            <AdsProvider>
                <Component {...pageProps} />
            </AdsProvider>
        </>
    )
}
