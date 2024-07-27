import Headline from "@/components/ui/headline";
import Text from "@/components/ui/text";
import Container from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import AuthButton from "@/components/ui/auth-button";

export default function Home() {
	return (
		<div className="relative">
			<div className="absolute right-10 top-10">
				<ThemeToggle />
			</div>
			<Container className="h flex w-full max-w-5xl justify-center text-center">
				<Headline
					as="h1"
					className="mt-28"
				>
					ThunderMix
				</Headline>
				<Text>Create playlists lightning fast for any occasion!</Text>
				<AuthButton />
			</Container>
		</div>
	);
}
