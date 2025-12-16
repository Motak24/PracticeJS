import React, { useState } from 'react'

import { Input }            from '@/shared/ui/Input'

import styles               from './LoginPage.module.scss'

import logo                 from '../../../shared/assets/icons/LogoPlaceholder.svg'

import { Button }           from '@/shared/ui/Button'

export const LoginPage = () => {
  const [login,    setLogin]    = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className = {styles.loginPage}>

    <section className={styles.loginPage__logo}>
        <div className={styles.loginPage__logoWrapper}>
          <img
            src= {logo}
            alt= "Logo"
            className={styles.loginPage__logoImage}
          />
          <h1 className={styles.loginPage__logoText}>
            Портал нарушений
          </h1>
        </div>
      </section>

      <section className = {styles.loginPage__content}>
        <h1 className = {styles.loginPage__title}>Log In</h1>
        <form className = {styles.loginPage__form}>
          <Input
            placeholder = "Login"
            onChange     = {(value) => setLogin(value)}
            value       = {login}
            type        = "text"
            showClear
          />
          <Input
            placeholder = "Password"
            onChange     = {(value) => setPassword(value)}
            value       = {password}
            type        = "password"
            showPassword
          />
         <Button onClick={() => console.log('click')}>
          Log In
          </Button>
        </form>
      </section>
    </main>
  )
}
