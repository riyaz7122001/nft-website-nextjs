import React from "react";

interface ButtonProps {
    text: string;
    styles?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
    opacity?: number;
    bgColor?: string;
    textColor?: string;
    onClick?: () => void;
    borderColor?: string;
    variant?: "primary" | "secondary";
    minWidth?: string | number;
    maxWidth?: string | number;
}

const Button: React.FC<ButtonProps> = ({
    text,
    styles = "",
    width = "auto", // Allow width to be dynamic
    height = "73px",
    borderRadius = "50px",
    opacity = 1,
    bgColor = "bg-secondary",
    textColor = "text-white",
    onClick,
    variant = "primary",
    minWidth = "250px", // Ensure minimum width
    maxWidth = "100%", // Allow button to grow responsively
}) => {
    const variantStyles =
        variant === "secondary"
            ? `bg-transparent border border-[#85CECF] ${textColor}`
            : `${bgColor} ${textColor}`;
    return (
        <button
            type="button"
            className={`tracking-wider font-outfit font-semibold text-[18px] py-[16px] px-[60px] 
                rounded-[50%] whitespace-nowrap ${variantStyles} ${styles}`} // Prevent text wrapping
            style={{
                width,
                height,
                borderRadius,
                minWidth,
                maxWidth,
                opacity,
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
