import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<title>Thunder Mix</title>
			</head>
			<body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
