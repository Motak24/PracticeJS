import cn                        from 'classnames';
import React, { type ReactNode } from 'react';
import { NavLink }               from 'react-router-dom';

import styles                    from './Link.module.scss';

interface TLink {
  children:   ReactNode;
  to:         string;
  className?: string;
}

export const Link = (props: TLink) => {
  const {
    children,
    to,
    className = ''
  } = props;

  return (
    <NavLink
      className = {cn(styles.link, className)} 
      to        = {to}
    >
      {children}
    </NavLink>
  )
}
