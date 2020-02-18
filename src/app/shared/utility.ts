export const getRand = (min, max) => {
  [min, max] = [Math.ceil(min), ~~(max)];
  return ~~(Math.random() * (max - min + 1)) + min;
};

