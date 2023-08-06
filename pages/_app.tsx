import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Header } from '@/stories/Header'
import { ApolloProvider } from '@apollo/client'
import mongodbClient from '@/graphQL/mongodb'

export default function App({
    Component,
    pageProps: { ...pageProps },
}: AppProps) {
    return (
        <
        >
            <Header logo={'/next.svg'} headerHeight={80}/>

            <Component {...pageProps} />
        </>
    )
}
