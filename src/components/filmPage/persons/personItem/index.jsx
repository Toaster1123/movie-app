import React from 'react';
import ContentLoader from 'react-content-loader';

import style from './personItem.module.scss';

export const PersonItem = (props) => {
  return (
    <div className={style.main}>
      {props.loading ? (
        <ContentLoader
          speed={2.3}
          width={325}
          height={183}
          backgroundColor="#111"
          foregroundColor="#4d4d4d">
          <rect x="0" y="0" rx="16" ry="16" width="325" height="183" />
        </ContentLoader>
      ) : (
        <>
          {/* <Link to={`/film/${item.id}`}> */}
          <div className={style.image}>
            <img src={props.item.photo} width={'100%'} alt="Актёр" />
          </div>
          <div className={style.nameBlock}>
            <div className={style.name}>
              {props.item.name != null ? props.item.name : props.item.enName}
            </div>
            <div className={style.role}>
              {props.item.profession != 'актеры' &&
                props.item.profession.substring(0, props.item.profession.length - 1)}
            </div>
          </div>
          {/* </Link> */}
        </>
      )}
    </div>
  );
};
