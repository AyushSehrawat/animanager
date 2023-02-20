import { redirect } from '@sveltejs/kit';
import { GraphQLClient, gql } from 'graphql-request'
import * as queries from './queries.js'
import { env } from '$lib/env'

const base_uri = 'https://graphql.anilist.co'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, cookies }) => {
  const access_token = cookies.get('access_token') ?? 'anonymous'
  if (access_token !== 'anonymous' && access_token !== '') {

    const graphQLClient = new GraphQLClient(base_uri, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

    const getUserData = async () => {
      const data_uid = await graphQLClient.request(queries.query_getuserid)
      const uid = data_uid['Viewer']['id']
      const data_user = await graphQLClient.request(queries.query_getuserdata, {id : uid})
      return JSON.stringify(data_user)
    }

    return {
      "success": true,
      "message" : "Logged in",
      data_user : getUserData()
    }
  };
  return {
    "success": false,
    "message": "You are not logged in, please login."
  }
}
