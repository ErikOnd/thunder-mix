import { Button } from "@/components/ui/button";
import Headline from "@/components/ui/headline";
import Text from "@/components/ui/text";
import Container from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
	return (
		<div className="relative">
			<div className="absolute right-10 top-10">
				<ThemeToggle />
			</div>
			<Container className="flex w-full max-w-5xl justify-center">
				<Headline
					as="h1"
					className="mt-28">
					Next.js Starter Template
				</Headline>
				<Text>
					This Next.js starter template comes pre-configured with ESLint, Prettier, Tailwind, Shadcn,
					TypeScript and a variety of basic components.
				</Text>
				<Button>Click me</Button>
			</Container>
		</div>
	);
}
