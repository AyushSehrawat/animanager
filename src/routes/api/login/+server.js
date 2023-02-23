import { json } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { env } from '$lib/env';

export const GET = async ({ request }) => {
	throw redirect(
		302,
		`https://anilist.co/api/v2/oauth/authorize?client_id=${env.client_id}&redirect_uri=${env.redirect_uri}&response_type=code`
	);
};
