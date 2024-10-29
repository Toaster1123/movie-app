import React from 'react';
import style from './register.module.scss';
import { X } from 'lucide-react';

import { Inputs } from './input';
import { Buttons } from './buttons';

import { isOpened } from '../../store/openUser';
export const Register = () => {
  const opened = isOpened((state) => state.opened);
  const setOpened = isOpened((state) => state.setOpened);
  return (
    <div className={`${style.overlay} ${opened ? style.overlayVisible : ``}`}>
      <div className={style.main}>
        <div
          onClick={() => {
            setOpened(false);
          }}
          className={style.buttonClose}>
          <X strokeWidth={3} className={style.close} />
        </div>
        <div className={style.title}>Добро пожаловать в Okke</div>
        <Inputs />
        <Buttons />
        <div className={style.copyright}>
          Продолжая, вы соглашаетесь с положениями основных документов Pinterest —{' '}
          <a href="https://policy.pinterest.com/ru/terms-of-service">
            Условия предоставления услуг
          </a>{' '}
          и <a href="https://policy.pinterest.com/ru/privacy-policy">Политика конфиденциальности</a>{' '}
          — и подтверждаете, что прочли их.{' '}
          <a href="https://policy.pinterest.com/ru/notice-at-collection"> Уведомление</a> .
        </div>
        <div className={style.checkReg}>
          Уже зарегестрировались? <span> Войти</span>
        </div>
      </div>
    </div>
  );
};
