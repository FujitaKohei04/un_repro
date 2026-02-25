import { style } from '@vanilla-extract/css';
import { transformCss } from '@vanilla-extract/css/transformCss';
import { recipe } from '@vanilla-extract/recipes';

export const avatarBase = recipe({
  base: [
    {
        // Flexbox
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        // Size
        height: '1.5rem', // 10 * 0.25rem (Tailwindの10相当)
        width: '1.5rem',

        // Appearance
        overflow: 'hidden',
        borderRadius: '9999px', // rounded-full
        backgroundColor: '#e2e8f0', // bg-slate-200
        
        // Border
        borderWidth: '2px',
        borderStyle: 'solid',

        cursor: 'pointer',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        transitionProperty: 'transform',
        transitionDuration: '150ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',



        selectors: {
            '&:hover': {
                transform: 'scale(1.1)',
            }
        }
    }
  ],
  variants: {
    state: {
        active: {borderColor: '#8ff63b'}, 
        away: {borderColor: '#f63b3b'}, 
        meeting: {borderColor: '#f6e33b'}, 
        empty: {borderColor: '#969aa0'}, 
        default: {borderColor: '#e2e8f0'}
    }
  }
});

export const noImageAvatar = style({
    //className="text-sm font-medium text-slate-600"
    fontSize: '0.75rem',
    fontWeight: '400',
    color: '#6b7280',
});