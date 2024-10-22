import React from 'react';
import { Facebook, MessageSquareText, Instagram, Twitter, Youtube } from 'lucide-react';

import style from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <ul className={style.socMedia}>
        <li>
          <Facebook size={28} strokeWidth={1} />
        </li>
        <li>
          <Instagram size={28} strokeWidth={1} />
        </li>
        <li>
          <Twitter size={28} strokeWidth={1} />
        </li>
        <li>
          <Youtube size={28} strokeWidth={1} />
        </li>
      </ul>
      <button className={style.btn_help}>
        <MessageSquareText strokeWidth={1.5} />
        <div>Нужна помощь?</div>
      </button>
    </div>
  );
};
