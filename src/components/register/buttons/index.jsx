import React from 'react';
import style from './buttons.module.scss';

export const Buttons = ({ enter }) => {
  return (
    <div className={style.main}>
      <button className={style.continue}>{enter ? 'Продолжить' : 'Войти'}</button>
      <div className={style.or}>или</div>
      <button className={style.continue_G}>
        <img height={30} width={30} src="/img/svg/google.svg" />
        <div className={style.text}>Вход с аккаунтом Google</div>
      </button>
    </div>
  );
};
