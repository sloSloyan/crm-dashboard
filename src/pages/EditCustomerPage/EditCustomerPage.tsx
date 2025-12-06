import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { customersData } from '../../data/customers';
import styles from './EditCustomerPage.module.scss';
import { useCustomers } from '../../context';
import Form from '../../components/Form/Form';
import { FormField } from '../../components/Form';
import HookForm from '../../components/HookForm/HookForm';
import { CustomerFormData } from '../../schemas/customerSchema';

const EditCustomerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID из URL
  const navigate = useNavigate();

   const [initialData, setInitialData] = useState<any>({});

    const { getCustomerById, updateCustomer } = useCustomers(); // Используем хук
  
  // Состояние формы
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    phoneNumber: '',
    email: '',
    country: '',
    status: 'Active' as 'Active' | 'Inactive',
  });
  
//   // Находим клиента по ID
//   useEffect(() => {
//     if (id) {
//       const customer = customersData.find(c => c.id === id);
//       if (customer) {
//         setFormData({
//           customerName: customer.customerName,
//           company: customer.company,
//           phoneNumber: customer.phoneNumber,
//           email: customer.email,
//           country: customer.country,
//           status: customer.status,
//         });
//       }
//     }
//   }, [id]);

//   Находим клиента по ID через контекст
  useEffect(() => {
    if (id) {
      const customer = getCustomerById(id);
      if (customer) {
        setFormData({
          customerName: customer.customerName,
          company: customer.company,
          phoneNumber: customer.phoneNumber,
          email: customer.email,
          country: customer.country,
          status: customer.status,
        });
      }
    }
  }, [id, getCustomerById]);

//  useEffect(() => {
//     if (id) {
//       const customer = getCustomerById(id);
//       if (customer) {
//         setInitialData({
//           customerName: customer.customerName,
//           company: customer.company,
//           phoneNumber: customer.phoneNumber,
//           email: customer.email,
//           country: customer.country,
//           status: customer.status,
//         });
//       }
//     }
//   }, [id, getCustomerById]);
  
  // Обработчики изменений формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleSubmit = (data: CustomerFormData) => {
    // e.preventDefault();
    
    if (!id) return;
    
    // Сохраняем изменения в контекст
    updateCustomer(id, data);
    
    alert('Customer updated successfully!');
    navigate('/'); // Возвращаемся на главную
  };
  
  const handleCancel = () => {
    navigate('/'); // Возвращаемся на главную
  };
  
  if (!id) {
    return <div>Customer ID not provided</div>;
  }

  const formFields: FormField[] = [
    {
      name: 'customerName',
      label: 'Customer Name',
      type: 'text',
      required: true,
      placeholder: 'Enter customer name',
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      required: true,
      placeholder: 'Enter company name',
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'tel',
      required: true,
      placeholder: 'Enter phone number',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Enter email address',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      required: true,
      placeholder: 'Enter country',
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      options: [
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
      ],
    },
  ];

  if (!formData.customerName) {
  return <div>Loading...</div>;
}
  
  return (
    <div className={styles.editPage}>
      <h1 className={styles.title}>Edit Customer</h1>
      <p className={styles.subtitle}>Editing: {formData.customerName} (ID: {id})</p>
      
      {/* <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="customerName" className={styles.label}>
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="company" className={styles.label}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="country" className={styles.label}>
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="status" className={styles.label}>
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        
        <div className={styles.buttons}>
          <button type="button" onClick={handleCancel} className={styles.cancelButton}>
            Cancel
          </button>
          <button type="submit" className={styles.saveButton}>
            Save Changes
          </button>
        </div>
      </form> */}

      {/* <Form
        //   fields={formFields}
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isLoading={false}
        onChange={handleChange}
        value={formData}
      /> */}

      <HookForm    
      key={formData.customerName}
        fields={formFields}
         value={formData}
        initialData={formData}
         onChange={handleChange}
        onSubmit={handleSubmit} />
    </div>
  );
};

export default EditCustomerPage;