import React, { useState } from 'react'

import { Input } from '@/shared/ui/Input'

import styles    from './LoginPage.module.scss'

export const LoginPage = () => {
  const [login,    setLogin]    = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className = {styles.loginPage}>
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
        </form>
      </section>
    </main>
  )
}
