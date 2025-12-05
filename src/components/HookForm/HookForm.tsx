import React from 'react';
import { useForm } from 'react-hook-form';
import { FormProps } from '../Form/index';
import styles from '../Form/Form.module.scss';

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
  } = useForm({
    defaultValues: initialData,
  });

  console.log('fields = ', fields)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields!.map((field) => {
        
        
        return (
          <input
                       type="text"
                       id="customerName"
                       value={value.label}
                       className={styles.input}
                       {...register('e-mail',{
                            required: 'This field is required'
                        })}
                        onChange={() =>onChange}
                        name="customerName"
                     />
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
          onClick={onSubmit}
        >
          {isLoading ? 'Saving...' : submitText}
        </button>
      </div>
    </form>
  );
};

export default HookForm;