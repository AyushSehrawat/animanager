import { invalidateAll } from "$app/navigation";
import { json } from "@sveltejs/kit";
import { redirect } from '@sveltejs/kit';
import { env } from '$lib/env'

export const GET = async ({ url , request, cookies, fetch }) => {
  const code = url.searchParams.get('code') ?? "anonymous"
  if (code !== 'anonymous') {
    const getAccessToken = async () => {
      const body = {
        'grant_type': 'authorization_code',
        'client_id': `${env.client_id}`,
        'client_secret': `${env.client_secret}`,
        'redirect_uri': `${env.redirect_uri}`,
        'code': `${code}`,
      }
      const res = await fetch(
        'https://anilist.co/api/v2/oauth/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'applications/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(body)
        }
      )
      const _ = await res.json()
      return _
    }
    const data = await getAccessToken()

    cookies.set('access_token', data['access_token'], {path: '/' , httpOnly: true, sameSite : 'strict' , maxAge: data['expires_in']})
    cookies.set('refresh_token', data['refresh_token'], {path: '/' , httpOnly: true, sameSite : 'strict' , maxAge: data['expires_in']})

    throw redirect(302, '/')
  };
  return json({"success" : false, "message" : "code not found in the callback. contact the developer for more."})
}
