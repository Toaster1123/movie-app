import React from 'react';
import style from './input.module.scss';

import { Eye, EyeOff, Calendar } from 'lucide-react';

export const Inputs = ({ enter }) => {
  const [isHide, setIsHide] = React.useState(true);
  const [nav, setNav] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleValue = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    setValue('');
  }, [enter]);

  const handleFocus = () => {
    setNav(true);
  };
  const handleBlur = () => {
    setNav(false);
  };
  return (
    <div className={style.main}>
      <div className={style.inputBlock}>
        <div className={style.title}>Адрес электронной почты</div>
        <div className={style.input}>
          <input type="email" placeholder="Введиете адрес эл. почты" />
        </div>
      </div>
      <div className={style.inputBlock}>
        <div className={style.title}>Пароль</div>
        <div className={style.input}>
          <input
            onChange={(event) => handleValue(event)}
            value={value}
            type={isHide ? 'password' : 'text'}
            placeholder={enter ? 'Создайте пароль' : 'Пароль'}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isHide ? (
            <Eye
              onClick={() => {
                setIsHide(false);
              }}
              color="#c7c7c7"
              className={`${style.svg} ${nav ? style.svgHiden : ''}`}
              strokeWidth={2.3}
            />
          ) : (
            <EyeOff
              onClick={() => {
                setIsHide(true);
              }}
              color="#c7c7c7"
              className={`${style.svg} ${nav ? style.svgHiden : ''}`}
              strokeWidth={2.3}
            />
          )}
        </div>
        {enter || (
          <div className={style.forgot}>
            <a href="https://ru.pinterest.com/password/reset/">Забыли пароль?</a>
          </div>
        )}
      </div>
      {enter && (
        <div className={style.inputBlock}>
          <div className={style.title}>Дата рождения</div>
          <div className={style.input}>
            <input type="date" placeholder="дд.мм.гггг" />
            {/* <Calendar color="#c7c7c7" className={style.svg} strokeWidth={2.5} /> */}
          </div>
        </div>
      )}
    </div>
  );
};
