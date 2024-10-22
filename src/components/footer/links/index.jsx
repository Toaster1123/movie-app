import React from 'react';

import style from './links.module.scss';

export const Links = () => {
  return (
    <ul className={style.links}>
      <li className={style.links_main}>
        <li className={style.link_li}>
          <h2>Okke</h2>
        </li>
        <li className={style.link_li}>О нас</li>
        <li className={style.link_li}>Сотрудничество </li>
        <li className={style.link_li}>Агенты</li>
      </li>
      <li className={style.links_main}>
        <li className={style.link_li}>
          <h2>Помощь</h2>
        </li>
        <li className={style.link_li}>Вопросы и ответы </li>
        <li className={style.link_li}>Дестрибьютерам</li>
        <li className={style.link_li}>Контакты</li>
      </li>
      <li className={style.links_main}>
        <li className={style.link_li}>
          <h2>Другое</h2>
        </li>
        <li className={style.link_li}>Акции и предложения </li>
        <li className={style.link_li}>Сертификаты</li>
      </li>
    </ul>
  );
};
