import React, { useState } from 'react';
import type { Cell, Employee } from '../../../types/office2';
import { useOfficeStore } from '../../../store/officeStore';
import { EditModal } from '../EditModal/EditModal';
import * as styles from './MapCell.css';

type MapCellProps = {
  cellData: Cell;
  employee?: Employee; // This might be redundant now as employee is in cellData
  isHighlighted: boolean;
};

export const MapCell: React.FC<MapCellProps> = ({ cellData, isHighlighted }) => {
  const { isEditMode, updateCell } = useOfficeStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCellContent = () => {
    const currentEmployee = cellData.employee;
    switch (cellData.type) {
      case 'seat':
        return (
          <div className={styles.contentWrapper}>
            <p className={styles.employeeName}>{currentEmployee?.name || '空席'}</p>
            <p className={styles.employeeExt}>{currentEmployee?.extensionNumber ? `(内線: ${currentEmployee.extensionNumber})` : ''}</p>
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
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveCell = (updatedCell: Cell) => {
    updateCell(updatedCell);
    // The modal is closed by its own logic now
  };

  const finalClassName = `${styles.cell} ${styles.cellType[cellData.type]} ${!isHighlighted ? styles.dimmed : ''} ${isEditMode ? styles.editable : ''}`;

  return (
    <>
      <div className={finalClassName} onClick={handleClick}>
        {getCellContent()}
      </div>
      <EditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cell={cellData}
        onSave={handleSaveCell}
      />
    </>
  );
};
