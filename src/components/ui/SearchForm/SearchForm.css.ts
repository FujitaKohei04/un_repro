import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '20px',
  padding: '10px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  border: '1px solid #dee2e6',
});

export const input = style({
  flexGrow: 1,
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '6px',
  border: '1px solid #ced4da',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  ':focus': {
    borderColor: '#2196f3', // 青
    outline: 'none',
    boxShadow: `0 0 0 3px rgba(33, 150, 243, 0.2)`,
  },
});


