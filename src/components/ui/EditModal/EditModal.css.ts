import { style, keyframes } from '@vanilla-extract/css';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.44)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 100,
});

export const content = style({
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 101,
  ':focus': {
    outline: 'none',
  },
});

export const title = style({
  margin: 0,
  fontWeight: 500,
  color: '#333',
  fontSize: 17,
});

export const description = style({
  marginBottom: 20,
  color: '#555',
  fontSize: 15,
  lineHeight: 1.5,
});

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const fieldset = style({
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

export const label = style({
  fontSize: 15,
  color: '#2196f3', // Blue
  width: 90,
  textAlign: 'right',
});

export const select = style({
  flex: 1,
  borderRadius: 4,
  padding: '10px',
  fontSize: 15,
  border: '1px solid #ccc',
  backgroundColor: '#f8f8f8',
  ':focus': {
    borderColor: '#2196f3',
    outline: 'none'
  },
});

export const input = style({
  flex: 1,
  borderRadius: 4,
  padding: '10px',
  fontSize: 15,
  border: '1px solid #ccc',
  backgroundColor: '#f8f8f8',
  ':focus': {
    borderColor: '#2196f3',
    outline: 'none'
  },
});

export const saveButton = style({
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: 4,
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#1976d2',
    }
});

export const closeButton = style({
    backgroundColor: '#aaa',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: 4,
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#888',
    }
});

export const iconButton = style({
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#f0f0f0',
    }
});
