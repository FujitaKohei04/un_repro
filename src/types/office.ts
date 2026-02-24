/**
 * 社員情報を表す型
 */
export type Employee = {
  id: string;
  name: string;
  extensionNumber: string;
  department: string;
  group: string;
  role: string;
};

/**
 * グループ情報を表す型
 */
export type Team = {
  id:string;
  name: string;
  departmentId: string;
  members: Employee[];
};

/**
 * 部署情報を表す型
 */
export type Department = {
  id: string;
  name: string;
};

/**
 * 座席マップのセルの種類を表す型
 * - seat: 座席
 * - path: 通路
 * - rest_area: 休憩室
 * - meeting_room: 会議室
 * - president_room: 社長室
 * - empty: 空きスペース
 */
export type CellType = 'seat' | 'path' | 'rest_area' | 'meeting_room' | 'president_room' | 'empty';

/**
 * 座席マップの各セルのデータを表す型 (旧 MapCellData)
 */
export type Cell = {
  id: string; // セルの一意のID (例: "row1-col3")
  type: CellType; // セルの種類
  employeeId?: string; // 'seat' の場合に社員IDを格納
  employee?: Employee; // 'seat' の場合に社員情報を格納
};

/**
 * オフィス全体のマップ情報を表す型
 */
export type OfficeLayout = {
  rows: number; // グリッドの行数
  cols: number; // グリッドの列数
  cells: Cell[]; // セルデータの配列
};
