import { Check, ChevronDown } from 'lucide-react';
import style from './selector.module.scss';
import { openSelectorBar } from '../../../../store/openSelectorBar';
import { urlParams } from '../../../../store/urlParams';
import { useEffect, useState } from 'react';
// const genres = useMovieGenres((state) => state.movieGenres);

const genres = [
  {
    name: 'аниме',
    slug: 'anime',
  },
  {
    name: 'биография',
    slug: 'biografiya',
  },
  {
    name: 'боевик',
    slug: 'boevik',
  },
  {
    name: 'вестерн',
    slug: 'vestern',
  },
  {
    name: 'военный',
    slug: 'voennyy',
  },
  {
    name: 'детектив',
    slug: 'detektiv',
  },
  {
    name: 'детский',
    slug: 'detskiy',
  },
  {
    name: 'для взрослых',
    slug: 'dlya-vzroslyh',
  },
  {
    name: 'документальный',
    slug: 'dokumentalnyy',
  },
  {
    name: 'драма',
    slug: 'drama',
  },
  {
    name: 'игра',
    slug: 'igra',
  },
  {
    name: 'история',
    slug: 'istoriya',
  },
  {
    name: 'комедия',
    slug: 'komediya',
  },
  {
    name: 'концерт',
    slug: 'koncert',
  },
  {
    name: 'короткометражка',
    slug: 'korotkometrazhka',
  },
  {
    name: 'криминал',
    slug: 'kriminal',
  },
  {
    name: 'мелодрама',
    slug: 'melodrama',
  },
  {
    name: 'музыка',
    slug: 'muzyka',
  },
  {
    name: 'мультфильм',
    slug: 'multfilm',
  },
  {
    name: 'мюзикл',
    slug: 'myuzikl',
  },
  {
    name: 'новости',
    slug: 'novosti',
  },
  {
    name: 'приключения',
    slug: 'priklyucheniya',
  },
  {
    name: 'реальное ТВ',
    slug: 'realnoe-TV',
  },
  {
    name: 'семейный',
    slug: 'semeynyy',
  },
  {
    name: 'спорт',
    slug: 'sport',
  },
  {
    name: 'ток-шоу',
    slug: 'tok-shou',
  },
  {
    name: 'триллер',
    slug: 'triller',
  },
  {
    name: 'ужасы',
    slug: 'uzhasy',
  },
  {
    name: 'фантастика',
    slug: 'fantastika',
  },
  {
    name: 'фильм-нуар',
    slug: 'film-nuar',
  },
  {
    name: 'фэнтези',
    slug: 'fentezi',
  },
  {
    name: 'церемония',
    slug: 'ceremoniya',
  },
];
export const GenreSelector = () => {
  const id = 1;
  const { incParamCount, paramCount, setOpened, opened } = openSelectorBar((state) => state);
  const { setGenre } = urlParams((state) => state);
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
    if (paramCount == 0) {
      setGenre('');
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
          {paramCount > 0 && isSelect != null ? genres[isSelect].name : 'Жанры'}
        </div>
        <div className={`${style.arrow} ${opened == id ? style.activeArrow : ''}`}>
          <ChevronDown size={21} strokeWidth={1.25} />
        </div>
      </div>
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
