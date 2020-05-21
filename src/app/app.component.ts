import {Component, HostBinding, HostListener} from '@angular/core';
import {CtrlAction, SceneCounters, Tile} from '@app/shared';
import {GameService} from '@app/services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <!-- TOP CONTAINER -->
    <div [ngClass]="'top-container shadow'">

      <app-top-bar
        [activeId]="game.activeId"
        [selectedId]="game.selectedId"
        [score]="game.totalScore"
        [status]="game.status"
        (action)="dispatch($event)">
      </app-top-bar>

      <app-lvl-navigator
        [ngClass]="'scroll'"
        [class.hide]="game.status === 'inProcess'"
        [activeId]="game.activeId"
        [selectedId]="game.selectedId"
        [counters]="game.counters"
        (wheel)="onMouseWheel($event)"
        (select)="choseLvl($event)">
      </app-lvl-navigator>

      <app-statistic
        [class.hide]="game.status === 'inProcess'"
        [counters]="selectedStats">
      </app-statistic>

      <app-progress-bar
        [scene]="game.scene"
        [counter]="game.tileCounter">
      </app-progress-bar>
    </div>


    <!-- BOTTOM CONTAINER -->
    <div [ngClass]="'bottom-container'" [class.mini]="game.status !== 'inProcess'">
      <app-game-scene
        [status]="game.status"
        [conf]="game.sceneConf"
        [scene]="game.scene"
        (player)="click($event)"
        (controls)="dispatch($event)">
      </app-game-scene>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') rootBg = 's0';

  constructor(
    public game: GameService
  ) {
    this.game.init();
  }

  onMouseWheel(e) {
    // todo: auto-focused in active lvl
    // todo: add horizontal scroll with middle-mouse button
    console.log('Wheel event: ', e);
  }

  @HostListener('document:keydown.space')
  spaceAction() {
    switch (this.game.status) {
      case 'inProcess': this.dispatch('pause'); break;
      case 'paused': this.dispatch('resume'); break;
      case 'endWin': this.dispatch('playNext'); break;
      case 'endLose': this.dispatch('replay'); break;
      default: return this.dispatch('play');
    }
  }

  dispatch(type: CtrlAction) {
    switch (type) {
      case 'pause': this.pause(); break;
      case 'resume': this.resume(); break;
      case 'playNext': this.play(this.game.activeId + 1); break;
      case 'playNew': this.play(this.game.selectedId); break;
      default: this.play();
    }
  }

  click(tile: Tile) {
    this.game.increaseCounter('click', 1);
    if (tile.type !== 'player') {
      tile.type = 'player';
      this.game.increaseScore();
      this.game.checkWinState();
    }
  }

  play(id = this.game.activeId) {
    this.rootBg = `s${this.game.activeId % 5}`;
    this.game.initLvl(id);
    this.resume();
  }

  resume() {
    this.game.selectedId = this.game.activeId;
    this.game.changeStatus('inProcess');
    this.game.aiStart();
  }

  pause() {
    this.game.changeStatus('paused');
    this.game.aiPause();
  }

  choseLvl(id: number) {
    this.game.selectedId = id;
  }

  get selectedStats(): SceneCounters {
    return this.game.counters[this.game.selectedId];
  }

}
