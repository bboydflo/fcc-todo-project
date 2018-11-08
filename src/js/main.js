// a class has properties and methods
class TodoApp {
  constructor($rootEl, initialTodos) {
    this.todos = initialTodos

    // saving the refference to the root element
    this.$rootEl = $rootEl

    this.titleSelector = 'h1'
    this.newTodoForm = 'form'
    this.newTodoInputSelector = 'form input'
    this.alertBoxSelector = '.alert'
    this.closeSelector = '.close'
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

    // transform todo's array into a string
    let todosString = JSON.stringify(this.todos)

    // save string into local storage
    localStorage.setItem('todos', todosString)
  }

  getTodos() {
    return this.todos;
  }

  $getAlertBox() {
    return this.$rootEl.find(this.alertBoxSelector)
  }

  $getCloseButton() {
    return this.$rootEl.find(this.closeSelector)
  }

  render() {
    if (this.todos.length === 0) {
      this.$rootEl.find('.todo-list').html(
        `<div class="empty-list">
          please add some todo's
        </div>`
      )
    } else {
      let htmlString = ''
      this.todos.forEach((todo, index) => {
        let itemString = `<div class="custom-control custom-checkbox todo-text">
          <input type="checkbox" class="custom-control-input" id="customCheck${index}">
          <label class="custom-control-label" for="customCheck${index}">${todo}</label>
        </div>`
        htmlString = htmlString + itemString
      })
      this.$rootEl.find('.todo-list').html(htmlString)
    }
  }
}

const onLoad = () => {

  // get todos as a string
  let todosString = localStorage.getItem('todos')

  // nothing inside local storage 'todos'
  if (!todosString) {
    todosString = '[]'
  }

  // change string back to array
  let localStorageTodos = JSON.parse(todosString)

  let $todoItem1 = $('[data-item="todo1"]')
  let todoApp1 = new TodoApp($todoItem1, localStorageTodos)

  let $todoForm1 = todoApp1.$getNewTodoForm()
  let $alertBox1 = todoApp1.$getAlertBox()
  let $closeButton1 = todoApp1.$getCloseButton()

  $closeButton1.on('click', () => {
    $alertBox1.addClass('d-none')
  })

  // attach an event listener on the $todoForm1
  $todoForm1.on('submit', (ev) => {

    // prevent the default behaviour
    ev.preventDefault()

    let $inputField = todoApp1.$getNewTodoInput()

    // get the actual input value (this refers to the global object -> window)
    let $inputValue = $inputField.val()

    if ($inputValue.length > 4) {

      // clear the input field
      $inputField.val('')

      // hide the alert box
      $alertBox1.removeClass('show').addClass('d-none')

      // save it into the todo items list
      todoApp1.addNewTodo($inputValue)

      todoApp1.render()
    } else {

      // update alert message
      $alertBox1.find('.alert-message').html(
        `<strong>"${$inputValue}"</strong>  is not long enough! (min 4)`
      )

      // here we show the alert box
      $alertBox1.removeClass('d-none').addClass('show')
    }

    console.log(todoApp1.getTodos())
  })

  todoApp1.render()
}

// jquery on load function -> page has been loaded
// https://learn.jquery.com/using-jquery-core/document-ready/
$(onLoad)