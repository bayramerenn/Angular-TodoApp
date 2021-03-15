import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  user = 'Bayram';
  isDisplay = true;
  

  getName(){
    return this.model.user;
  }

  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(f => f.action === false);
  }

  addItem(value){
    if(value != "")
    this.model.items.push(new TodoItem(value,false));
  }
}
