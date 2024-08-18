import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
	const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

	console.log("TOKEN:", token);

	// If the user is authenticated, continue as normal
	if (token) {
		return NextResponse.next();
	}

	// Redirect to login page if not authenticated
	return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
	matcher: "/occasion/:path*",
};
