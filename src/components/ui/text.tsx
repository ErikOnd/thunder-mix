import React from "react";

type TextProps = {
    className?: string;
    children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ className = "", children }) => {
    return <p className={`text-base md:text-lg lg:text-xl ${className}`}>{children}</p>;
};

export default Text;
