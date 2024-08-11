import Headline from "@/components/ui/headline";
import Text from "@/components/ui/text";
import Container from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import AuthButton from "@/components/ui/auth-button";
import PlaylistCreator from "@/components/playlist-creator";

export default function Home() {
	return (
		<div className="relative">
			<div className="absolute right-10 top-10">
				<div className="flex gap-5">
					<AuthButton type="logout" />
					<ThemeToggle />
				</div>
			</div>
			<Container className="h flex w-full max-w-5xl items-center justify-center text-center">
				<Headline
					as="h1"
					className="mt-28"
				>
					ThunderMix
				</Headline>
				<Text>Create playlists lightning fast for any occasion!</Text>
				<AuthButton type="login" />
			</Container>
			{/*<PlaylistCreator />*/}
		</div>
	);
}

//todo: Create my playlist button that gets conditionally render depending on if i have a session or not
