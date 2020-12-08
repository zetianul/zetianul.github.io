import { observable, reaction, autorun, action } from 'mobx';

class TodoModel{
  private todoList = []

  constructor(){
    this.todoList = [
      { title: 'eheiehieie', done: false },
      { title: 'heieheiie2', done: false }
    ]
  }
}


