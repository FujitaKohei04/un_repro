import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
    color: {
        primary: '#0070f3',
        secondary: '#1db954',
        text: '#333',
        white: '#fff',
    },
    space: {
        small: '4px',
        midiam: '8px',
        large: '16px',
    }
});