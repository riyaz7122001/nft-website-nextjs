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
    variant?: "primary" | "secondary"; // Button type
}

const Button: React.FC<ButtonProps> = ({
    text,
    styles = "",
    width = "255px",
    height = "73px",
    borderRadius = "83px 0 0 0",
    opacity = 1,
    bgColor = "bg-secondary",
    textColor = "text-white",
    onClick,
    variant = "primary",
}) => {
    const variantStyles =
        variant === "secondary"
            ? `bg-transparent border border-[#85CECF] ${textColor}`
            : `${bgColor} ${textColor}`;
    return (
        <button
            type="button"
            className={`tracking-wider font-outfit font-semibold md:w-[250px] w-[200px] md:h-[73px] h-[65px] 
                text-[18px] py-[16px] px-[60px] rounded-[50%] ${variantStyles} ${styles}`}
            style={{
                width,
                height,
                borderRadius,
                opacity,
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
