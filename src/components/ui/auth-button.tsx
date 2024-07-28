"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

type AuthButtonType = {
	type: "login" | "logout";
};

const AuthButton = ({ type }: AuthButtonType) => {
	const { data: session } = useSession();

	if (type === "logout" && session) {
		return <Button onClick={() => signOut()}>Sign Out</Button>;
	} else if (type === "login" && !session) {
		return <Button onClick={() => signIn("spotify")}>Sign In</Button>;
	}
	return null;
};

export default AuthButton;
