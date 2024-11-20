import { useEffect, useState } from 'react';
import style from './selector.module.scss';
import { openSelectorBar } from '../../../../store/openSelectorBar';
import { urlParams } from '../../../../store/urlParams';

export const Button = () => {
  const [onClick, setOnClick] = useState(false);
  const { setHightRating, hightRating } = urlParams((state) => state);
  const { paramCount, incParamCount, decParamCount } = openSelectorBar((state) => state);
  useEffect(() => {
    if (hightRating != undefined) {
      setOnClick(true);
      incParamCount();
    }
  }, [hightRating]);

  useEffect(() => {
    if (paramCount == 0) {
      setOnClick(false);
      setHightRating(undefined);
    }
  }, [paramCount]);
  useEffect(() => {
    if (onClick) {
      setHightRating('7.2-10');
    }
  }, [onClick]);

  return (
    <div className={style.main}>
      <div
        onClick={() => {
          setOnClick(!onClick);
          !onClick ? incParamCount() : decParamCount();
        }}
        className={`${style.title} ${onClick && paramCount > 0 ? style.title_active : ''}`}>
        Высокий рейтинг
      </div>
    </div>
  );
};
