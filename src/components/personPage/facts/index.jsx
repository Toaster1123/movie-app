import style from './facts.module.scss';
import { usePersonItem } from '../../../store/requests/personId';

export const Facts = () => {
  const personData = usePersonItem((state) => state.person);
  return (
    <div className={style.main}>
      <div className={style.title}>Факты</div>
      {personData.facts &&
        personData.facts.map((item) => {
          return (
            <div key={item} className={style.info}>
              - {item.value}
            </div>
          );
        })}
    </div>
  );
};
