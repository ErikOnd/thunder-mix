"use client";

import Headline from "@/components/ui/headline";
import Text from "@/components/ui/text";
import Container from "@/components/ui/container";
import AuthButton from "@/components/ui/auth-button";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
	const router = useRouter();
	const session = useSession();
	console.log(session);

	return (
		<div className="relative">
			<div className="absolute right-10 top-10">
				<div className="flex gap-5">
					<AuthButton type="logout" />
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
				{session.status === "authenticated" && (
					<Button
						type="button"
						onClick={() => router.push("/occasion")}
					>
						Create your playlist
					</Button>
				)}
			</Container>
		</div>
	);
}

//todo: Create my playlist button that gets conditionally render depending on if i have a session or not
