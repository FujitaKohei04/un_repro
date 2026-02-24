import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as styles from './EditModal.css';
import type { Cell, CellType, Employee } from '../../../types/office';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  cell: Cell | null;
  onSave: (updatedCell: Cell) => void;
}

const CELL_TYPE_OPTIONS: { value: CellType; label: string }[] = [
  { value: 'seat', label: '座席' },
  { value: 'path', label: '通路' },
  { value: 'rest_area', label: '休憩室' },
  { value: 'meeting_room', label: '会議室' },
  { value: 'president_room', label: '社長室' },
  { value: 'empty', label: '空きスペース' },
];

export const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, cell, onSave }) => {
  const [type, setType] = useState<CellType>('empty');
  const [employeeName, setEmployeeName] = useState('');
  const [extensionNumber, setExtensionNumber] = useState('');

  useEffect(() => {
    if (cell) {
      setType(cell.type);
      setEmployeeName(cell.employee?.name || '');
      setExtensionNumber(cell.employee?.extensionNumber || '');
    } else {
      // Reset form when modal is closed or cell is null
      setType('empty');
      setEmployeeName('');
      setExtensionNumber('');
    }
  }, [cell]);

  const handleSave = () => {
    if (cell) {
      const newEmployeeData: Employee | undefined = type === 'seat' ? {
        id: cell.employee?.id || `emp_${Date.now()}`, // Preserve ID if exists
        name: employeeName,
        extensionNumber: extensionNumber,
        department: cell.employee?.department || '', // Preserve other data
        group: cell.employee?.group || '',
        role: cell.employee?.role || '',
      } : undefined;

      const updatedCell: Cell = {
        ...cell,
        type,
        employee: newEmployeeData,
        employeeId: newEmployeeData?.id,
      };
      onSave(updatedCell);
      onClose();
    }
  };
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>セルの編集</Dialog.Title>
          <Dialog.Description className={styles.description}>
            セルの種類や割り当てる社員情報を変更します。
          </Dialog.Description>
          
          <div className={styles.formContainer}>
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="cell-type">
                セルの種類
              </label>
              <select
                id="cell-type"
                value={type}
                onChange={(e) => setType(e.target.value as CellType)}
                className={styles.select}
              >
                {CELL_TYPE_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </fieldset>
            
            {type === 'seat' && (
              <>
                <fieldset className={styles.fieldset}>
                  <label className={styles.label} htmlFor="employee-name">社員名</label>
                  <input
                    id="employee-name"
                    className={styles.input}
                    type="text"
                    value={employeeName}
                    placeholder="山田 太郎"
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </fieldset>
                <fieldset className={styles.fieldset}>
                  <label className={styles.label} htmlFor="extension-number">内線番号</label>
                  <input
                    id="extension-number"
                    className={styles.input}
                    type="text"
                    value={extensionNumber}
                    placeholder="1234"
                    onChange={(e) => setExtensionNumber(e.target.value)}
                  />
                </fieldset>
              </>
            )}
          </div>

          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end', gap: '10px' }}>
            <button onClick={handleSave} className={styles.saveButton}>保存</button>
            <Dialog.Close asChild>
                <button className={styles.closeButton}>キャンセル</button>
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
