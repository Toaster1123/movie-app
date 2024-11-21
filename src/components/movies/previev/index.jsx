import React from 'react';
import style from './previev.module.scss';

export const Previev = ({ title, text }) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className={style.main}>
      <div className={style.title}>{title}</div>
      <div className={style.info}>{toggle ? text : text.substring(0, 80) + '...'}</div>
      {toggle || (
        <div
          onClick={() => {
            setToggle(true);
          }}
          className={style.showMore}>
          Читать всё
        </div>
      )}
    </div>
  );
};
