import React    from 'react';

import LogoIcon from '@/shared/assets/icons/LogoPlaceholder.svg';
import { Link } from '@/shared/ui/Link';

import styles   from './MyStatementsPage.module.scss';

export const MyStatementsPage = () => {
  return (
    <main className = {styles.myStatementsPage}>

      <Link to = "/" className = {styles.myStatementsPage__link}>
        <section className = {styles.myStatementsPage__logo}>
          <div className = {styles.myStatementsPage__logoWrapper}>
            <LogoIcon />
            <h1 className = {styles.myStatementsPage__logoText}>Мои заявления</h1>
          </div>
        </section>
      </Link>

      <section className = {styles.myStatementsPage__content}>

        <section className = {styles.myStatementsPage__card}>
          <h2 className = {styles.myStatementsPage__title}>Заявление 1</h2>
          <p className = {styles.myStatementsPage__status}>Статус: На рассмотрении</p>
          <Link to = "/statements/1" className = {styles.myStatementsPage__link}>
            Подробнее
          </Link>
        </section>

        <section className = {styles.myStatementsPage__card}>
          <h2 className = {styles.myStatementsPage__title}>Заявление 2</h2>
          <p className = {styles.myStatementsPage__status}>Статус: Одобрено</p>
          <Link to = "/statements/2" className = {styles.myStatementsPage__link}>
            Подробнее
          </Link>
        </section>

        <section className = {styles.myStatementsPage__card}>
          <h2 className = {styles.myStatementsPage__title}>Заявление 3</h2>
          <p className = {styles.myStatementsPage__status}>Статус: Отклонено</p>
          <Link to = "/statements/3" className = {styles.myStatementsPage__link}>
            Подробнее
          </Link>
        </section>

      </section>

    </main>
  );
};

