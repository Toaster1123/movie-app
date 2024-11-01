import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import style from './selector.module.scss';
import { openSelectorBar } from '../../../../store/openSelectorBar';
export const Selector = (props) => {
  const setOpened = openSelectorBar((state) => state.setOpened);
  const opened = openSelectorBar((state) => state.opened);
  const [isSelect, setIsSelect] = React.useState(null);

  const handleSelectOption = (id) => {
    setIsSelect(id);
    setOpened(null);
  };
  const changeSelect = (id) => {
    if (opened == id) {
      setOpened(null);
    } else {
      setOpened(id);
    }
  };

  return (
    <div className={style.main}>
      <div
        onClick={() => {
          changeSelect(props.id);
        }}
        className={`${style.title} ${
          props[1].length == 0 && opened == props.id ? style.titleButton : ''
        }`}>
        <div className={style.text}>
          {isSelect != null ? props[1][isSelect] : props[0]}
          {}
        </div>
        {props[1].length > 0 && (
          <div className={`${style.arrow} ${opened == props.id ? style.activeArrow : ''}`}>
            <ChevronDown size={21} strokeWidth={1.25} />
          </div>
        )}
      </div>
      <div className={`${style.options} ${opened == props.id ? style.activeMenu : ''}`}>
        {props[1].map((item, id) => {
          return (
            <div
              onClick={() => {
                handleSelectOption(id);
              }}
              className={style.option}
              key={item}>
              <div className={style.genre}>{item}</div>
              <div className={`${style.selected} ${isSelect == id ? style.selectedTrue : ''}`}>
                <Check strokeWidth={1.25} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
