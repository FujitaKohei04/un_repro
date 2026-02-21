import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useOfficeStore } from '../../../store/officeStore';
import { employees } from '../../../data/dummyData';
import type　{ CellType } from '../../../types/office';
import * as styles from './EditModal.css';

const CELL_TYPE_OPTIONS: { value: CellType; label: string }[] = [
  { value: 'seat', label: '座席' },
  { value: 'path', label: '通路' },
  { value: 'rest_area', label: '休憩室' },
  { value: 'meeting_room', label: '会議室' },
  { value: 'president_room', label: '社長室' },
  { value: 'empty', label: '空きスペース' },
];

export const EditModal: React.FC = () => {
  const {
    editingCell,
    setEditingCell,
    updateCellType,
    assignEmployeeToCell,
    unassignEmployeeFromCell,
  } = useOfficeStore();

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setEditingCell(null);
    }
  };

  const handleCellTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!editingCell) return;
    const newType = e.target.value as CellType;
    updateCellType(editingCell.id, newType);
  };

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!editingCell) return;
    const newEmployeeId = e.target.value;
    if (newEmployeeId) {
      assignEmployeeToCell(editingCell.id, newEmployeeId);
    } else {
      unassignEmployeeFromCell(editingCell.id);
    }
  };

  return (
    <Dialog.Root open={!!editingCell} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>セルの編集</Dialog.Title>
          <Dialog.Description className={styles.description}>
            セルの種類や割り当てる社員を変更します。
          </Dialog.Description>
          
          {editingCell && (
            <div className={styles.formContainer}>
              <fieldset className={styles.fieldset}>
                <label className={styles.label} htmlFor="cell-type">
                  セルの種類
                </label>
                <select
                  id="cell-type"
                  value={editingCell.type}
                  onChange={handleCellTypeChange}
                  className={styles.select}
                >
                  {CELL_TYPE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </fieldset>
              
              {editingCell.type === 'seat' && (
                <fieldset className={styles.fieldset}>
                  <label className={styles.label} htmlFor="employee">
                    社員の割り当て
                  </label>
                  <select
                    id="employee"
                    value={editingCell.employeeId || ''}
                    onChange={handleEmployeeChange}
                    className={styles.select}
                  >
                    <option value="">未割り当て</option>
                    {employees.map(emp => (
                      <option key={emp.id} value={emp.id}>{emp.name}</option>
                    ))}
                  </select>
                </fieldset>
              )}
            </div>
          )}

          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className={styles.closeButton}>完了</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.iconButton} aria-label="Close">✖</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
