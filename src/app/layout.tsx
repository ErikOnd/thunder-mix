import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<title>Thunder Mix</title>
			</head>
			<body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
