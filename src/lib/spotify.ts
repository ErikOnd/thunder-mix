type Token = {
	refreshToken: string;
}

export async function refreshAccessToken(token: Token) {
	try {

		const url = "https://accounts.spotify.com/api/token";

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
			},
			body: new URLSearchParams({
				grant_type: "refresh_token",
				refresh_token: token.refreshToken,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			throw data;
		}

		return {
			...token,
			accessToken: data.access_token,
			accessTokenExpires: Date.now() + data.expires_in * 1000,
			refreshToken: data.refresh_token ?? token.refreshToken, // Fall back to old refresh token
		};
	} catch (error) {
		console.error("Error refreshing access token", error);

		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}
