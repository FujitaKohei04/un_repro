/**
 * 社員情報を表す型
 */
export type Employee = {
  id: string; // 一意のID
  name: string; // 名前
  extension: string; // 内線番号
  team: string; // グループ内の担当
};

/**
 * グループ情報を表す型
 */
export type Team = {
  id: string; // 一意のID
  name: string; // グループ名
  departmentId: string; // 所属する部署のID
  members: Employee[]; // 所属する社員のリスト
};

/**
 * 部署情報を表す型
 */
export type Department = {
  id: string; // 一意のID
  name: string; // 部署名
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
 * 座席マップの各セルのデータを表す型
 */
export type MapCellData = {
  id: string; // セルの一意のID (例: "row1-col3")
  type: CellType; // セルの種類
  employeeId?: string; // 'seat' の場合に社員IDを格納
};

/**
 * オフィス全体のマップ情報を表す型
 */
export type OfficeLayout = {
  rows: number; // グリッドの行数
  cols: number; // グリッドの列数
  cells: MapCellData[]; // セルデータの配列
};
