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
  template: ``,
  styleUrls: ['./messages-box.component.scss']
})
export class MessagesBoxComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
