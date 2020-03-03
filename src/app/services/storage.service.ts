import {Injectable} from '@angular/core';
import {SceneCounters} from '../shared';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  set currLvl(val: number) {
    localStorage.setItem('lvl-id', JSON.stringify(val));
  }

  get currLvl(): number {
    return JSON.parse(localStorage.getItem('lvl-id')) || 0;
  }

  set totalScore(val: number) {
    localStorage.setItem('score-count', JSON.stringify(val));
  }

  get totalScore(): number {
    return JSON.parse(localStorage.getItem('score-count')) || 0;
  }

  setCounters(val: SceneCounters, id: number) {
    localStorage.setItem(`lvl-stats-${id}`, JSON.stringify(val));
  }

  getCounters(id: number): SceneCounters {
    return JSON.parse(localStorage.getItem(`lvl-stats-${id}`))
      || {...this.emptyCounters, id};
  }


  get emptyCounters(): SceneCounters {
    return <SceneCounters> {
      id: 0, click: 0, score: 0,
      completed: 0, win: 0, lose: 0
    };
  }

}
