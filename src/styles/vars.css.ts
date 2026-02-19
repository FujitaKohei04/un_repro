import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
    color: {
        primary: '#0070f3',
        primaryHover: '#005bc1',
        secondary: '#1db954',
        text: '#333',
        white: '#fff',
        gray: '#444',

    },
    space: {
        small: '4px',
        medium: '8px',
        large: '16px',
    }
});