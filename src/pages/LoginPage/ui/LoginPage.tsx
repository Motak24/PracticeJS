import React, { useState } from 'react'

import LogoIcon            from '@/shared/assets/icons/LogoPlaceholder.svg'
import ArrowRightIcon      from '@/shared/assets/icons/ArrowRight.svg'
import { Button }          from '@/shared/ui/Button'
import { Input }           from '@/shared/ui/Input'
import { Link }            from '@/shared/ui/Link'

import styles              from './LoginPage.module.scss'

export const LoginPage = () => {
  const [login,    setLogin]    = useState('')
  const [password, setPassword] = useState('')

  const handleButtonClick = () => {}

  return (
    <main className = {styles.loginPage}>

    <section className = {styles.loginPage__logo}>
        <div className = {styles.loginPage__logoWrapper}>
          <LogoIcon />
          <h1 className = {styles.loginPage__logoText}>
            Портал нарушений
          </h1>
        </div>
      </section>

      <section className = {styles.loginPage__content}>
        <h1 className = {styles.loginPage__title}>Log In</h1>
        <form className = {styles.loginPage__form}>
          <Input
            placeholder = "Login"
            onChange    = {(value) => setLogin(value)}
            value       = {login}
            type        = "text"
            showClear
          />
          <Input
            placeholder = "Password"
            onChange    = {(value) => setPassword(value)}
            value       = {password}
            type        = "password"
            showPassword
          />
         <Button 
          onClick   = {handleButtonClick}
          size      = "l"
          variant   = "primary"
          className = {styles.loginButton}
          >

          <span className={styles.loginButtonContent}>
          Log In
          <ArrowRightIcon />
          </span>
          </Button>
          
        </form>
        <p> Don`t already have an account?</p>
        <Link to = "/register">Create an account</Link>
      </section>
    </main>
  )
}
