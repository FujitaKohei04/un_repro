import type { Department, Team, Employee, OfficeLayout, Cell } from '../types/office2';

// --- 社員データ ---
export const employees: Employee[] = [
  { id: 'emp001', name: '山田 太郎', extensionNumber: '1234', department: '開発部', group: 'Web開発グループ', role: '開発担当' },
  { id: 'emp002', name: '佐藤 花子', extensionNumber: '1235', department: '開発部', group: 'Web開発グループ', role: '開発担当' },
  { id: 'emp003', name: '鈴木 一郎', extensionNumber: '1236', department: '開発部', group: 'Web開発グループ', role: 'デザイン担当' },
  { id: 'emp004', name: '田中 優子', extensionNumber: '2101', department: '営業部', group: 'ソリューション営業グループ', role: '営業担当' },
  { id: 'emp005', name: '高橋 健太', extensionNumber: '2102', department: '営業部', group: 'ソリューション営業グループ', role: '営業担当' },
  { id: 'emp006', name: '社長',       extensionNumber: '1000', department: '役員室', group: '役員', role: '役員' },
];

// --- 部署データ ---
export const departments: Department[] = [
  { id: 'dep01', name: '開発部' },
  { id: 'dep02', name: '営業部' },
  { id: 'dep03', name: '役員室' },
];

// --- チーム（グループ）データ ---
export const teams: Team[] = [
  { 
    id: 'team01', 
    name: 'Web開発グループ', 
    departmentId: 'dep01', 
    members: employees.filter(e => e.id === 'emp001' || e.id === 'emp002' || e.id === 'emp003') 
  },
  { 
    id: 'team02', 
    name: 'ソリューション営業グループ', 
    departmentId: 'dep02', 
    members: employees.filter(e => e.id === 'emp004' || e.id === 'emp005') 
  },
];


// --- オフィスレイアウトデータ ---
// 10x15のグリッドを想定
const rows = 10;
const cols = 15;
const cells: Cell[] = [];

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    cells.push({ id: `r${r}-c${c}`, type: 'empty' as const });
  }
}

const findEmployee = (id: string) => employees.find(e => e.id === id);

// レイアウトの例
// 社長室
cells[0 * cols + 13] = { id: 'r0-c13', type: 'president_room', employeeId: 'emp006', employee: findEmployee('emp006') };
cells[0 * cols + 14] = { id: 'r0-c14', type: 'president_room' };
cells[1 * cols + 13] = { id: 'r1-c13', type: 'president_room' };
cells[1 * cols + 14] = { id: 'r1-c14', type: 'president_room' };

// 休憩室
for(let i = 0; i < 4; i++) {
  cells[9 * cols + i].type = 'rest_area';
}

// 通路
for(let r = 0; r < rows; r++) {
  cells[r * cols + 5].type = 'path';
}
for(let c = 6; c < 13; c++) {
  cells[4 * cols + c].type = 'path';
}


// 開発部
cells[2 * cols + 2] = { id: 'r2-c2', type: 'seat', employeeId: 'emp001', employee: findEmployee('emp001') };
cells[2 * cols + 3] = { id: 'r2-c3', type: 'seat', employeeId: 'emp002', employee: findEmployee('emp002') };
cells[3 * cols + 2] = { id: 'r3-c2', type: 'seat', employeeId: 'emp003', employee: findEmployee('emp003') };

// 営業部
cells[6 * cols + 8] = { id: 'r6-c8', type: 'seat', employeeId: 'emp004', employee: findEmployee('emp004') };
cells[6 * cols + 9] = { id: 'r6-c9', type: 'seat', employeeId: 'emp005', employee: findEmployee('emp005') };


export const officeLayout: OfficeLayout = {
  rows,
  cols,
  cells,
};
