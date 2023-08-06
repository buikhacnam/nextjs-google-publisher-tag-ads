import { graphQLRickAndMortyClient } from "@/graphQL/graphQLClient"
import { GET_CHARACTER, GET_CHARACTER_IDS } from "@/graphQL/queries"
import { ICharacter } from "@/types/Character"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { HeadAd } from "@/stories/HeadAd"
import { InarticleAd } from "@/stories/InArticleAd"
import { SiderAd } from "@/stories/SiderAd"

export const getStaticProps: GetStaticProps<{
    character: ICharacter
}> = async context => {
    const data: { character: ICharacter } =
        await graphQLRickAndMortyClient.request(GET_CHARACTER, {
            characterId: context.params?.id,
        })

    return {
        props: {
            character: data.character,
        },
    }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
    const data: {
        characters: { results: { id: string }[] }
    } = await graphQLRickAndMortyClient.request(GET_CHARACTER_IDS)
    const paths = data.characters.results.map(character => ({
        params: { id: character.id },
    }))

    return {
        paths,
        fallback: true,
    }
}

export default function Character({ character }: { character: ICharacter }) {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <HeadAd />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 300px",
                }}
            >
                <div>
                    <h1>{character.name}</h1>
                    <Image
                        src={character.image}
                        alt={character.name}
                        width={300}
                        height={300}
                    />
                    <p>
                        It was the best compliment that hed ever received
                        although the person who gave it likely never knew. It
                        had been an off-hand observation on his ability to hold
                        a conversation and actually add pertinent information to
                        it on practically any topic. Although he hadnt
                        consciously strived to be able to do so, hed started to
                        voraciously read the news when he couldnt keep up on
                        topics his friends discussed because their conversations
                        went above his head. The fact that someone had noticed
                        enough to compliment him that he could talk
                        intelligently about many topics meant that he had
                        succeeded in his quest to be better informed.
                    </p>
                    <p>
                        It was the best compliment that hed ever received
                        although the person who gave it likely never knew. It
                        had been an off-hand observation on his ability to hold
                        a conversation and actually add pertinent information to
                        it on practically any topic. Although he hadnt
                        consciously strived to be able to do so, hed started to
                        voraciously read the news when he couldnt keep up on
                        topics his friends discussed because their conversations
                        went above his head. The fact that someone had noticed
                        enough to compliment him that he could talk
                        intelligently about many topics meant that he had
                        succeeded in his quest to be better informed.
                    </p>          <p>
                        It was the best compliment that hed ever received
                        although the person who gave it likely never knew. It
                        had been an off-hand observation on his ability to hold
                        a conversation and actually add pertinent information to
                        it on practically any topic. Although he hadnt
                        consciously strived to be able to do so, hed started to
                        voraciously read the news when he couldnt keep up on
                        topics his friends discussed because their conversations
                        went above his head. The fact that someone had noticed
                        enough to compliment him that he could talk
                        intelligently about many topics meant that he had
                        succeeded in his quest to be better informed.
                    </p>          <p>
                        It was the best compliment that hed ever received
                        although the person who gave it likely never knew. It
                        had been an off-hand observation on his ability to hold
                        a conversation and actually add pertinent information to
                        it on practically any topic. Although he hadnt
                        consciously strived to be able to do so, hed started to
                        voraciously read the news when he couldnt keep up on
                        topics his friends discussed because their conversations
                        went above his head. The fact that someone had noticed
                        enough to compliment him that he could talk
                        intelligently about many topics meant that he had
                        succeeded in his quest to be better informed.
                    </p>          <p>
                        It was the best compliment that hed ever received
                        although the person who gave it likely never knew. It
                        had been an off-hand observation on his ability to hold
                        a conversation and actually add pertinent information to
                        it on practically any topic. Although he hadnt
                        consciously strived to be able to do so, hed started to
                        voraciously read the news when he couldnt keep up on
                        topics his friends discussed because their conversations
                        went above his head. The fact that someone had noticed
                        enough to compliment him that he could talk
                        intelligently about many topics meant that he had
                        succeeded in his quest to be better informed.
                    </p>          <p>
                        It was the best compliment that hed ever received
                        although the person who gave it likely never knew. It
                        had been an off-hand observation on his ability to hold
                        a conversation and actually add pertinent information to
                        it on practically any topic. Although he hadnt
                        consciously strived to be able to do so, hed started to
                        voraciously read the news when he couldnt keep up on
                        topics his friends discussed because their conversations
                        went above his head. The fact that someone had noticed
                        enough to compliment him that he could talk
                        intelligently about many topics meant that he had
                        succeeded in his quest to be better informed.
                    </p>
                </div>
                <SiderAd />
            </div>
            <InarticleAd />
        </div>
    )
}
