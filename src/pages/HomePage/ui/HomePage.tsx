import React    from 'react'

import LogoIcon from '@/shared/assets/icons/LogoPlaceholder.svg';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <main className = {styles.homePage}>
      <section className = {styles.homePage__logo}>
        <div className = {styles.homePage__logoWrapper}>
          <LogoIcon />
          <h1 className = {styles.homePage__logoText}>
            Портал нарушений
          </h1>
        </div>
      </section>
    </main>
  )
}
