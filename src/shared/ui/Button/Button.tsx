import cn               from 'classnames'
import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode
}                       from 'react';

import styles           from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize    = 'xs' | 's' | 'm' | 'l';

interface TButton extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children:      ReactNode;
  onClick:       (e: MouseEvent<HTMLButtonElement>) => void;
  className?:    string;
  variant?:      ButtonVariant;
  size?:         ButtonSize;
}

export const Button = (props: TButton) => {
  const {
    children,
    onClick,
    className = '',
    disabled  = false,
    variant   = 'primary',
    size      = 'm',
    ...otherProps
  } = props


  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    onClick(e);
  }

  return (
    <button
      className = {cn(styles.button, styles[`button--${variant}`], styles[`button--${size}`], className, {
          [styles['button--disabled']]: disabled,
      })}
      disabled  = {disabled}
      onClick   = {handleClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}
