import { style, styleVariants } from '@vanilla-extract/css';
// import { vars } from '../../../styles/vars.css'; // NOTE: vars.colors.blue_400 のような変数が未定義のため一旦コメントアウト

const baseCell = style({
  minWidth: '100px',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
});

export const cellType = styleVariants({
  seat: {
    backgroundColor: '#e3f2fd', // 薄い青
    borderColor: '#2196f3',    // 青
  },
  path: {
    backgroundColor: '#fafafa',
    borderStyle: 'dashed',
  },
  rest_area: {
    backgroundColor: '#e8f5e9', // 薄い緑
    borderColor: '#4caf50',   // 緑
  },
  president_room: {
    backgroundColor: '#fffde7', // 薄い黄
    borderColor: '#ffeb3b',   // 黄
  },
  meeting_room: {
    backgroundColor: '#f3e5f5', // 薄い紫
    borderColor: '#9c27b0',   // 紫
  },
  empty: {
    backgroundColor: '#ffffff',
    borderColor: '#eeeeee',
  },
});

export const cell = baseCell;

export const contentWrapper = style({
  padding: '4px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const employeeName = style({
  fontWeight: 'bold',
  margin: 0,
  fontSize: '12px',
  lineHeight: 1.3,
  color: '#333',
});

export const employeeExt = style({
  margin: 0,
  marginTop: '4px',
  fontSize: '10px',
  color: '#666',
});

export const dimmed = style({
  opacity: 0.2,
  transition: 'opacity 0.3s ease-in-out',
});

export const editable = style({
  cursor: 'pointer',
  ':hover': {
    outline: '2px solid #2196f3', // Blue outline
    outlineOffset: '-2px',
  }
});
