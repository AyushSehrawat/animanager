import { json } from "@sveltejs/kit";
import { GraphQLClient, gql } from 'graphql-request'
import * as queries from '../../queries.js'
import { env } from '$lib/env'

const base_uri = 'https://graphql.anilist.co'

export const GET = async () => {
  return "ok"
};
