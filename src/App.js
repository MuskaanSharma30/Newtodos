// import React, { Component } from 'react';
// import Todos from "./components/Todos"


// export default class App extends Component {

// state = {
//   todos : [
//             {
//               id: 1,
//               name: "Cook Lunch",
//               completed: true
//             },
//             {
//               id: 2,
//               name: "Go Shopping",
//               completed: true

//             },
//             {
//               id: 3,
//               name: "Watch Movie",
//               completed: true
//             },
//             {
//               id: 4,
//               name: "Play football",
//               completed: true
//             }
//   ]
// }


//   render() {
//     return (
//       <div>
//         <Todos 
//          todos = {this.state.todos}
//         />
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import TodoItems from './components/TodoItems'
// import "./App.css" 
// import DisplayTodos from './components/DisplayTodos'

// export class App extends Component {

// state = {
//   todos : []
// }

// AddTodo = (todo) =>{
//   this.setState(
//     {todos : [todo,...this.state.todos]}
//   )

// }


//   render() {
//     console.log(this.state.todos)
//     return (
//       <div className = "App">
//         <TodoItems          
//         TodoSubmit = {this.AddTodo}
//         />
//       {
//         this.state.todos.map(item => {
//           return(
//             <DisplayTodos 
//               key = {item.id}
//               todo = {item}
//             />
//           )
//         }) 
//       }



//       </div>
//     )
//   }
// }

// export default App


// import React, { Component } from 'react'

// export class App extends Component {

// state = {
//   todos : []
// }

// AddTodo = (todo) => {
//   this.setState(
//     {todos : [todo,...this.state.todos]}
//   )
// }



//   render() {
//     return (
//       <div>
//         <TodoItems
//           TodoItem = {this.AddTodo}
//         />
//         {
//           this.state.todos.map((item) =>
//           {
//             return (
//               <DisplayTodos 
//                 id = {item.id}
//                 todo = {item}
//               />
//             )
//           }
//           )
//         }
//       </div>
//     )
//   }
// }

// export default App


import { Component } from 'react'
import DisplayTodos from './components/DisplayTodos'
import FilterButtons from './components/FilterButtons'
import TodoItems from "./components/TodoItems"
import "./App.css"

export class App extends Component {

state = {
  todos : [],
  filter : "all"
}


 TodoAdd = (todo) => {
  this.setState(
    {todos : [todo,...this.state.todos]}
  )
}

// DeleteTodo = (id) => {
//   this.setState(
//     {
//       todos : this.state.todos.filter(todo => todo.id !== id)
//     }
//   )
// }


DeleteTodo = (id) => {
  this.setState(
    {
      todos : this.state.todos.filter(item => item.id !== id)
    }
  )
}

ToggleTodo = (id) => {
  console.log("click")
  this.setState(
    {
      todos : this.state.todos.map((item) => {
        if(item.id === id)
        {
          return{
               ...item,
               status : !item.status
          }
        }
        else{
          return item
          
        }
      })
    }
  )
}

FilterTodo = (filter) => {
   this.setState(
     {
       filter
     }
   )
}


  render() {
     var NewTodo = []
     if(this.state.filter === "all")
     {
       NewTodo = this.state.todos
     }
     else if(this.state.filter ==="complete")
     {
       NewTodo = this.state.todos.filter(item => item.status)
     }
     else if(this.state.filter === "active")
     {
      NewTodo = this.state.todos.filter(item => !item.status)
    }
    return (
      <div  className = "align3">
        <TodoItems
          SendTodo = {this.TodoAdd} />
            <FilterButtons 
            Filter = {this.FilterTodo}
          />
          {
           NewTodo.map((item) => {
              return(
                <DisplayTodos
                  key = {item.id}
                  task = {item}
                  Delete = {this.DeleteTodo}
                  Toggle = {this.ToggleTodo}
                
                />
              )
            })
         
          }
        
      </div>
    )
  }
}

export default App



