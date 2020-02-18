import {AI, Tile, Level, getRand} from '@shared';

export const aiXsEasy = (scene: Tile[]) => {
  const sc = [...scene];
  const idx = getRand(0, scene.length - 1);
  sc[idx].type === 'enemy' && console.log(`dubbed click in ${idx} - tile`);
  sc[idx].type = 'enemy';

  return sc;
};

export const aiXsNormal = (scene: Tile[]) => {
  const sc = [...scene];
  let idx;
  do {
    idx = getRand(0, scene.length - 1);
  } while (scene[idx].type === 'enemy');
  sc[idx].type === 'enemy' && console.log(`dubbed click in ${idx}th - tile`);
  sc[idx].type = 'enemy';
  return sc;
};

export const aiReaction = ([at, to]) => getRand(at * 1000, to * 1000);

export const aiPack: AI[] = [
  {run: aiXsEasy, interval: () => aiReaction([1.5, 2.5])},
  {run: aiXsEasy, interval: () => aiReaction([0.5, 1])},
  {run: aiXsEasy, interval: () => aiReaction([0.5, 1])}
];


export const gameLevels: Level[] = [
  {
    id: 0,
    tile: {column: 5, count: 25, width: '100px', height: '100px'},
    ai: aiPack[0],
  },
  {
    id: 1,
    tile: {column: 6, count: 42, width: '75px', height: '75px'},
    ai: aiPack[1],
  },
  {
    id: 2,
    tile: {count: 64, width: '75px', height: '75px', column: 8},
    ai: aiPack[2],
  },
  {
    id: 3,
    tile: {count: 80, width: '65px', height: '65px', column: 10},
    ai: {run: aiXsEasy, interval: () => aiReaction([0.5, 1])},
  },
  {
    id: 4,
    tile: {count: 100, width: '50px', height: '50px', column: 10},
    ai: {run: aiXsNormal, interval: () => aiReaction([0.1, 0.2])}
  },
  {
    id: 5,
    tile: {count: 120, width: '50px', height: '50px', column: 12},
    ai: aiPack[2],
  }
];
