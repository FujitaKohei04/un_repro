import React from 'react';
import type { OfficeLayout, Employee } from '../../../types/office';
import { MapCell } from '../MapCell/MapCell';
import * as styles from './MapGrid.css';

type MapGridProps = {
  layout: OfficeLayout;
  employees: Employee[];
  highlightedEmployeeIds: string[] | null;
};

export const MapGrid: React.FC<MapGridProps> = ({ layout, employees, highlightedEmployeeIds }) => {
  const gridStyle = {
    gridTemplateRows: `repeat(${layout.rows}, auto)`,
    gridTemplateColumns: `repeat(${layout.cols}, 1fr)`,
  };

  const getEmployeeById = (id: string | undefined) => {
    if (!id) return undefined;
    return employees.find(e => e.id === id);
  }

  return (
    <div className={styles.container} style={gridStyle}>
      {layout.cells.map((cell) => {
        const employee = getEmployeeById(cell.employeeId);
        
        // そのセルがハイライト対象かを判断する
        // 検索キーワードがない場合 (highlightedEmployeeIdsがnull) は、常にハイライト
        // 検索キーワードがある場合は、そのセルが「席」であり、かつ社員がハイライトリストに含まれているか
        // または、そのセルが「席」ではない場合 (通路や会議室など) は常にハイライト (非表示にしない)
        const isHighlighted = 
          highlightedEmployeeIds === null || 
          (cell.type !== 'seat') ||
          (employee && highlightedEmployeeIds.includes(employee.id));

        return (
          <MapCell 
            key={cell.id} 
            cellData={cell} 
            employee={employee}
            isHighlighted={isHighlighted}
          />
        );
      })}
    </div>
  );
};
