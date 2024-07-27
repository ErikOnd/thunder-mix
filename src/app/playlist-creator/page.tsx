import React from "react";
import Container from "@/components/ui/container";
import Headline from "@/components/ui/headline";
import Text from "@/components/ui/text";
import { Input } from "@/components/ui/input";

const PlaylistCreator = () => {
	return (
		<>
			<Container className="h flex w-full max-w-5xl justify-center text-center">
				<Input
					className="mb-10 mt-10"
					type="text"
					placeholder="Enter a song to create a playlist..."
				/>
			</Container>
			<Container className="items-center">
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
					<div className="h-60 w-60 bg-amber-400">01</div>
					<div className="h-60 w-60 bg-amber-400">02</div>
					<div className="h-60 w-60 bg-amber-400">03</div>
					<div className="h-60 w-60 bg-amber-400">04</div>
					<div className="h-60 w-60 bg-amber-400">05</div>
					<div className="h-60 w-60 bg-amber-400">06</div>
					<div className="h-60 w-60 bg-amber-400">07</div>
					<div className="h-60 w-60 bg-amber-400">08</div>
					<div className="h-60 w-60 bg-amber-400">09</div>
					<div className="h-60 w-60 bg-amber-400">10</div>
					<div className="h-60 w-60 bg-amber-400">11</div>
					<div className="h-60 w-60 bg-amber-400">12</div>
					<div className="h-60 w-60 bg-amber-400">13</div>
					<div className="h-60 w-60 bg-amber-400">14</div>
					<div className="h-60 w-60 bg-amber-400">15</div>
					<div className="h-60 w-60 bg-amber-400">16</div>
					<div className="h-60 w-60 bg-amber-400">17</div>
					<div className="h-60 w-60 bg-amber-400">18</div>
				</div>
			</Container>
		</>
	);
};

export default PlaylistCreator;
