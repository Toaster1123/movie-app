import style from './options.module.scss';
import { openSelectorBar } from '../../../store/openSelectorBar';
import { CountrySelector } from './oprions/contries';
import { GenreSelector } from './oprions/genres';
import { YearSelector } from './oprions/years';
import { Button } from './oprions/button';

export const OptionsBar = () => {
  const { paramCount, clearParamCount } = openSelectorBar((state) => state);

  return (
    <div className={style.main}>
      <GenreSelector />
      <CountrySelector />
      <YearSelector />
      <Button title={'Высокий рейтинг'} />
      <div className={style.resetBtn}>
        {paramCount > 0 && <p onClick={() => clearParamCount()}>Сбросить</p>}
      </div>
    </div>
  );
};
