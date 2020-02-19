import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Level, Tile} from '@app/shared';

@Component({
  selector: 'app-game-scene',
  template: `
    <ng-container *ngIf="isRunning">
      <div *ngFor="let v of scene"
           (click)="click(v)"
           [style.width]="level.tile.width"
           [style.height]="level.tile.height"
           [ngClass]="['tile', v.type]"
           [attr.data-id]="v.id">
      </div>
    </ng-container>
  `,
  styleUrls: ['./game-scene.component.scss']
})
export class GameSceneComponent implements OnInit, OnChanges {
  @Input() level: Level;
  scene: Tile[] = [];
  timer: number;
  isRunning: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges({level: {firstChange}}: SimpleChanges) {
    this.resetScene();
  }

  resetScene(autoplay = true) {
    clearInterval(this.timer);
    this.isRunning = false;
    this.timer = 0;

    this.scene = Array.from(
      {length: this.level.tile.count},
      (v, i) => ({id: i, type: 'empty', anim: false})
    );

    autoplay && this.run();
  }

  run() {
    this.isRunning = true;

    this.timer = setInterval(() => {
      this.scene = this.level.ai.run(this.scene);
      this.checkWinState();
    }, this.level.ai.interval());
  }

  click(v: Tile) {
    if (v.type !== 'player') {
      v.type = 'player';
      this.checkWinState();
    }
  }

  checkWinState() {
    const firstType = this.scene[0].type;
    firstType !== 'empty' &&
    this.scene.every(({type}) => firstType === type) &&
    this.resetScene(false);
  }
}
