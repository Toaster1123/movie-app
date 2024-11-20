import { Check, ChevronDown } from 'lucide-react';
import style from './selector.module.scss';
import { openSelectorBar } from '../../../../store/openSelectorBar';
import { useEffect, useState } from 'react';
import { urlParams } from '../../../../store/urlParams';
const countries = ['Россия', 'США'];

export const CountrySelector = () => {
  const id = 2;
  const { incParamCount, paramCount, setOpened, opened } = openSelectorBar((state) => state);
  const { setCountry, country } = urlParams((state) => state);

  const [isSelect, setIsSelect] = useState(null);
  const handleSelectOption = (id) => {
    setIsSelect(id);
    setCountry(countries[id]);
    setOpened(null);
    if (isSelect == null) {
      incParamCount();
    }
  };
  const changeSelect = (id) => {
    if (opened == id) {
      setOpened(null);
    } else {
      setOpened(id);
    }
  };
  useEffect(() => {
    if (country != undefined) {
      setIsSelect(countries.findIndex((item) => item === country));
      incParamCount();
    }
  }, [country]);

  useEffect(() => {
    if (paramCount == 0) {
      setCountry(undefined);
      setOpened(null);
      setIsSelect(null);
    }
  }, [paramCount]);

  return (
    <div className={style.main}>
      <div
        onClick={() => {
          changeSelect(id);
        }}
        className={style.title}>
        <div className={style.text}>
          {paramCount > 0 && isSelect != null ? countries[isSelect] : 'Страны'}
        </div>
        <div className={`${style.arrow} ${opened == id ? style.activeArrow : ''}`}>
          <ChevronDown size={21} strokeWidth={1.25} />
        </div>
      </div>
      <div className={`${style.options} ${opened == id ? style.activeMenu : ''}`}>
        {countries.map((item, id) => (
          <div
            onClick={() => {
              handleSelectOption(id);
            }}
            key={id}
            className={style.option}>
            <div className={style.genre}>{item}</div>
            <div
              className={`${style.selected} ${
                isSelect === id && paramCount > 0 && style.selectedTrue
              }`}>
              <Check strokeWidth={1.25} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
