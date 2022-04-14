import { Model, TodoItem } from './../model/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ToDoTask';
  Model = new Model();
 

  getName(){

        return this.Model.user;
  }

  todoItems(){

        return this.Model.item;
  }
  AddItem(NewTask){

    if (NewTask != ''){
      this.Model.item.push(new TodoItem(NewTask,false));
    }
  }

}
