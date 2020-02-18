import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-panel',
  template: `
    <div class="scores-bar">
      <span>You Score Count: <b>{{score}}</b></span>
      <span>Current Lvl: <b>{{currentLvl}}</b></span>
    </div>
    <div class="buttons-bar">
      <button [disabled]="false" (click)="showStatistic.emit()">
        {{'♞'}}
      </button>
      <button [disabled]="false" (click)="previousLvl.emit()">
        {{'⇦'}}
      </button>
      <button [disabled]="false" (click)="showLvlBox.emit()">
        {{'⚅'}}
      </button>
      <button [disabled]="false" (click)="nextLvl.emit()">
        {{'⇨'}}
      </button>
    </div>
  `,
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {
  @Input() score: number;
  @Input() currentLvl: number;
  @Output() showStatistic = new EventEmitter();
  @Output() previousLvl = new EventEmitter();
  @Output() showLvlBox = new EventEmitter();
  @Output() nextLvl = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
