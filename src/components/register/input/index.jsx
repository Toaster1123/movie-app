import React from 'react';
import style from './input.module.scss';

import { Eye, EyeOff, Calendar } from 'lucide-react';

export const Inputs = () => {
  const [isHide, setIsHide] = React.useState(true);
  return (
    <div className={style.main}>
      <div className={style.inputBlock}>
        <div className={style.title}>Адрес электронной почты</div>
        <div className={style.input}>
          <input type="mail" placeholder="Введиете адрес эл. почты" />
        </div>
      </div>
      <div className={style.inputBlock}>
        <div className={style.title}>Пароль</div>
        <div className={style.input}>
          <input type={isHide ? 'password' : 'text'} placeholder="Создайте пароль" />
          {isHide ? (
            <Eye
              onClick={() => {
                setIsHide(!isHide);
              }}
              color="#c7c7c7"
              className={style.svg}
              strokeWidth={2.3}
            />
          ) : (
            <EyeOff
              onClick={() => {
                setIsHide(!isHide);
              }}
              color="#c7c7c7"
              className={style.svg}
              strokeWidth={2.3}
            />
          )}
        </div>
      </div>
      <div className={style.inputBlock}>
        <div className={style.title}>Дата рождения</div>
        <div className={style.input}>
          <input placeholder="дд.мм.гггг" />
          <Calendar color="#c7c7c7" className={style.svg} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};
