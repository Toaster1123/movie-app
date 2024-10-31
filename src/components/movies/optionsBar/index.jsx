import { Selector } from './selector';
import style from './options.module.scss';
export const OptionsBar = () => {
  return (
    <div className={style.main}>
      {[...Array(6)].map((item) => {
        return <Selector />;
      })}
    </div>
  );
};
