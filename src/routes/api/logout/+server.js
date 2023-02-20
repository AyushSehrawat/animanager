import { json } from "@sveltejs/kit";
import { redirect } from '@sveltejs/kit';


export const GET = async ({ cookies }) => {
  cookies.set('access_token' , '', {
    path: '/',
    expires: new Date(0),
  })
  cookies.set('refresh_token' , '', {
    path: '/',
    expires: new Date(0),
  })
  throw redirect(302, '/')
}
