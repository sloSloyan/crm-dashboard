import React from 'react';
import { useForm } from 'react-hook-form';
import { FormProps } from '../Form/index';
import styles from '../Form/Form.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerFormData, customerSchema } from '../../schemas/customerSchema';

const HookForm: React.FC<FormProps> = ({
  fields,
  onSubmit,
  initialData = {},
  submitText = 'Save',
  cancelText = 'Cancel',
  onCancel,
  onChange,
  value,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    defaultValues: initialData,
    resolver: zodResolver(customerSchema)
  });

  console.log('fields = ', fields)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields!.map((field) => {

        const error = errors[field.name as keyof CustomerFormData];
        
        
        return (
        //   <input
        //                type="text"
        //                id="customerName"
        //                value={value.label}
        //                className={styles.input}
        //                {...register('e-mail',{
        //                     required: 'This field is required'
        //                 })}
        //                 onChange={() =>onChange}
        //                 name="customerName"
        //              />
        <>
         <input
                type={field.type}
                id={field.name}
                className={styles.input}
                placeholder={field.placeholder}
                {...register(field.name as keyof CustomerFormData)}
              />
       {error && typeof error.message === 'string' && (
  <span className={styles.error}>{error.message}</span>
)}
        </>
         
              
        );
      })}
      
      <div className={styles.buttons}>
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className={styles.cancelButton}
            disabled={isLoading}
          >
            {cancelText}
          </button>
        )}
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading}
        //   onClick={onSubmit}
        >
          {isLoading ? 'Saving...' : submitText}
        </button>
      </div>
    </form>
  );
};

export default HookForm;