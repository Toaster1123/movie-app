import React from 'react';
import { Facebook, MessageSquareText, Instagram, Twitter, Youtube } from 'lucide-react';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
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
      <ul className={style.links}>
        <li className={style.links_main}>
          <li className={style.link_li}>
            <h2>Глаз</h2>
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
      <div className={style.copyright}>
        <div className={style.logo}>
          <img src="/img/logo.png" alt="Логотип" height={30} width={30} />
        </div>
        <div className={style.copyright_text}>
          <p>© 2012-2024 ООО «Глаз» 18+</p>{' '}
          <p>Общероссийские каналы доступны для бесплатного просмотра круглосуточно</p>
          <p>ПО ООО «Глаз» состоит в реестре отечественного ПО</p>
          <p> Пользовательские соглашения Политика конфиденциальности</p>
          <p>
            На информационном ресурсе применяются рекомендательные технологии в соответствии с
            Правилами
          </p>
        </div>
      </div>
    </footer>
  );
};
