import { GraphQLClient } from 'graphql-request'

const rickAndMortyEndpoint = process.env.API_RICK_AND_MORTY as string
export const graphQLRickAndMortyClient = new GraphQLClient(rickAndMortyEndpoint)
