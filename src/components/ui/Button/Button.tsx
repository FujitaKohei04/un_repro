import type { ReactNode } from "react";
import { buttonStyle } from "./Button.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void; /*? はオプショナル（任意）の意。なくてもいい。*/
} & RecipeVariants<typeof buttonStyle>;

export const Button = ({children, color, size, onClick}: ButtonProps) => {
    return (
        <button
            className={buttonStyle({ color, size })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};