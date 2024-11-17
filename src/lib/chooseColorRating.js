const chooseColorRating = (val) => {
  if (val < 4.0) {
    return 'ratingColorRed';
  }
  if ((val >= 4.0) & (val < 6.7)) {
    return 'ratingColorOrange';
  } else {
    return 'ratingColorGreen';
  }
};
export default chooseColorRating;
