import { json } from "@sveltejs/kit";
import { GraphQLClient, gql } from 'graphql-request'
import * as queries from '../../queries.js'
import { env } from '$lib/env'

const base_uri = 'https://graphql.anilist.co'

export const GET = async ( request ,  cookies ) => {
  const access_token = cookies.get('access_token') ?? 'anonymous'
  if (access_token !== 'anonymous' && access_token !=='') {
    const graphQLClient = new GraphQLClient(base_uri, {
      headers: {
        'Authorization': 'Bearer' + access_token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

      const getAnimeList = async () => {
        
      }
    })
  }
  return {
    "success": false,
    "message": "You are not logged in, please login"
  }
};
