import {CtrlButton, GameScene} from '@shared/models';
import {aiXsEasy, aiXsNormal, randBetween} from '@shared/utility';

export const SCENE_SET: GameScene[] = [
  {
    id: 0,
    descriptor: {column: 4, count: 16, size: '5em'},
    ai: {click: aiXsEasy, delay: randBetween([1.5, 2.5])}
  },
  {
    id: 1,
    descriptor: {column: 5, count: 25, size: '5em'},
    ai: {click: aiXsEasy, delay: randBetween([1.25, 2.25])}
  },
  {
    id: 2,
    descriptor: {column: 6, count: 36, size: '4em'},
    ai: {click: aiXsNormal, delay: randBetween([1.15, 2])}
  },
  {
    id: 3,
    descriptor: {column: 7, count: 49, size: '4em'},
    ai: {click: aiXsNormal, delay: randBetween([0.85, 1.85])}
  },
  {
    id: 4,
    descriptor: {column: 8, count: 64, size: '3em'},
    ai: {click: aiXsNormal, delay: randBetween([0.7, 1.5])}
  },
  {
    id: 5,
    descriptor: {column: 9, count: 81, size: '3em'},
    ai: {click: aiXsNormal, delay: randBetween([0.65, 1.25])}
  },
  {
    id: 6,
    descriptor: {column: 10, count: 100, size: '3em'},
    ai: {click: aiXsNormal, delay: randBetween([0.5, 1])}
  },
  {
    id: 7,
    descriptor: {column: 10, count: 100, size: '3em'},
    ai: {click: aiXsNormal, delay: randBetween([0.5, 0.6])}
  },
  {
    id: 8,
    descriptor: {column: 10, count: 100, size: '3em'},
    ai: {click: aiXsNormal, delay: randBetween([0.5, 0.6])}
  },
  {
    id: 9,
    descriptor: {column: 10, count: 100, size: '3em'},
    ai: {click: aiXsNormal, delay: randBetween([0.5, 0.6])}
  },
];


export const BUTTON_SET: CtrlButton[] = [
  {name: 'replay', icon: 'fa-redo-alt', type: 'replay'},
  {name: 'play', icon: 'fa-play', type: 'play'},
  {name: 'pause', icon: 'fa-pause', type: 'pause'},
  {name: 'resume', icon: 'fa-play', type: 'resume'},
  {name: 'next', icon: 'fa-angle-double-right', type: 'playNext'},
  {name: 'new game', icon: 'fa-play', type: 'playNew'}
];
