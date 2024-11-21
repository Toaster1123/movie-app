import { Check, ChevronDown } from 'lucide-react';
import style from './selector.module.scss';
import { openSelectorBar } from '../../../../store/openSelectorBar';
import { urlParams } from '../../../../store/urlParams';
import { useEffect, useState } from 'react';
// const genres = useMovieGenres((state) => state.movieGenres);

const genres = [
  {
    name: 'аниме',
  },
  {
    name: 'биография',
  },
  {
    name: 'боевик',
  },
  {
    name: 'вестерн',
  },
  {
    name: 'военный',
  },
  {
    name: 'детектив',
  },
  {
    name: 'детский',
  },
  {
    name: 'для взрослых',
  },
  {
    name: 'документальный',
  },
  {
    name: 'драма',
  },
  {
    name: 'игра',
  },
  {
    name: 'история',
  },
  {
    name: 'комедия',
  },
  {
    name: 'концерт',
  },
  {
    name: 'короткометражка',
  },
  {
    name: 'криминал',
  },
  {
    name: 'мелодрама',
  },
  {
    name: 'музыка',
  },
  {
    name: 'мультфильм',
  },
  {
    name: 'мюзикл',
  },
  {
    name: 'новости',
  },
  {
    name: 'приключения',
  },
  {
    name: 'реальное ТВ',
  },
  {
    name: 'семейный',
  },
  {
    name: 'спорт',
  },
  {
    name: 'ток-шоу',
  },
  {
    name: 'триллер',
  },
  {
    name: 'ужасы',
  },
  {
    name: 'фантастика',
  },
  {
    name: 'фильм-нуар',
  },
  {
    name: 'фэнтези',
  },
  {
    name: 'церемония',
  },
];
export const GenreSelector = ({ loading }) => {
  const id = 1;
  const { incParamCount, paramCount, setOpened, opened } = openSelectorBar((state) => state);
  const { setGenre, genre } = urlParams((state) => state);
  const [isSelect, setIsSelect] = useState(null);
  const handleSelectOption = (id) => {
    setIsSelect(id);
    setGenre(genres[id].name);
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
    if (genre != undefined && isSelect == null) {
      setIsSelect(genres.findIndex((item) => item.name === genre));
      incParamCount();
    }
  }, [genre]);

  useEffect(() => {
    if (paramCount == 0) {
      setGenre(undefined);
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
          {paramCount > 0 && isSelect != null ? genres[isSelect].name : 'Жанры'}
        </div>
        <div className={`${style.arrow} ${opened == id ? style.activeArrow : ''}`}>
          <ChevronDown size={21} strokeWidth={1.25} />
        </div>
      </button>
      <div className={`${style.options} ${opened == id ? style.activeMenu : ''}`}>
        {genres.map((item, id) => (
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
