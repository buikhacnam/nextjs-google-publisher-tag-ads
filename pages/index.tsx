import React from "react"
import { GET_CHARACTERS } from "@/graphQL/queries"
import { graphQLRickAndMortyClient } from "@/graphQL/graphQLClient"
import { GetServerSideProps } from "next"
import { ICharacter, IInfo } from "@/types/Character"
import { Card } from "@/stories/Card"
import { beautifyDate } from "@/utils/beautifyDate"
import { Button } from "@/stories/Button"
import { useRouter } from "next/router"
import Input from "@/stories/Input"
import Head from "next/head"
import { SiderAd } from "@/stories/SiderAd"
import { HeadAd } from "@/stories/HeadAd"
import { InarticleAd } from "@/stories/InArticleAd"

export const getServerSideProps: GetServerSideProps<{
    info: IInfo
    results: ICharacter[]
}> = async context => {
    const { name, page, status } = context.query

    const data: {
        characters: { info: IInfo; results: ICharacter[] }
    } = await graphQLRickAndMortyClient.request(GET_CHARACTERS, {
        page: page ? parseInt(page as string) : 1,
        filter: {
            name: name ? name : "",
            status: status ? status : "",
        },
    })
    return {
        props: {
            info: data.characters.info,
            results: data.characters.results,
        },
    }
}

export default function Character({
    info,
    results,
}: {
    info: IInfo
    results: ICharacter[]
}) {
    const router = useRouter()
    return (
        <div className="relative">
            <HeadAd />
            <Head>
                <title>Home</title>
                <meta name="description" content={"next.js articles"} />
            </Head>
            <div className="flex mb-4 justify-end">
                <select
                    onChange={event => {
                        router.push({
                            pathname: "/",
                            query: {
                                name: router.query.name || "",
                                status: event.target.value,
                                page: 1,
                            },
                        })
                    }}
                    className="border-none, mr-4"
                >
                    <option value="">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">unknown</option>
                </select>
                <Input
                    placeholder="Search..."
                    type="text"
                    onChange={event => {
                        router.push({
                            pathname: "/",
                            query: {
                                name: event.target.value,
                                status: router.query.status || "",
                                page: 1,
                            },
                        })
                    }}
                    width={500}
                    height={30}
                />
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 300px",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                    {results.map((character, i) => {
                        return (
                            <Card
                                id={character.id}
                                title={character.name}
                                subTitle={character.status || ""}
                                imageSrc={character.image}
                                key={character.id}
                                author={character.status || ""}
                                date={beautifyDate(character.created)}
                                link={`/${character.id}`}
                                imgHeight={180}
                                imgWidth={180}
                            />
                        )
                    })}
                </div>
                <SiderAd />
            </div>
            <InarticleAd />
            <div className="flex justify-center align-middle mb-4">
                {info.prev ? (
                    <Button
                        label="Prev"
                        onClick={() => {
                            router.push({
                                pathname: "/",
                                query: {
                                    name: router.query.name || "",
                                    status: router.query.status || "",
                                    page: router.query.page
                                        ? parseInt(
                                              router.query.page as string
                                          ) - 1
                                        : 1,
                                },
                            })
                        }}
                    />
                ) : null}

                {info.next ? (
                    <Button
                        label="Next"
                        onClick={() => {
                            router.push({
                                pathname: "/",
                                query: {
                                    name: router.query.name || "",
                                    status: router.query.status || "",
                                    page: router.query.page
                                        ? parseInt(
                                              router.query.page as string
                                          ) + 1
                                        : 2,
                                },
                            })
                        }}
                    />
                ) : null}
            </div>
        </div>
    )
}
