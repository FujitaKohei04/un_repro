import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/vars.css';

export const buttonStyle = recipe({
  base: {
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s',
    fontWeight: 'bold',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
        ':hover': { backgroundColor: vars.color.primaryHover },
      },
      secondary: {
        backgroundColor: vars.color.gray,
        color: '#333',
      },
    },
    size: {
      small: { padding: vars.space.small },
      medium: { padding: vars.space.medium },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
});