import { useCallback, useState } from 'react';
import style from './search.module.scss';
import { Search } from 'lucide-react';
import { useSerchFilms } from '../../../store/requests/search';
import debounce from 'lodash.debounce';
import { FilmBlock } from './film-block';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const { films, fetchItems } = useSerchFilms((state) => state);
  const debonse = useCallback(
    debounce((value) => {
      fetchItems(value);
    }, 800),
    [],
  );
  const changeValue = (e) => {
    setValue(e.target.value);
    debonse(value);
  };

  return (
    <div className={style.main}>
      {/* <div className={`${value.length > 0 ? style.overlay : ''}`}></div> */}
      <div>
        <div className={`${style.input} ${isActive ? style.activeInput : ''}`}>
          <input disabled={!isActive} onChange={changeValue} value={value} type="text" />
          {value.length > 0 && <div onClick={() => setValue('')}>x</div>}
        </div>
        <div className={style.filmsArray}>
          {films.map((item) => {
            if (item.backdrop.url == null) {
              return;
            }
            return (
              <FilmBlock id={item.id} key={item.id} url={item.backdrop.url} filmName={item.name} />
            );
          })}
        </div>
      </div>
      <Search
        onClick={() => {
          setIsActive(!isActive);
          setValue('');
        }}
        className={style.search}
      />
    </div>
  );
};
