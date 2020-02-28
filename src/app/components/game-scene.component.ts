import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BUTTON_SET, CtrlAction, CtrlButton, ctrlSubset, GameStatus, Tile, TilesDescription} from 'src/app/shared';

@Component({
  selector: 'app-game-scene',
  template: `
    <div class="map-wrapper" [style.maxWidth]="maxWidth">

      <!-- Scene -->
      <div *ngFor="let tile of scene"
           (click)="player.emit(tile)"
           [style.minWidth]="conf.size"
           [style.minHeight]="conf.size"
           [ngClass]="['tile', tile.type]"
           [attr.data-id]="tile.id">
      </div>

      <div class="block-screen" *ngIf="status !== 'inProcess'">

        <!-- Notify -->
        <div class="msg-box" *ngIf="displayMsg">
          <span>{{message}}</span>
        </div>

        <!-- Buttons -->
        <div class="buttons-bar">
          <button
            *ngFor="let btn of buttons"
            (click)="controls.emit(btn.type)">
            <i [ngClass]="['fas', btn.icon]"></i>
          </button>
        </div>

      </div>

    </div>

  `,
  styleUrls: ['./game-scene.component.scss']
})
export class GameSceneComponent implements OnInit {
  @Input() status: GameStatus;
  @Input() scene: Tile[];
  @Input() conf: TilesDescription;

  @Output() player = new EventEmitter<Tile>();
  @Output() controls = new EventEmitter<CtrlAction>();

  constructor() {
  }

  ngOnInit(): void {
  }

  get displayMsg() {
    return this.status === 'init'
      || this.status === 'endWin'
      || this.status === 'endLose'
  }

  get message() {
    switch (this.status) {
      case 'init': return 'Welcome, have a good game!';
      case 'endLose': return 'You\'re out of luck. Try again!';
      case 'endWin': return 'Hooray, you did it. Try next!';
    }
  }

  get maxWidth() {
    const {size, column} = this.conf;
    return `${(parseInt(size) + 0.39) * column}em`;
  }

  get buttons(): CtrlButton[] {
    switch (this.status) {
      case 'init':return ctrlSubset(['play'], BUTTON_SET);
      case 'paused':return ctrlSubset(['replay', 'resume'], BUTTON_SET);
      case 'endWin':return ctrlSubset(['replay', 'playNext'], BUTTON_SET);
      case 'endLose':return ctrlSubset(['replay'], BUTTON_SET);
    }
  }

}
