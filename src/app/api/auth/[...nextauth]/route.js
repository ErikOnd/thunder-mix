import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import {refreshAccessToken} from "../../../../lib/spotify";

export const authOptions = {
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID ?? "",
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
			authorization: {
				params: {
					scope: "playlist-modify-private",
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
				token.refreshToken = account.refresh_token;
				token.accessTokenExpires = Date.now() + account.expires_in * 1000;
			}

			if (Date.now() < token.accessTokenExpires) {
				return token;
			}

			return await refreshAccessToken(token);
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken;
			return session;
		},
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
