export class Model {

  user;
  item;

 constructor() {
  this.user = 'Samira kazemi';
  this.item = [
   { action: 'buy a computer', done: false },
   { action: 'do work', done: true },
   { action: 'Task 2', done: false },
   { action: 'Task 1', done: true },
  ]

 }
}

export class TodoItem {

  action;
  done;

 constructor(action, done) {
  this.action = action;
  this.done = done;
 }

}