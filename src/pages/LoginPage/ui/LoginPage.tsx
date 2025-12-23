import React, { useState } from 'react'

import LogoIcon            from '@/shared/assets/icons/LogoPlaceholder.svg';
import ArrowRightIcon      from '@/shared/assets/icons/ArrowRight.svg';
import { loginFetch }      from '@/shared/libs/fetch/fetch';
import { useAppDispatch }  from '@/shared/libs/hooks/rtkHooks';
import { Button }          from '@/shared/ui/Button';
import { Input }           from '@/shared/ui/Input';
import { Link }            from '@/shared/ui/Link';

import styles              from './LoginPage.module.scss';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = () => {
    dispatch(loginFetch({email, password}));
  };

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
            placeholder = "Email"
            onChange    = {(value) => setEmail(value)}
            value       = {email}
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
          variant   = "primary"
          size      = "l"
          className = {styles.loginButton}
          >
            Log In
            <ArrowRightIcon />
          </Button>
          
        </form>
        <p> Don`t already have an account?</p>
        <Link to = "/register">Create an account</Link>
      </section>
    </main>
  )
}
