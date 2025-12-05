import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Customer } from '../types/customer';
import { customersData } from '../data/customers';

interface CustomersContextType {
  customers: Customer[];
  updateCustomer: (id: string, updatedData: Partial<Customer>) => void;
  getCustomerById: (id: string) => Customer | undefined;
}

const CustomersContext = createContext<CustomersContextType | undefined>(undefined);

export const CustomersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>(customersData);

  // Функция для обновления клиента
  const updateCustomer = (id: string, updatedData: Partial<Customer>) => {
    setCustomers(prev => 
      prev.map(customer => 
        customer.id === id 
          ? { ...customer, ...updatedData }
          : customer
      )
    );
  };

  // Функция для поиска клиента по ID
  const getCustomerById = (id: string) => {
    return customers.find(customer => customer.id === id);
  };

  return (
    <CustomersContext.Provider value={{ customers, updateCustomer, getCustomerById }}>
      {children}
    </CustomersContext.Provider>
  );
};

// Хук для использования контекста
export const useCustomers = () => {
  const context = useContext(CustomersContext);
  if (!context) {
    throw new Error('useCustomers must be used within CustomersProvider');
  }
  return context;
};