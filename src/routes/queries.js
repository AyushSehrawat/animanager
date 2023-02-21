import { GraphQLClient, gql } from 'graphql-request'

export const query_getuserid = gql`
  query {
    Viewer {
      id
    }
  }
`

export const query_getuserdata = gql`
  query ($id: Int) {
    User(id: $id) {
      id
      name
      about
      avatar {
        medium
      }
      statistics {
        anime {
          count
          minutesWatched
          episodesWatched      
        }
        manga {
          count
          chaptersRead
          volumesRead
        }
      }
      
    }
  }
`

export const query_getuseranimedata = gql`
  query ($id: Int) {
    MediaListCollection(userId: $id, type: ANIME , sort: UPDATED_TIME_DESC) {
      lists {
        entries {
          id
          status
          progress
          media {
            id
            title {
              romaji
              english
            }
          }
        }
      }
    }
  }
`

export const query_getusermangadata = gql`
  query ($id: Int) {
    MediaListCollection(userId: $id, type: MANGA , sort: UPDATED_TIME_DESC) {
      lists {
        entries {
          id
          status
          progress
          media {
            id
            title {
              romaji
              english
            }
          }
        }
      }
    }
  }
`
