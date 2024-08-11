import React from "react";

type TextProps = {
	size?: "small" | "medium" | "large";
	type?: "primary" | "secondary";
	className?: string;
	children: React.ReactNode;
};

const sizeClasses = {
	small: "text-xs md:text-sm lg:text-base",
	medium: "text-base md:text-lg lg:text-xl",
	large: "text-lg md:text-xl lg:text-2xl",
};

const typeClasses = {
	primary: "text-white",
	secondary: "text-gray-300"
}


const Text = ({ size = "medium", type="primary",  className = "", children }: TextProps) => {
	return <p className={`${sizeClasses[size]} ${typeClasses[type]} ${className}`}>{children}</p>;
};

export default Text;
