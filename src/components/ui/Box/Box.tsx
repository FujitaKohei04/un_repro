import type { ReactNode } from "react";
import { boxStyle } from "./Box.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type BoxProps = {
    children: ReactNode;
} & RecipeVariants<typeof boxStyle>;

export const Box = ({children, color}: BoxProps) => {
    return (
        <div
            className={boxStyle({ color })}
        >
            {children}
        </div>
            
    );
}