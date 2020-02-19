import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export type MsgPane = 'welcome' | 'win' | 'loss';

const welcome = {
  title: 'Welcome to the "Tiles Clicker"'
};

const win = {
  title: 'Gracious, you won!'
};

const loss = {
  title: 'Sry, you loser!'
};

@Component({
  selector: 'app-messages-box',
  template: `
    <div class="header">
        <span>{{data[active].title}}</span>
    </div>

    <div class="body">

    </div>

    <div class="footer">
      <button [disabled]="false" (click)="play.emit()">
        {{'Ok, Play ⇨'}}
      </button>
    </div>
  `,
  styleUrls: ['./messages-box.component.scss']
})
export class MessagesBoxComponent implements OnInit {
  @Input() active: MsgPane;
  @Output() play = new EventEmitter();

  data = {welcome, win, loss};

  constructor() {
  }

  ngOnInit(): void {
  }

}
