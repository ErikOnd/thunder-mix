"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const AuthButton = () => {
	const { data: session } = useSession();

	if (session) {
		return <Button onClick={() => signOut()}>Sign Out</Button>;
	}
	return <Button onClick={() => signIn("spotify")}>Sign In</Button>;
};

export default AuthButton;
