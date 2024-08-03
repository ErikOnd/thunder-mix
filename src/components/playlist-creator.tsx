"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import getSongs from "@/app/api/getSongs";
import AlbumCard from "@/components/album-card";

type SpotifyImage = {
	url: string;
};

type SessionData = {
	accessToken: string;
};

export type Song = {
	name: string;
	uri: string;
	album: {
		images: SpotifyImage[];
	};
	artists: {
		name: string;
	}[];
};

type SongArray = Song[];

const PlaylistCreator = () => {
	const { data: session } = useSession() as { data: SessionData | null };
	const [query, setQuery] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState("");
	const [songs, setSongs] = useState<SongArray>();

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query);
		}, 300);

		return () => {
			clearTimeout(handler);
		};
	}, [query]);

	useEffect(() => {
		if (debouncedQuery.length >= 3) {
			getData();
		} else {
			setSongs([]);
		}
	}, [debouncedQuery]);

	async function getData() {
		if (session?.accessToken) {
			setSongs(await getSongs(session.accessToken, debouncedQuery));
		}
	}

	if (!session) return null;
	return (
		<>
			<Container className="h flex w-full max-w-5xl justify-center text-center">
				<Input
					className="mb-10 mt-10"
					type="text"
					placeholder="Enter a song to create a playlist..."
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</Container>
			<Container className="items-center">
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
					{songs?.map((song, index) => {
						return (
							<div
								key={index}
								className="relative h-60 w-60 rounded-xl overflow-hidden cursor-pointer hover:shining-border"
							>
								<AlbumCard song={song} />
							</div>
						);
					})}
				</div>
			</Container>
		</>
	);
};

export default PlaylistCreator;
