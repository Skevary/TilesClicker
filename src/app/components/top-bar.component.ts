import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BUTTON_SET, CtrlAction, CtrlButton, ctrlSubset, GameStatus} from 'src/app/shared';


@Component({
  selector: 'app-top-bar',
  template: `
    <div class="scores-bar">
      <span>lvl: <b>{{lvl}}</b></span>
      <span>score: <b>{{score}}</b></span>
    </div>

    <div class="buttons-bar">
      <button *ngFor="let btn of buttons"
              (click)="action.emit(btn.type)">
        <span>{{btn.name}}</span>
        <i [ngClass]="['fas', btn.icon]"></i>
      </button>

      <button class="trigger">
        <i [ngClass]="['fas',
     status === 'inProcess' ?
      'fa-caret-up' :
       'fa-caret-down'
       ]"></i>
      </button>
    </div>

  `,
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() activeId: number;
  @Input() selectedId: number;
  @Input() score: number;
  @Input() status: GameStatus;

  @Output() action = new EventEmitter<CtrlAction>();

  constructor() {
  }

  ngOnInit(): void {
  }

  get lvl(): number {
    return this.activeId + 1;
  }

  get buttons(): CtrlButton[] {
    if (this.activeId !== this.selectedId) {
      return ctrlSubset(['playNew'], BUTTON_SET);
    }

    switch (this.status) {
      case 'inProcess':
        return ctrlSubset(['replay', 'pause'], BUTTON_SET);
      case 'paused':
        return ctrlSubset(['replay', 'resume'], BUTTON_SET);
      case 'endWin':
        return ctrlSubset(['replay', 'playNext'], BUTTON_SET);
      case 'endLose':
        return ctrlSubset(['replay'], BUTTON_SET);
      default:
        return ctrlSubset(['play'], BUTTON_SET);
    }
  }

}
