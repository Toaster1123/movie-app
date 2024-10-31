import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ContentLoader from 'react-content-loader';

import { PersonItem } from './personItem';
import { useMovieItem } from '../../../store/requests/movieItem';

import style from './persons.module.scss';

export const PersonsMain = () => {
  const loading = useMovieItem((state) => state.loading);
  const persons = useMovieItem((state) => state.movieItem.persons);
  if (!persons) return [];
  persons.map((item) => {
    item.profession = item.profession.substring(0, item.profession.length - 1);
  });
  persons
    .sort((a, b) => {
      return a.profession == 'актер' ? 1 : b.profession ? -1 : 0;
    })
    .sort((a, b) => {
      return a.profession == 'режиссер' ? -1 : b.profession ? 1 : 0;
    });

  const uniquePersons = persons.reduce((acc, person) => {
    const name = person.name || person.enName;
    const existingPerson = acc.get(name);
    if (existingPerson) {
      existingPerson.profession = [
        ...new Set([...existingPerson.profession.split(', '), ...person.profession.split(', ')]),
      ].join(', ');
    } else {
      acc.set(name, person);
    }
    return acc;
  }, new Map());

  const result = [...uniquePersons.values()];

  return (
    <div className={style.main}>
      <section className={style.name}>
        {loading ? (
          <ContentLoader
            speed={2.3}
            width={525}
            height={40}
            backgroundColor="#111"
            foregroundColor="#4d4d4d">
            <rect x="0" y="0" rx="16" ry="16" width="525" height="40" />
          </ContentLoader>
        ) : (
          'Режисёры и Актёры'
        )}
      </section>
      <section>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
          }}
          slidesPerView={8.2}
          slidesPerGroup={8}
          speed={800}
          navigation
          modules={[Navigation]}
          spaceBetween={12}>
          {(loading ? [...Array(8)] : result).map((item, id) => {
            return (
              <SwiperSlide className={style.SwiperSlide} key={id}>
                <PersonItem item={item} loading={loading} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};
