import { getSession } from "next-auth/react";

export async function refreshSpotifyAccessToken() {
	const session = await getSession();
	if (session && session.accessToken) {
		return session.accessToken;
	} else {
		console.error("Unable to retrieve access token from session.");
		return null;
	}
}
