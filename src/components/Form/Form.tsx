import React from 'react';
import { useForm } from 'react-hook-form';
import { FormProps } from './index';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import HookForm from '../HookForm/HookForm';

const Form: React.FC<any> = ({
  fields,
  onSubmit,
  initialData = {},
  onCancel,
  onChange,
  value,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  const onSub = (data:any) => {
    console.log(data);
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                   <div className={styles.formGroup}>
                     <label htmlFor="customerName" className={styles.label}>
                       Customer Name
                     </label>
                     <input
                       type="text"
                       id="customerName"
                       value={value.customerName}
                       className={styles.input}
                       {...register('e-mail',{
                            required: 'This field is required'
                        })}
                        onChange={onChange}
                        name="customerName"
                     />
                      {/* <Input
                      name="customerName"
                       onChange={onChange}
                      placeholder='Enter email' register={{...register('e-mail',{
            required: 'This field is required'
        })}} /> */}
                   </div>
                   
                   <div className={styles.formGroup}>
                     <label htmlFor="company" className={styles.label}>
                       Company
                     </label>
                     <input
                       type="text"
                       id="company"
                       name="company"
                        value={value.company}
                       onChange={onChange}
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
                          value={value.phoneNumber}
                       onChange={onChange}
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
                         value={value.email}
                       onChange={onChange}
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
                       value={value.country}
                       onChange={onChange}
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
                        value={value.status}
                       onChange={onChange}
                       className={styles.select}
                     >
                       <option value="Active">Active</option>
                       <option value="Inactive">Inactive</option>
                     </select>
                   </div>
                   
                   <div className={styles.buttons}>
                     <button type="button"  className={styles.cancelButton}>
                       Cancel
                     </button>
                     <button onClick={onSub} type="submit" className={styles.saveButton}>
                       Save Changes
                     </button>
                   </div>
    </form>
  );
};

export default Form;