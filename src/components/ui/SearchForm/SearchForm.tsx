import React from 'react';
import * as styles from './SearchForm.css';

type SearchFormProps = {
  onKeywordChange: (keyword: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onKeywordChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="名前、内線、部署、グループ、担当で検索..."
        className={styles.input}
        onChange={(e) => onKeywordChange(e.target.value)}
      />
    </div>
  );
};
