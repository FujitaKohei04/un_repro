import { create } from 'zustand';
import type { OfficeLayout, MapCellData, CellType } from '../types/office';
import { officeLayout as initialLayout } from '../data/dummyData';

interface OfficeState {
  layout: OfficeLayout;
  isEditMode: boolean;
  editingCell: MapCellData | null;
  
  toggleEditMode: () => void;
  setEditingCell: (cell: MapCellData | null) => void;
  updateCellType: (cellId: string, newType: CellType) => void;
  assignEmployeeToCell: (cellId: string, employeeId: string) => void;
  unassignEmployeeFromCell: (cellId: string) => void;
}

export const useOfficeStore = create<OfficeState>((set) => ({
  layout: initialLayout,
  isEditMode: false,
  editingCell: null,

  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
  
  setEditingCell: (cell) => set({ editingCell: cell }),

  updateCellType: (cellId, newType) =>
    set((state) => ({
      layout: {
        ...state.layout,
        cells: state.layout.cells.map((cell) =>
          cell.id === cellId 
            ? { ...cell, type: newType, employeeId: newType === 'seat' ? cell.employeeId : undefined }
            : cell
        ),
      },
    })),

  assignEmployeeToCell: (cellId, employeeId) =>
    set((state) => ({
      layout: {
        ...state.layout,
        cells: state.layout.cells.map((cell) =>
          cell.id === cellId ? { ...cell, type: 'seat', employeeId: employeeId } : cell
        ),
      },
    })),
  
  unassignEmployeeFromCell: (cellId) =>
    set((state) => ({
      layout: {
        ...state.layout,
        cells: state.layout.cells.map((cell) =>
          cell.id === cellId ? { ...cell, employeeId: undefined } : cell
        ),
      },
    })),
}));
