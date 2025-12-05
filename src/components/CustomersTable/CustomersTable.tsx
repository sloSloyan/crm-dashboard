import React, { useEffect, useState } from 'react';
import { Customer } from '../../types/customer';
import { customersData } from '../../data/customers';
import styles from './CustomersTable.module.scss';
import { Table } from '../Table/Table';
import Input from '../Input/Input';
import NewTable from '../NewTable/NewTable';
import { useNavigate } from 'react-router-dom'; 
import { useCustomers } from '../../context';


const CustomersTable: React.FC = () => {

const [searchQuery, setSearchQuery] = useState<string>('');
  // Состояние для активного фильтра (что применено)
  const [activeFilter, setActiveFilter] = useState<string>('');
  // Все клиенты (исходные данные)
  // const [allCustomers] = useState<Customer[]>(customersData);

  // Было
  // const { customers } = useCustomers();
  // const [allCustomers] = useState(customers);

  // Стало
    // Берем customers из контекста
  const { customers } = useCustomers();
  
  // Локальное состояние для фильтрации
  const [filteredCustomers, setFilteredCustomers] = useState(customers);

    // Эффект для обновления filteredCustomers при изменении customers
  useEffect(() => {
    if (activeFilter) {
      // Применяем фильтр к обновленным данным
      const filtered = customers.filter(customer => {
        const searchLower = activeFilter.toLowerCase();
        return (
          customer.customerName.toLowerCase().includes(searchLower) ||
          customer.company.toLowerCase().includes(searchLower) ||
          customer.email.toLowerCase().includes(searchLower) ||
          customer.country.toLowerCase().includes(searchLower)
        );
      });
      setFilteredCustomers(filtered);
    } else {
      // Если фильтр не применен, показываем всех
      setFilteredCustomers(customers);
    }
  }, [customers, activeFilter]); // Зависимости: customers и activeFilter

  // Функция для применения фильтра
  const handleApplyFilter = () => {
    setActiveFilter(searchQuery);
  };

  // Функция для сброса фильтра
  const handleClearFilter = () => {
    setSearchQuery('');
    setActiveFilter('');
  };

  // // Фильтруем данные только если есть activeFilter
  // const filteredCustomers = activeFilter
  //   ? allCustomers.filter(customer => {
  //       const searchLower = activeFilter.toLowerCase();
  //       return (
  //         customer.customerName.toLowerCase().includes(searchLower) ||
  //         customer.company.toLowerCase().includes(searchLower) ||
  //         customer.email.toLowerCase().includes(searchLower) ||
  //         customer.country.toLowerCase().includes(searchLower)
  //       );
  //     })
  //   : allCustomers; // Если фильтр не применен - показываем всех

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

    const navigate = useNavigate(); // Хук для перехода между страницами

      // Функция для перехода на страницу редактирования
  const handleNameClick = (customerId: string) => {
    navigate(`/customer/${customerId}/edit`);
  };

const columns = [
  {
    key: 'customerName',
    title: 'Customer Name',
    width: '20%',
    render: (value: string, row: any) => (
        <button 
          className={styles.nameButton}
          onClick={() => handleNameClick(row.id)}
          type="button"
        >
          {value}
        </button>
      ),
  },
  {
    key: 'company',
    title: 'Company',
    width: '20%',
  },
  {
    key: 'phoneNumber',
    title: 'Phone Number',
    width: '15%',
  },
  {
    key: 'email',
    title: 'Email',
    width: '20%',
  },
  {
    key: 'country',
    title: 'Country',
    width: '15%',
  },
  {
    key: 'status',
    title: 'Status',
    width: '10%',
    render: (value: string) => (
      <span className={`${styles.status} ${styles[value.toLowerCase()]}`}>
        {value}
      </span>
    ),
  },
];



  return (
    <div className={styles.customersTable}>
      {/* Заголовок таблицы */}
      <div className={styles.tableHeader}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>All Customers</h2>
          <span className={styles.subtitle}>Active Members</span>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.searchContainer}>
            <Input  
               type="text"
               search
               value={searchQuery}
               onChange={handleSearchChange}
               placeholder="Search..."
               className={styles.searchInput}/>
             <button 
              className={styles.filterButton}
              onClick={handleApplyFilter}
              type="button"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Сама таблица */}
      {/* <Table>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.th}>Customer Name</th>
            <th className={styles.th}>Company</th>
            <th className={styles.th}>Phone Number</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Country</th>
            <th className={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id} className={styles.tr}>
              <td className={styles.td}>{customer.customerName}</td>
              <td className={styles.td}>{customer.company}</td>
              <td className={styles.td}>{customer.phoneNumber}</td>
              <td className={styles.td}>{customer.email}</td>
              <td className={styles.td}>{customer.country}</td>
              <td className={styles.td}>
                <span className={`${styles.status} ${styles[customer.status.toLowerCase()]}`}>
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}


      <NewTable
  data={filteredCustomers}
  columns={columns}
  rowKey="id"
  className={styles.customersTable}
  emptyText={`No customers found for "${activeFilter}"`}
  onRowClick={(customer) => console.log('Clicked:', customer)}
/>
    </div>
  );
};

export default CustomersTable;