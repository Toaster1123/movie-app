import React from 'react';
import { useParams } from 'react-router-dom';

import { formatDate } from '../../lib/formatDate';

import style from './person.module.scss';
import { Facts } from '../../components/personPage/facts';
import { Participation } from '../../components/personPage/participation';

import { usePersonItem } from '../../store/requests/personId';

export const PersonPage = () => {
  const personData = usePersonItem((state) => state.person);
  const fetchItems = usePersonItem((state) => state.fetchItems);
  const loading = usePersonItem((state) => state.loading);
  const { id } = useParams();
  console.log(personData);
  React.useEffect(() => {
    try {
      fetchItems(id);
    } catch (error) {}
  }, []);

  return (
    <div className={style.main}>
      {!personData || loading ? (
        ''
      ) : (
        <>
          <div className={style.personProfile}>
            <div className={style.image}>
              <img src={personData.photo} alt="face" />
            </div>
            {personData.age == null && personData.birthday == null ? (
              <div className={style.errorInfo}>Об этом актёре мало что известно 😓</div>
            ) : (
              <>
                <div className={style.info}>
                  <div className={style.name}>{personData.name}</div>
                  {personData.profession && (
                    <div className={style.role}>{personData.profession}</div>
                  )}
                  {personData.birthday && (
                    <div className={style.birth}>
                      День рождения: {formatDate(personData.birthday)}
                      {personData.death && ' - ' + formatDate(personData.death)}
                    </div>
                  )}
                  {personData.age && <div className={style.years}>{personData.age} лет</div>}
                  {personData.birthPlace != null && (
                    <div className={style.living}>
                      {!loading
                        ? personData.birthPlace[personData.birthPlace.length - 2].value +
                          ', ' +
                          personData.birthPlace[personData.birthPlace.length - 1].value
                        : 'неизвестно'}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          {personData.facts != null && <Facts />}
          {personData.movies && <Participation />}
        </>
      )}
    </div>
  );
};
