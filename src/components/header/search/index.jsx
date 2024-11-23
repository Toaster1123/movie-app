import { useCallback, useEffect, useState } from 'react';
import style from './search.module.scss';
import { Search } from 'lucide-react';
import { useSerchFilms } from '../../../store/requests/search';
import debounce from 'lodash.debounce';
import { FilmBlock } from './film-block';

export const SearchBar = ({ visible }) => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const { films, setFilms, fetchItems } = useSerchFilms((state) => state);
  const debonse = useCallback(
    debounce((value) => {
      fetchItems(value);
    }, 1000),
    [],
  );
  const changeValue = (e) => {
    setValue(e.target.value);
    debonse(value);
  };
  useEffect(() => {
    setIsActive(false);
    setValue('');
    setFilms();
  }, [window.location.href]);

  return (
    <>
      <div className={style.main}>
        <div>
          <div className={`${style.input} ${isActive ? style.activeInput : ''}`}>
            <input disabled={!isActive} onChange={changeValue} value={value} type="text" />
            {value.length > 0 && (
              <div
                onClick={() => {
                  setValue('');
                  setFilms();
                }}>
                x
              </div>
            )}
          </div>

          <div className={`${style.filmsArray} ${!visible ? style.filmsArray_hide : ''}`}>
            {films.map((item) => {
              if (item.backdrop.url == null) {
                return;
              }
              return (
                <FilmBlock
                  id={item.id}
                  key={item.id}
                  url={item.backdrop.url}
                  filmName={item.name}
                />
              );
            })}
          </div>
        </div>

        <Search
          onClick={() => {
            setIsActive(!isActive);
            setValue('');
            setFilms();
          }}
          className={style.search}
        />
      </div>
    </>
  );
};
