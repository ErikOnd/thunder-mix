import React from "react";
import Image from "next/image";
import { Song } from "@/components/playlist-creator";
import Text from "@/components/ui/text";

type AlbumCardProps = {
	song: Song;
};

const AlbumCard = ({ song }: AlbumCardProps) => {
	return (
		<div className="group">
			<Image
				className="absolute duration-300 ease-in-out group-hover:scale-110"
				src={song.album.images[0].url}
				alt="song image"
				fill={true}
			/>
			<div className="absolute bottom-0 flex w-full flex-col justify-end bg-black/80 p-2">
				<Text className="truncate font-black group-hover:text-primary">{song.name}</Text>
				<Text
					size="small"
					type="secondary"
					className="truncate group-hover:text-primary"
				>
					{song.artists[0].name}
				</Text>
			</div>
		</div>
	);
};

export default AlbumCard;
