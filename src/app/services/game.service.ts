import {Injectable} from '@angular/core';
import {
  Ai,
  CounterField,
  GameStatus,
  SCENE_SET,
  SceneCounters,
  Tile,
  TileCounter,
  TileCounterField,
  TilesDescription
} from 'src/app/shared';
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  activeId: number;
  selectedId: number;
  status: GameStatus;

  scene: Tile[];
  sceneConf: TilesDescription;

  ai: Ai;
  aiTime: number;

  totalScore: number;
  counters: SceneCounters[];

  tileCounter: TileCounter;

  constructor(private store: StorageService) {
  }

  init() {
    this.aiTime = 0;
    this.initCounters();
    this.initLvl(this.store.currLvl);
  }

  initCounters() {
    this.counters = SCENE_SET.map(
      ({id}) => this.store.getCounters(id)
    );

    this.totalScore = this.store.totalScore;
  }

  initLvl(id: number) {
    this.store.currLvl = id;
    this.activeId = id;
    this.selectedId = id;
    this.tileCounter = {user: 0, ai: 0};
    this.changeStatus('init');
    this.changeDescriptor();
    this.generateScene();
  }

  aiStart() {
    this.aiTime = setTimeout(() => {
      if (this.status === 'inProcess') {
        this.scene = this.ai.click(this.scene);
        this.checkWinState();
        this.aiStart();
      }
    }, this.ai.delay());
  }

  aiPause() {
    clearTimeout(this.aiTime);
  }

  generateScene() {
    this.scene = Array.from(
      {length: this.sceneConf.count},
      (v, i) => ({id: i, type: 'init', anim: false})
    );
  }

  checkWinState() {
    let [userCount, aiCount] = [0, 0];
    this.scene.forEach(({type}) => {
      type === 'player' && ++userCount;
      type === 'enemy' && ++aiCount;
    });

    this.changeTileCounter('user', userCount);
    this.changeTileCounter('ai', aiCount);

    const lvlSize = this.scene.length;
    const {user, ai} = this.tileCounter;

    if (user >= lvlSize || ai >= lvlSize) {
      this.increaseCounter('completed', 1);

      if (user >= lvlSize) {
        this.increaseCounter('win', 1);
        this.changeStatus('endWin');
      } else {
        this.increaseCounter('lose', 1);
        this.changeStatus('endLose');
      }
    }
  }

  changeDescriptor(id = this.activeId) {
    const {ai, descriptor} = SCENE_SET[id];
    this.sceneConf = descriptor;
    this.ai = ai;
  }

  changeStatus(val: GameStatus = 'init') {
    this.status = val;
  }


  changeTileCounter(val: TileCounterField, num: number) {
    const tmp = {...this.tileCounter};
    this.tileCounter = {...tmp, ...{[val]: num}};
  }

  increaseScore() {
    this.increaseCounter('score', 1);
    this.totalScore = this.totalScore + 1;
    this.store.totalScore = this.totalScore;
  }

  increaseCounter(val: CounterField, num: number) {
    const tmp = this.counters[this.activeId];
    this.counters[this.activeId] = {...tmp, ...{[val]: tmp[val] += num}};
    this.store.setCounters(this.counters[this.activeId], this.activeId);
  }

}
