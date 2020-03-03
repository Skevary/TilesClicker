import {CtrlAction, CtrlButton, Tile} from '@shared/models';

export const ctrlSubset = (subset: CtrlAction[], from: CtrlButton[]): CtrlButton[] =>
  from.filter(({type}) => subset.some(name => name === type));

export const getRand = (min, max) => {
  // '~~()' used as a faster substitute for 'Math.floor()'
  [min, max] = [Math.ceil(min), ~~(max)];
  return ~~(Math.random() * (max - min + 1)) + min;
};

export const aiXsEasy = (scene: Tile[]) => {
  const sc = [...scene];
  const idx = getRand(0, scene.length - 1);
  sc[idx].type = 'enemy';

  return sc;
};

export const aiXsNormal = (scene: Tile[]) => {
  const sc = [...scene];
  let idx;
  do {
    idx = getRand(0, sc.length - 1);
  } while (sc[idx].type === 'enemy');
  sc[idx].type = 'enemy';

  return sc;
};

export const randBetween = ([at, to]) =>
  () => getRand(at * 1000, to * 1000);
