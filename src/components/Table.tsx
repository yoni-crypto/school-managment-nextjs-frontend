import React from 'react';

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

interface TableProps {
  columns: Column[];
  renderRow:(item:any)=>React.ReactNode;
  data:any[];
}

const Table: React.FC<TableProps> = ({ columns ,renderRow,data}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className || ''}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
