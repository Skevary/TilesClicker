import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BUTTON_SET, CtrlAction, CtrlButton, ctrlSubset, GameStatus} from 'src/app/shared';


@Component({
  selector: 'app-top-bar',
  template: `
    <div [ngClass]="'scores-bar'">
      <span [ngClass]="'indicator'">
        <i [ngClass]="['fas fa-caret-up', indicator]"></i>
      </span>

      <span>{{lvl.text}}
        <b>{{lvl.val}}</b>
      </span>

      <span>{{totalScore.text}}
        <b>{{totalScore.val}}</b>
      </span>
    </div>

    <div [ngClass]="'buttons-bar'">
      <button
        *ngFor="let btn of buttons"
        [ngClass]="'btn'"
        (click)="action.emit(btn.type)">
        <span>{{btn.name}}</span>
        <i [ngClass]="['fas', btn.icon]"></i>
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

  ngOnInit() {
  }


  get indicator() {
    return this.status === 'inProcess' ? 'flip' : '';
  }

  get lvl(): { text: string, val: number } {
    return {text: 'lvl: ', val: this.activeId + 1};
  }

  get totalScore(): { text: string, val: number } {
    return {text: 'score: ', val: this.score};
  }

  get buttons(): CtrlButton[] {
    if (this.activeId !== this.selectedId) {
      return ctrlSubset(['playNew'], BUTTON_SET);
    }

    switch (this.status) {
      case 'inProcess': return ctrlSubset(['replay', 'pause'], BUTTON_SET);
      case 'paused': return ctrlSubset(['replay', 'resume'], BUTTON_SET);
      case 'endWin': return ctrlSubset(['replay', 'playNext'], BUTTON_SET);
      case 'endLose': return ctrlSubset(['replay'], BUTTON_SET);
      default: return ctrlSubset(['play'], BUTTON_SET);
    }
  }

}
