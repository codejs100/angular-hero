import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  messages: string[] = [];

  constructor() { }

  addMessage(message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
