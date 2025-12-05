import React from 'react';
import cn from 'classnames';
import styles from './NewTable.module.scss';

export interface TableColumn {
  key: string;
  title: string;
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableProps {
  // Данные для таблицы
  data: any[];
  // Колонки таблицы
  columns: TableColumn[];
  // Ключевое поле для key (по умолчанию 'id')
  rowKey?: string;
  // Классы для кастомизации
  className?: string;
  tableClassName?: string;
  // Состояние загрузки
  isLoading?: boolean;
  // Пустое состояние
  emptyText?: string;
  // Обработчик клика по строке
  onRowClick?: (item: any) => void;
}

const NewTable: React.FC<TableProps> = ({
  data,
  columns,
  rowKey = 'id',
  className = '',
  tableClassName = '',
  isLoading = false,
  emptyText = 'No data available',
  onRowClick,
}) => {
  // Функция для получения ключа строки
  const getRowKey = (item: any, index: number): string => {
    return String(item[rowKey] || index);
  };

  // Загрузка
  if (isLoading) {
    return (
      <div className={cn(styles.tableWrapper, className)}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  // Пустое состояние
  if (!data || data.length === 0) {
    return (
      <div className={cn(styles.tableWrapper, className)}>
        <div className={styles.empty}>{emptyText}</div>
      </div>
    );
  }

  return (
    <div className={cn(styles.tableWrapper, className)}>
      <table className={cn(styles.table, tableClassName)}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={styles.th}
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={getRowKey(item, index)}
              className={cn(styles.tr, { [styles.clickable]: onRowClick })}
              onClick={() => onRowClick && onRowClick(item)}
            >
              {columns.map((column) => (
                <td key={column.key} className={styles.td}>
                  {column.render
                    ? column.render(item[column.key], item)
                    : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewTable;