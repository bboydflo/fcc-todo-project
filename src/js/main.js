// a class has properties and methods
class TodoApp {
  constructor($rootEl) {
    this.todos = []

    // saving the refference to the root element
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

  getTodos() {
    return this.todos;
  }
}

const onLoad = () => {
  let $todoItem1 = $('[data-item="todo1"]')
  let todoApp = new TodoApp($todoItem1)

  let $todoForm = todoApp.$getNewTodoForm()

  // attach an event listener on the $todoForm
  $todoForm.on('submit', (ev) => {

    // prevent the default behaviour
    ev.preventDefault()

    let $inputField = todoApp.$getNewTodoInput()

    // get the actual input value (this refers to the global object -> window)
    let $inputValue = $inputField.val()

    if ($inputValue.length > 4) {
      // save it into the todo items list
      todoApp.addNewTodo($inputValue)

      $inputField.val('')
    } else {
      throw new Error('the todo is not long enough')
    }

    console.log(todoApp.getTodos())
  })
}

// jquery on load function -> page has been loaded
// https://learn.jquery.com/using-jquery-core/document-ready/
$(onLoad)