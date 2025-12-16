import cn               from 'classnames'

import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode
}                       from 'react'

import styles           from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize    = 'xs' | 's' | 'm' | 'l';

interface TButton extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick:       (e: MouseEvent<HTMLButtonElement>) => void;
  className?:    string;
  variant?:      ButtonVariant;
  size?:         ButtonSize;
  icon?:         ReactNode;
}

export const Button = (props: TButton) => {
  const {
    onClick,
    children,
    className = '',
    disabled  = false,
    variant   = 'primary',
    size      = 'm',
    icon,
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
