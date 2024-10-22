import React from 'react';

import { Links } from './links';
import { Contacts } from './contacts';
import { Copyright } from './copyright';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <div className={style.footer_top}>
        <Contacts />
        <Links />
      </div>
      <Copyright />
    </footer>
  );
};
