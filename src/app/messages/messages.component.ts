import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'ang-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private _messageService: MessagesService) { }

  ngOnInit() {
  }

}
