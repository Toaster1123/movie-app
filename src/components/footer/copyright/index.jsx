import React from 'react';

import style from './copyright.module.scss';

export const Copyright = () => {
  return (
    <div className={style.copyright}>
      <div className={style.logo}>
        <img src="/img/logo.png" alt="Логотип" height={41} width={41} />
      </div>
      <div className={style.copyright_text}>
        <p>© 2012-2024 ООО «Okke» 18+</p>{' '}
        <p>Общероссийские каналы доступны для бесплатного просмотра круглосуточно</p>
        <p>ПО ООО «Okke» состоит в реестре отечественного ПО</p>
        <p>
          Пользовательские соглашения Политика конфиденциальности На информационном ресурсе
          применяются рекомендательные технологии в соответствии с Правилами
        </p>
      </div>
    </div>
  );
};
