export const setMovieLength = (num) => {
  let hours = 0;
  let minutes = 0;
  while (num >= 0) {
    minutes = num;
    num -= 60;
    if (num >= 0) {
      hours++;
      minutes = 0;
    } else {
      if (hours === 0) {
        return minutes + ' мин';
      }
      if (minutes === 0) {
        return hours + ' ч';
      } else {
        return hours + ' ч ' + minutes + ' мин';
      }
    }
  }
};
