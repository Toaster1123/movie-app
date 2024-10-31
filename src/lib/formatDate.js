const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];
export const formatDate = (date) => {
  if (date != null) {
    date = date
      .substring(0, date.length - 14)
      .split('-')
      .join(' ');
    return (date =
      Number(date.substr(8)) +
      ' ' +
      months[Number(date.substr(4, 4)) - 1] +
      ' ' +
      date.substr(0, 4) +
      ' г.');
  }
};
