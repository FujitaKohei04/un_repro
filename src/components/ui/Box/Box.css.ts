import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/vars.css";

export const boxStyle = recipe({
    base: {
        borderRadius: '8px',
        backgroundColor: vars.color.white,
        border: "2px solid",
        width: "fit-content",
        padding: "8px 16px",
    },
    variants: {
        color: {
            primary: {
                border: `2px solid ${vars.color.primary}`,
                
            },
            secondary: {
                border: `1px solid ${vars.color.secondary}`,
            }
        },
        
        
    }
})