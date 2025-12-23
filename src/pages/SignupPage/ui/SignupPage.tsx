import React, { useState } from 'react'

import LogoIcon       from '@/shared/assets/icons/LogoPlaceholder.svg'
import ArrowRightIcon from '@/shared/assets/icons/ArrowRight.svg'
import { Input }      from '@/shared/ui/Input'
import { Button }     from '@/shared/ui/Button'
import { Link }       from '@/shared/ui/Link'

import styles from './SignupPage.module.scss'

export const SignupPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [confirm, setConfirm]     = useState('')

  const handleSubmit = () => {}

  return (
    <main className={styles.signupPage}>
      <header className={styles.signupPage__header}>
        <LogoIcon />
        <span className={styles.signupPage__appName}>Портал нарушений</span>
      </header>

      <section className={styles.signupPage__card}>
        <h1 className={styles.signupPage__title}>Sign Up</h1>

        <form className={styles.signupPage__form}>
          <div className={styles.signupPage__row}>
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={setFirstName}
            />
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={setLastName}
            />
          </div>

          <Input
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <Input
            placeholder="Create a Password"
            type="password"
            value={password}
            onChange={setPassword}
            showPassword
          />

          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirm}
            onChange={setConfirm}
            showPassword
          />

          <Button
            size="l"
            variant="primary"
            onClick={handleSubmit}
            className={styles.signupPage__button}
          >
            <span className={styles.signupPage__buttonContent}>
              Sign Up
              <ArrowRightIcon />
            </span>
          </Button>
        </form>

        <p className={styles.signupPage__footer}>
          Already have an account?
        </p>
        
          <Link to="/login">Log In</Link>
      </section>
    </main>
  )
}
