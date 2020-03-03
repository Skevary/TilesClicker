import {Component, Input, OnInit} from '@angular/core';
import {Tile, TileCounter, TileCounterField} from 'src/app/shared';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div [ngClass]="'user'" [style.width]="progress('user')"></div>
    <div [ngClass]="'ai'" [style.width]="progress('ai')"></div>
  `,
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() scene: Tile[];
  @Input() counter: TileCounter;

  constructor() {
  }

  ngOnInit() {
  }

  progress(val: TileCounterField) {
    const lvlSize = this.scene.length;
    const {[val]: tileCount} = this.counter;
    return tileCount * 100 / lvlSize + '%'
  }

}
