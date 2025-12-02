class Todo {
  constructor(id, passedObj) {
    this.id = id;
    this.title = passedObj.title;
    this.completed = false;
    this.month = passedObj.month;
    this.year = passedObj.year;
    this.description = passedObj.description;
  }

  isWithinMonthYear(month, year) {
    return (this.month === month) && (this.year === year);
  }
}

class TodoList {
  #todoList = [];
  #nextId = 0;

  #generateId() {
    let id = this.#nextId;
    this.#nextId++;
    return id;
  }
  
  init(todoSet) {
    this.#todoList = [];
    this.#nextId = 0;
    todoSet.forEach(todoData => this.addTodo(todoData));
  }

  #validateString(value, fieldName) {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error(`${fieldName} must be a non-empty string.`);
    }
  }

  #validateOptionalString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new Error(`${fieldName} must be a string (can be empty).`);
    }
  }

  addTodo(passedObj) {
    this.#validateString(passedObj.title, 'Title');
    this.#validateString(passedObj.description, 'Description');
    this.#validateOptionalString(passedObj.month, 'Month');
    this.#validateOptionalString(passedObj.year, 'Year');

    let cleanObj = {
        title: passedObj.title.trim(),
        description: passedObj.description.trim(),
        month: passedObj.month,
        year: passedObj.year
    };

    let todo = new Todo(this.#generateId(), cleanObj); 
    this.#todoList.push(todo);
  }

  #copyTodo(todo) {
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      month: todo.month,
      year: todo.year,
      description: todo.description
    };
  }

  findTodoById(id) {
    let todo = this.#todoList.find(todo => todo.id === id);
    return todo ? this.#copyTodo(todo) : undefined;
  }

  #getTodoReference(id) {
    return this.#todoList.find(todo => todo.id === id);
  }

  updateTitle(id, newTitle) {
    let todo = this.#getTodoReference(id);
    if (todo) {
      this.#validateString(newTitle, 'Title');
      todo.title = newTitle.trim(); 
    }
  }
  
  updateDescription(id, newDescription) {
    let todo = this.#getTodoReference(id);
    if (todo) {
      this.#validateString(newDescription, 'Description');
      todo.description = newDescription.trim(); 
    }
  }

  markDone(id) {
    let todo = this.#getTodoReference(id);
    if (todo) { todo.completed = true; }
  }
  
  markUndone(id) {
    let todo = this.#getTodoReference(id);
    if (todo) { todo.completed = false; }
  }

  deleteTodo(id) {
    this.#todoList = this.#todoList.filter(todo => todo.id !== id);
  }

  allTodos() {
    return this.#todoList.map(todo => this.#copyTodo(todo));
  }

  markAllDone() {
    this.#todoList.forEach(todo => todo.completed = true);
  }

  markAllUndone() {
    this.#todoList.forEach(todo => todo.completed = false);
  }

  todosWithinMonthYear(month, year) {
    return this.#todoList
      .filter(todo => todo.isWithinMonthYear(month, year))
      .map(todo => this.#copyTodo(todo));
  }

  completedTodos() {
    return this.#todoList
      .filter(todo => todo.completed)
      .map(todo => this.#copyTodo(todo));
  }
}

class TodoManager {
  #todoList;

  constructor(todoListInstance) {
    if (!todoListInstance || !(todoListInstance instanceof TodoList)) {
        throw new Error("TodoManager requires a valid TodoList instance.");
    }
    this.#todoList = todoListInstance;
  }

  allTodos() {
    return this.#todoList.allTodos();
  }

  allCompletedTodos() {
    return this.#todoList.completedTodos();
  }

  allTodosWithinMonthYear(month, year) {
    return this.#todoList.todosWithinMonthYear(month, year);
  }

  completedTodosWithinMonthYear(month, year) {
    return this.allTodosWithinMonthYear(month, year).filter(todo => todo.completed);
  }
}


// Tests
let initialTodoSet = [
    { title: 'Buy Milk', month: '1', year: '2017', description: 'Milk for baby' },
    { title: 'Buy Apples', month: '', year: '2017', description: 'An apple a day keeps the doctor away' },
    { title: 'Buy Chocolate', month: '1', year: '', description: 'For the cheat day' },
    { title: 'Buy Veggies', month: '', year: '', description: 'For the daily fiber needs' },
];

const todoList = new TodoList();
todoList.init(initialTodoSet);
const todoManager = new TodoManager(todoList);

const test = (condition) => {
    if (condition) {
        console.log(true);
    } else {
        console.error(false);
    }
};

// Test Invalid Todos
const initialListLength = todoList.allTodos().length;

let invalidData1 = { title: '  ', month: '1', year: '2025', description: 'desc' };
let invalidData2 = { title: 'Valid Title', month: '1', year: '2025', description: 12345 };
let invalidData3 = { title: 'Valid Title', month: '1', year: 2025, description: 'desc' };
let creationErrors = 0;

try { todoList.addTodo(invalidData1); } catch (e) { console.log(`Error raised as expected ${e}`) }
try { todoList.addTodo(invalidData2); } catch (e) { console.log(`Error raised as expected ${e}`) }
try { todoList.addTodo(invalidData3); } catch (e) { console.log(`Error raised as expected ${e}`) }

// Expecting 0
test(todoList.allTodos().length === initialListLength);


// Test Invalid Updates
const targetId = todoList.allTodos()[0].id;
const originalTitle = todoList.findTodoById(targetId).title;

// Update with empty string
try {
    todoList.updateTitle(targetId, ' ');
} catch (e) { console.log(`Error raised as expected ${e}`)}
let todoAfterInvalidUpdate1 = todoList.findTodoById(targetId);
test(todoAfterInvalidUpdate1.title === originalTitle);

// Update with other type
try {
    todoList.updateTitle(targetId, 999);
} catch (e) { console.log(`Error raised as expected ${e}`) }
let todoAfterInvalidUpdate2 = todoList.findTodoById(targetId);
test(todoAfterInvalidUpdate2.title === originalTitle);

// Valid update
const newValidTitle = "New Valid Title";
try {
    todoList.updateTitle(targetId, newValidTitle);
    todoList.updateTitle(targetId, originalTitle);
} catch (e) { console.log(`We were not expecting this error. ${e}`)}
test(todoList.findTodoById(targetId).title === originalTitle)

const descId = todoList.allTodos()[0].id;
const originalDesc = todoList.findTodoById(descId).description;

try {
    todoList.updateDescription(descId, ' ');
} catch (e) { console.log(`Error raised as expected ${e}`) }
test(todoList.findTodoById(descId).description === originalDesc);

const newDesc = "Updated Description Text";
try {
    todoList.updateDescription(descId, newDesc);
} catch (e) { console.log(`Unexpected error: ${e}`) }
test(todoList.findTodoById(descId).description === newDesc);

let initialTodoSet2 = [
    { title: 'Buy Milk', month: '1', year: '2017', description: 'Milk for baby' }, 
    { title: 'Buy Apples', month: '', year: '2017', description: 'An apple a day keeps the doctor away' }, 
    { title: 'Buy Chocolate', month: '1', year: '', description: 'For the cheat day' }, 
    { title: 'Buy Veggies', month: '', year: '', description: 'For the daily fiber needs' } 
];

const todoList2 = new TodoList();
todoList2.init(initialTodoSet2);
const todoManager2 = new TodoManager(todoList2);

// Collection Integrity.
const todoCopy = todoList2.findTodoById(1);
todoCopy.title = 'External Mutation Attempt';
const originalTodo = todoList2.findTodoById(1);
test(originalTodo.title !== 'External Mutation Attempt');

// Marking and checking Completion.
todoList2.markDone(0);
todoList2.markDone(3);
test(todoManager2.allCompletedTodos().length === 2);

todoList2.markUndone(0);
test(todoManager2.allCompletedTodos().length === 1);

// Delete todo.
const milkTodoId = todoList2.allTodos().find(t => t.title === 'Buy Milk').id;
todoList2.deleteTodo(milkTodoId);
const afterDelete = todoList2.allTodos()
test(afterDelete.length === 3);

// Mark all.
todoList2.markAllDone();
test(todoManager2.allCompletedTodos().length === 3);
todoList2.markAllUndone()
test(todoManager2.allCompletedTodos().length === 0);

// Filter by date.
const janTodos = todoManager2.allTodosWithinMonthYear('1', '');
test(janTodos.length === 1 && janTodos[0].title === 'Buy Chocolate');

// Empty dates
const emptyDateTodos = todoManager2.allTodosWithinMonthYear('', '');
test(emptyDateTodos.length === 1 && emptyDateTodos[0].title === 'Buy Veggies');

// Completed and Date Filtering
todoList2.markDone(1);
const completed2017 = todoManager2.completedTodosWithinMonthYear('', '2017');
test(completed2017.length === 1 && completed2017[0].title === 'Buy Apples');