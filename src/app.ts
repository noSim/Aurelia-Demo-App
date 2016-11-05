export class App {
  todos = [
    {title: 'Abwasch' },
    {title: 'Müll rausbringen' },
    {title: 'Staubsaugen' },
  ];

  selectedTodoIds = [];

  newTodoTitle = '';

  createTodo()
  {
    const todo = {title: this.newTodoTitle};
    this.todos.push(todo);
  }

  deleteTodo(title)
  {
    const index = this.todos.findIndex(todo => todo.title === title);
    this.todos.splice(index,1);
  }

}
