import { gql } from 'graphql-request'

/* 
query ExampleQuery($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      count
      next
      pages
      prev
    }
    results {
      created
      id
      image
      name
      status
    }
  }
}


Variables
{
  "page": 1,
  "filter": {
    "status": "",
    "name": ""
  }
}

*/

// GET LIST OF CHARACTERS

export const GET_CHARACTERS = gql`
    query Characters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                count
                next
                pages
                prev
            }
            results {
                created
                id
                image
                name
                status
            }
        }
    }
`

/*
query ExampleQuery($characterId: ID!) {
  character(id: $characterId) {
    id
    name
    status
    image
    created
  }
}

Variables
{
  "characterId": "1"
}
*/

// GET SINGLE CHARACTER BY ID

export const GET_CHARACTER = gql`
    query Character($characterId: ID!) {
        character(id: $characterId) {
            id
            name
            status
            image
            created
        }
    }
`

// GET LIST OF CHARACTER IDS
export const GET_CHARACTER_IDS = gql`
query Characters {
    characters {
        results {
            id
        }
    }
}
`