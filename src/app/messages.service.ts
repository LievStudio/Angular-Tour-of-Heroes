import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  constructor() { }

  add(messages: string): void {
    this.messages.push(messages);
  }

  clear(): void {
    this.messages = [];
  }
  
}
