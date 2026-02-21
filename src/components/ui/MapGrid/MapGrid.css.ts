import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gap: '2px',
  width: '100%',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  padding: '2px',
  overflowX: 'auto', // 横スクロールを可能にする
});
