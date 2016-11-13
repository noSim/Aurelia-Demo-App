/**
 * Created by Simon on 13.11.2016.
 */
  import {bindable, bindingMode} from 'aurelia-framework';

export class TodoField {

  @bindable todo;
  @bindable delete

  deleteTodo()
  {
    this.delete({title: this.todo.title})
  }

}
