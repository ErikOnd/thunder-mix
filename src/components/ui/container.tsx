import React from "react";

type ContainerProps = {
	className?: string;
	children: React.ReactNode;
};

const Container = ({ className = "", children }: ContainerProps) => {
	return <div className={`mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

export default Container;
