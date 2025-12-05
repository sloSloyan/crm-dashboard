import React from 'react';
import searchIcon from './icon/search.png'
import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Пропсы для иконки поиска
  search?: boolean;
  // Кастомный className для стилизации
  className?: string;
  // Добавляем пропс для react-hook-form
  register?: any;
  onChange?: any
  value?: any
}

const Input: React.FC<InputProps> = ({
  search = false,
  className = '',
  register,
  onChange,
  ...props
}) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {search && (
        <div className={styles.searchIcon}>
          {/* Здесь будет твоя картинка с лупой */}
          <img src={searchIcon} alt="" />
        </div>
      )}
      <input
        onChange={onChange}
        className={`${styles.input} ${search ? styles.inputWithIcon : ''}`}
         {...register}
        {...props}
      />
    </div>
  );
};

export default Input;