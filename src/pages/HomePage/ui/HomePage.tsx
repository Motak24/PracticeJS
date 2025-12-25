import React              from 'react';

import LogoIcon           from '@/shared/assets/icons/LogoPlaceholder.svg';
import { Link }           from '@/shared/ui/Link';
import { useAppSelector } from '@/shared/libs/hooks/rtkHooks';

import styles             from './HomePage.module.scss';

export const HomePage = () => {
  const currentUserId = useAppSelector(state => state.user.userId);

  return (
    <main className = {styles.homePage}>

      <section className = {styles.homePage__logo}>
        <div className = {styles.homePage__logoWrapper}>
          <LogoIcon/>
          <h1 className = {styles.homePage__logoText}>
            Портал нарушений
          </h1>
        </div>
      </section>

      <section className = {styles.homePage__content}>
        {currentUserId && (
          <section className = {styles.homePage__authSection}>
            <h2 className = {styles.homePage__title}>
              Добро пожаловать!
            </h2>
            <p className = {styles.homePage__text}>
              Здесь вы можете просмотреть свои заявления
            </p>

            <Link
              className = {styles.homePage__link}
              to        = "/my-statements"
            >
              Перейти к моим заявлениям
            </Link>
          </section>
        )}

        {!currentUserId && (
          <section className = {styles.homePage__guestSection}>
            <h2 className = {styles.homePage__title}>
              Похоже, вы не зарегистрированы
            </h2>
            <p className = {styles.homePage__text}>
              Войдите в аккаунт или зарегистрируйтесь, чтобы подать заявление
            </p>

            <div className = {styles.homePage__actions}>
              <Link
                className = {styles.homePage__link} 
                to        = "/login"
              >
                Войти
              </Link>
              <Link
                className = {styles.homePage__link}
                to        = "/register"
              >
                Регистрация
              </Link>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};
