import { Check, ChevronDown } from 'lucide-react';
import style from './selector.module.scss';
import { openSelectorBar } from '../../../../store/openSelectorBar';
import { useEffect, useState } from 'react';
import { urlParams } from '../../../../store/urlParams';

const years = [
  { name: '2024', reqName: '2024' },
  { name: '2023', reqName: '2023' },
  { name: '2022', reqName: '2022' },
  { name: '2021', reqName: '2021' },
  { name: '2020', reqName: '2020' },
  { name: '2010-2019', reqName: '2010-2019' },
  { name: '2000-2009', reqName: '2000-2009' },
  { name: '1990-1999', reqName: '1990-1999' },
  { name: '1980-1989', reqName: '1980-1989' },
  { name: 'до 1980', reqName: '1970-1980' },
];
export const YearSelector = ({ loading }) => {
  const id = 3;
  const { incParamCount, paramCount, setOpened, opened } = openSelectorBar((state) => state);
  const { setYear, year } = urlParams((state) => state);

  const [isSelect, setIsSelect] = useState(null);
  const handleSelectOption = (id) => {
    setIsSelect(id);
    setYear(years[id].reqName);
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
    if (year != undefined && isSelect == null) {
      setIsSelect(years.findIndex((item) => item.reqName === year));
      incParamCount();
    }
  }, [year]);

  useEffect(() => {
    if (paramCount == 0) {
      setYear(undefined);
      setOpened(null);
      setIsSelect(null);
    }
  }, [paramCount]);
  return (
    <div className={style.main}>
      <button
        disabled={loading}
        onClick={() => {
          changeSelect(id);
        }}
        className={style.title}>
        <div className={style.text}>
          {paramCount > 0 && isSelect != null ? years[isSelect].name : 'Годы'}
        </div>
        <div className={`${style.arrow} ${opened == id ? style.activeArrow : ''}`}>
          <ChevronDown size={21} strokeWidth={1.25} />
        </div>
      </button>
      <div className={`${style.options} ${opened == id ? style.activeMenu : ''}`}>
        {years.map((item, id) => (
          <div
            onClick={() => {
              handleSelectOption(id);
            }}
            key={id}
            className={style.option}>
            <div className={style.genre}>{item.name}</div>
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
