import {Component} from '@angular/core';
import {MsgPane} from '@app/messages-box/messages-box.component';
import {gameLevels} from '@app/shared';

export type MainBox = 'notice' | 'game' | 'levels' | 'stats'

@Component({
  selector: 'app-root',
  template: `
    <app-top-panel
      [currentLvl]="curLvl"
      [score]="score"
      (showStatistic)="activated('stats')"
      (showLvlBox)="activated('levels')"
      (previousLvl)="prev()"
      (nextLvl)="next()">
    </app-top-panel>

    <div class="main-container" [ngSwitch]="active">
      <app-statistic
        *ngSwitchCase="'stats'">
      </app-statistic>

      <app-level-box
        *ngSwitchCase="'levels'">
      </app-level-box>

      <app-game-scene
        #sc *ngSwitchCase="'game'"
        [level]="lvl"
        [style.maxWidth]="maxWidth">
      </app-game-scene>

      <app-messages-box
        *ngSwitchDefault
        [active]="notification"
        (play)="activated('game')">
      </app-messages-box>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active: MainBox = 'notice';
  notification: MsgPane = 'welcome';

  curLvl: number = 0;
  score: number = 0;

  constructor() {
  }

  activated(val: MainBox) {
    this.active = val;
  }

  prev() {
    --this.curLvl;
  }

  next() {
    ++this.curLvl;
  }


  get lvl() {
    return gameLevels[this.curLvl];
  }

  get maxWidth() {
    const {column, width} = this.lvl.tile;
    return `${(parseInt(width) + 6) * column}px`;
  }

}
