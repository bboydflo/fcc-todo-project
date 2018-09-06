class TodoApp {
  constructor($rootEl) {
    this.todos = []
    this.$rootEl = $rootEl
    this.titleSelector = 'h1'
    this.newTodoForm = 'form'
    this.newTodoInputSelector = 'form input'
  }

  $getTitle () {
    return this.$rootEl.find(this.titleSelector)
  }

  $getNewTodoForm () {
    return this.$rootEl.find(this.newTodoForm)
  }

  $getNewTodoInput () {
    return this.$rootEl.find(this.newTodoInputSelector)
  }

  changeTitle (newTitle) {
    let $title = this.$getTitle()
    $title.text(newTitle)
  }

  addNewTodo (newTodo) {
    this.todos.push(newTodo)
  }
}


const onLoad = () => {
  let $todoItem1 = $('[data-item="todo1"]')
  let todoApp = new TodoApp($todoItem1)

  let $todoForm = todoApp.$getNewTodoForm()
  $todoForm.on('submit', (ev) => {

    // prevent the default behaviour
    ev.preventDefault()

    // get the actual input value (this refers to the global object -> window)
    let $inputValue = todoApp.$getNewTodoInput().val()

    // save it into the todo items list
    todoApp.addNewTodo($inputValue)

    console.log(todoApp.todos)
  })
}

// jquery on load function -> page has been loaded
// https://learn.jquery.com/using-jquery-core/document-ready/
$(onLoad);