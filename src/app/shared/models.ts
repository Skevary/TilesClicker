export interface Tile {
  id: number;
  type: 'player' | 'enemy' | 'empty';
  anim?: boolean;
}

export interface AI {
  run: (scene: Tile[]) => Tile[];
  interval: () => number;
}

export interface Level {
  title?: string;
  id: number;
  tile: {
    column: number;
    count: number;
    width: string;
    height: string;
  },
  ai: AI;
}

