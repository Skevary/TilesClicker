export type TileType = 'init' | 'player' | 'enemy'
export type GameStatus = 'init' | 'inProcess' | 'paused' | 'endWin' | 'endLose';
export type CtrlAction = 'play' | 'pause' | 'resume' | 'replay' | 'playNext' | 'playNew'
export type CounterField = 'click' | 'score' | 'completed' | 'win' | 'lose';
export type TileCounterField = 'user' | 'ai';

export interface CtrlButton {
  name: string;
  icon: 'fa-play' | 'fa-pause' | 'fa-redo-alt' | 'fa-angle-double-right';
  type: CtrlAction;
}

export interface TileCounter {
  user: number;
  ai: number;
}

export interface Tile {
  id: number;
  type: TileType;
  anim: boolean;
}

export interface TilesDescription {
  column: number;
  count: number;
  size: string
}

export interface Ai {
  click: (scene: Tile[]) => Tile[];
  delay: () => number;
}

export interface SceneCounters {
  id: number;
  click: number;
  score: number;
  completed: number;
  win: number;
  lose: number;
}

export interface GameScene {
  id: number;
  descriptor: TilesDescription;
  ai: Ai;
}
