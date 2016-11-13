export class App {
  todos = [
    {title: 'Abwasch', selected: false },
    {title: 'Müll rausbringen', selected: false },
    {title: 'Staubsaugen', selected: false },
  ];

  newTodoTitle = '';

  createTodo()
  {
    const todo = {title: this.newTodoTitle, selected: false};
    this.todos.push(todo);
    this.newTodoTitle = '';
  }

  deleteTodo(title)
  {
    const index = this.todos.findIndex(todo => todo.title === title);
    this.todos.splice(index,1);
  }

}
