import React from "react";

type HeadlineProps = {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
	children: React.ReactNode;
};

const Headline = ({ as: Tag = "h1", className = "", children }: HeadlineProps) => {
	const baseClass = "font-bold";
	let sizeClass = "";

	switch (Tag) {
		case "h1":
			sizeClass = "text-6xl md:text-7xl lg:text-8xl font-black";
			break;
		case "h2":
			sizeClass = "text-4xl md:text-5xl lg:text-6xl font-black";
			break;
		case "h3":
			sizeClass = "text-2xl md:text-3xl lg:text-4xl font-black";
			break;
		case "h4":
			sizeClass = "text-xl md:text-2xl lg:text-3xl font-black";
			break;
		case "h5":
			sizeClass = "text-lg md:text-xl lg:text-2xl font-black";
			break;
		case "h6":
			sizeClass = "text-base md:text-lg lg:text-xl font-black";
			break;
		default:
			sizeClass = "text-2xl md:text-3xl lg:text-4xl font-black";
	}

	return <Tag className={`${baseClass} ${sizeClass} ${className}`}>{children}</Tag>;
};

export default Headline;
