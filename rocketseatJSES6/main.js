class List{
  constructor(){
    this.data = []
  }

  add(data){
    this.data.push(data)
    console.log(this.data)
  }
}

class TodoList extends List{
  constructor(){
    super()

    this.usuario = 'Diego'
    }

    mostraUsuario(){
      console.log(this.usuario)
  }

  // constructor(){
  //   this.todos = []
  // }

  // addTodo(){
  //   this.todos.push('Novo Todo')
  //   console.log(this.todos)
  // }
}

var MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo todo')
}

MinhaLista.mostraUsuario()