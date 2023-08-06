import { graphQLRickAndMortyClient } from '@/graphQL/graphQLClient'
import { GET_CHARACTER, GET_CHARACTER_IDS } from '@/graphQL/queries'
import { ICharacter } from '@/types/Character'
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image';

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
    } = await graphQLRickAndMortyClient.request(
        GET_CHARACTER_IDS
    )
    const paths = data.characters.results.map(character => ({
        params: { id: character.id },
    }))

    return {
        paths,
        fallback: true,
    }
}


export default function Character({ character }: { character: ICharacter }) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
      }
    return (
        <div>
            <h1>{character.name}</h1>
            <Image src={character.image} alt={character.name} width={300} height={300} />
        </div>
    )
}
