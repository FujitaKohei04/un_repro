import React, { useState, useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { SearchForm } from '../components/ui/SearchForm/SearchForm';
import { MapGrid } from '../components/ui/MapGrid/MapGrid';
import { employees, teams, departments } from '../data/dummyData';
import { useOfficeStore } from '../store/officeStore';
import { EditModal } from '../components/ui/EditModal/EditModal';

function OfficeMapComponent() {
  const { layout, isEditMode } = useOfficeStore();
  const [keyword, setKeyword] = useState('');

  const filteredEmployeeIds = useMemo(() => {
    // ... (logic is the same)
    const lowercasedKeyword = keyword.toLowerCase().trim();
    if (!lowercasedKeyword) {
      return null;
    }
    const matchedIds = new Set<string>();
    employees.forEach(employee => {
      if (
        employee.name.toLowerCase().includes(lowercasedKeyword) ||
        employee.extension.includes(lowercasedKeyword) ||
        employee.team.toLowerCase().includes(lowercasedKeyword)
      ) {
        matchedIds.add(employee.id);
      }
    });
    teams.forEach(team => {
      const department = departments.find(d => d.id === team.departmentId);
      const isTeamMatch = team.name.toLowerCase().includes(lowercasedKeyword);
      const isDepartmentMatch = department && department.name.toLowerCase().includes(lowercasedKeyword);
      if (isTeamMatch || isDepartmentMatch) {
        team.members.forEach(member => matchedIds.add(member.id));
      }
    });
    return Array.from(matchedIds);
  }, [keyword]);

  return (
    <div style={{ padding: '20px', background: 'white' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>座席表</h1>
      
      {isEditMode && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p className="font-bold">編集モード</p>
          <p>セルをクリックして種類や割り当てを変更できます。</p>
        </div>
      )}

      <SearchForm onKeywordChange={setKeyword} />
      <MapGrid 
        layout={layout} 
        employees={employees} 
        highlightedEmployeeIds={filteredEmployeeIds}
      />
      <EditModal />
    </div>
  );
}

export const Route = createFileRoute('/office-map')({
  component: OfficeMapComponent,
});
