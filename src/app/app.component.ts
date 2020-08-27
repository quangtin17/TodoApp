import { Component, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [style({transform: 'translateX(300px)'}),
        animate(200, keyframes([
         style({transform: 'translateX(300px)'}),
         style({transform: 'translateX(0)'})

          ]))]),


          transition('*=>void', [ style({transform: 'translateX(0px)'}),
          animate(100, keyframes([
          style({transform: 'translateX(0px)'}),
          style({transform: 'translateX(300px)'})

          ]))])
])
  ]
})
export class AppComponent {
  @ViewChild('myForm') formValues;
  todoArray = [];
  todo;

  addTodo(value) {
    this.todoArray.push(value);
    this.formValues.resetForm();
  }

  deleteItem(todo) {
    for ( let i = 0; i <= this.todoArray.length; i++) {
      if (todo === this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
     }
  }
}
