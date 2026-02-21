import React from 'react';
import type { MapCellData, Employee } from '../../../types/office';
import { useOfficeStore } from '../../../store/officeStore';
import * as styles from './MapCell.css';

type MapCellProps = {
  cellData: MapCellData;
  employee?: Employee;
  isHighlighted: boolean;
};

export const MapCell: React.FC<MapCellProps> = ({ cellData, employee, isHighlighted }) => {
  const { isEditMode, setEditingCell } = useOfficeStore();

  const getCellContent = () => {
    // ... (content is the same)
    switch (cellData.type) {
      case 'seat':
        return (
          <div className={styles.contentWrapper}>
            <p className={styles.employeeName}>{employee?.name || '空席'}</p>
            <p className={styles.employeeExt}>{employee?.extension ? `(ext: ${employee.extension})` : ''}</p>
          </div>
        );
      case 'president_room':
        return <div className={styles.contentWrapper}>社長室</div>;
      case 'rest_area':
        return <div className={styles.contentWrapper}>休憩室</div>;
      case 'meeting_room':
        return <div className={styles.contentWrapper}>会議室</div>;
      case 'path':
        return null;
      case 'empty':
        return null;
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (isEditMode) {
      setEditingCell(cellData);
    }
  };

  const finalClassName = `${styles.cell} ${styles.cellType[cellData.type]} ${!isHighlighted ? styles.dimmed : ''} ${isEditMode ? styles.editable : ''}`;

  return (
    <div className={finalClassName} onClick={handleClick}>
      {getCellContent()}
    </div>
  );
};
