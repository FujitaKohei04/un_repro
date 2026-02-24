import { create } from 'zustand';
import type { OfficeLayout, Cell } from '../types/office';
import { officeLayout as initialLayout } from '../data/dummyData';

interface OfficeState {
  layout: OfficeLayout;
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateCell: (updatedCell: Cell) => void;
}

export const useOfficeStore = create<OfficeState>((set) => ({
  layout: initialLayout,
  isEditMode: false,

  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
  
  updateCell: (updatedCell) =>
    set((state) => ({
      layout: {
        ...state.layout,
        cells: state.layout.cells.map((cell) =>
          cell.id === updatedCell.id ? updatedCell : cell
        ),
      },
    })),
}));
