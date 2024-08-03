import { getSession } from "next-auth/react";

export default async function getSongs(accessToken: string, query: string) {
	const endpoint = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=12`;
	try {
		const response = await fetch(endpoint, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
		});


		//todo:fix this part -> could cause infinity loop
		if (response.status === 401) {
			const session = await getSession();
			return getSongs(session?.accessToken, query);
		}

		const data = await response.json();

		return data.tracks.items;
	} catch (error) {
		console.error("Error getting song: ", error);
	}
}
