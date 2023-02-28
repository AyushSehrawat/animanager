import { json } from '@sveltejs/kit';
import { GraphQLClient, gql } from 'graphql-request';
import * as queries from '../../../queries.js';
import { env } from '$lib/env';

const base_uri = 'https://graphql.anilist.co';

export const GET = async ({ cookies, params }) => {
	const access_token = cookies.get('access_token') ?? 'anonymous';
	if (access_token !== 'anonymous' && access_token !== '') {
		const graphQLClient = new GraphQLClient(base_uri, {
			headers: {
				Authorization: 'Bearer ' + access_token,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});

		const getAnimeList = async () => {
			const animeList = await graphQLClient.request(queries.query_getuseranime, { id: params.uid });
			console.log(JSON.stringify(animeList));
			return animeList;
		};
		const data = await getAnimeList();
		return new json(data);
	}
	return {
		success: false,
		message: 'You are not logged in, please login'
	};
};
