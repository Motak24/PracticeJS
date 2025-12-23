import cn             from 'classnames'
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useState
}                     from 'react'

import ClearIcon      from '@/shared/assets/icons/ClearIcon.svg'
import EyeIcon        from '@/shared/assets/icons/Eye.svg'
import EyeCloseIcon   from '@/shared/assets/icons/EyeClosed.svg'

import styles         from './Input.module.scss'

interface TInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  onChange:      (value: string) => void;
  value:         string;
  showPassword?: boolean;
  showClear?:    boolean;
  className?:    string;
  disabled?:     boolean;
}

export const Input = (props: TInput) => {
  const {
    onChange,
    value,
    showPassword = false,
    placeholder  = '',
    showClear    = false,
    className    = '',
    disabled     = false,
    type         = 'text',
    ...otherProps
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focused,         setFocused]         = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return
    };

    onChange(e.target.value);
  }

  const handleClearInput = () => {
    onChange('');
    setFocused(false);
  }

  const handleOnFocus = () => {
    setFocused(true);
  }

  const handleOnBlur = () => {
    setFocused(false);
  }

  return (
    <div
      className = {cn(styles.input, className, {
        [styles['input--inputWithFocus']]: value || focused,
        [styles['input--disabled']]:       disabled
      })}
      onFocus   = {handleOnFocus}
      onBlur    = {handleOnBlur}
    >
      <div className = {styles.inputWrapper}>
        {(value || focused) && <p className = {styles.inputLabel}>{placeholder}</p>}
        <input
          placeholder = {focused ? '' : placeholder}
          className   = {cn(styles.inputField)}
          onChange    = {handleInputChange}
          value       = {value}
          type        = {type === 'password' && passwordVisible ? 'text' : type}
          {...otherProps}
        />
      </div>
      {(showClear || showPassword) && (
        <div className = {styles.inputControl}>
          {showClear && value && (
            <button onClick = {handleClearInput}>
              <ClearIcon />
            </button>
          )}
          {showPassword && !passwordVisible && value && (
              <button onClick = {() => setPasswordVisible(true)}>
                <EyeCloseIcon />
              </button>
          )}
          {showPassword && passwordVisible && value && (
            <button onClick = {() => setPasswordVisible(false)}>
                <EyeIcon />
              </button>
          )}
        </div>
      )}
    </div>
  )
}
