/**
 * Hanbit DS - Table
 * Figma: "Table/Table", "Table/Cell/Head", "Table/Cell/Body"
 * Variants: Content(Text|Number|Checkbox|Custom)
 */
import React from 'react';

export interface TableColumn {
  key: string;
  header: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, React.ReactNode>[];
  selectable?: boolean;
  selectedRows?: number[];
  onSelectionChange?: (indices: number[]) => void;
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  columns, data, selectable, selectedRows = [], onSelectionChange, className,
}) => (
  <table className={className} style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        {selectable && <th style={{ width: 40 }}><input type="checkbox" onChange={e => onSelectionChange?.(e.target.checked ? data.map((_, i) => i) : [])} /></th>}
        {columns.map(col => <th key={col.key} style={{ textAlign: col.align || 'left', width: col.width }}>{col.header}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} data-selected={selectedRows.includes(i)}>
          {selectable && <td><input type="checkbox" checked={selectedRows.includes(i)} onChange={e => {
            const next = e.target.checked ? [...selectedRows, i] : selectedRows.filter(x => x !== i);
            onSelectionChange?.(next);
          }} /></td>}
          {columns.map(col => <td key={col.key} style={{ textAlign: col.align || 'left' }}>{row[col.key]}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);
export default Table;
