import cn               from 'classnames'

import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode
}                       from 'react'

import styles           from './Button.module.scss'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'

type ButtonSize =
  | 'xs'
  | 's'
  | 'm'
  | 'l'

interface TButton
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
}

export const Button = (props: TButton) => {
  const {
    onClick,
    variant = 'primary',
    size = 'm',
    fullWidth = false,
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    children,
    className = '',
    type = 'button',
    ...otherProps
  } = props

  const isDisabled = disabled || loading

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      e.preventDefault()
      return
    }

    onClick?.(e)
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      className={cn(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        {
          [styles['button--fullWidth']]: fullWidth,
          [styles['button--loading']]: loading,
          [styles['button--disabled']]: isDisabled,
          [styles['button--iconOnly']]:
            !children && (leftIcon || rightIcon),
        },
        className
      )}
      {...otherProps}
    >
      {leftIcon && (
        <span className={styles.buttonIcon}>
          {leftIcon}
        </span>
      )}

      {children && (
        <span className={styles.buttonLabel}>
          {children}
        </span>
      )}

      {rightIcon && (
        <span className={styles.buttonIcon}>
          {rightIcon}
        </span>
      )}
    </button>
  )
}
