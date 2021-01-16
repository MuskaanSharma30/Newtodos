// import React from 'react'

// const TodoItems = (props) => {
//     return (
//         <div>
//             {props.id}
//             {props.name}
//         </div>
//     )
// }

// export default TodoItems

// import React, { useState } from 'react'
// import {v4 as uuid} from 'uuid'

// const TodoItems = (props) => {

// const [value, setValue] = useState("")

// const ChangeValue = (event) => {
//     setValue(event.target.value)
// }

// const SubmitValue = (event) => {
//     event.preventDefault()
//     props.TodoSubmit(
//         {
//             id : uuid(),
//             task : value,
//             status : false
//         }
//     )
//     setValue("")
// }

//     return (
//         <div>
//             <form onSubmit = {SubmitValue}>
//              <input onChange = {ChangeValue} value = {value}></input>
//             <button>Add Todo</button>
//             </form>
//         </div>
//     )
// }

// export default TodoItems




// import React from 'react'

// const TodoItems = (props) => {

// const [value, setValue] = useState("")
  
// const ChangeValue = (event) => {
//     setValue(event.target.value)
// }

// const SubmitForm = (event) => {
//     event.preventDefault()
//     props.TodoItem(
//         {
//             id : uuid,
//             task : value,
//             complete : false
//         }
//     )
//     setValue("")
// }


//     return (
//         <div>
//             <form onSubmit = {SubmitForm}>
//               <input onChange = {ChangeValue} value = {value}></input>
//                 <button>Add Todo</button>
//             </form>
//         </div>
//     )
// }

// export default TodoItems


import {useState} from "react"
import {v4 as uuidv4} from "uuid"

const TodoItems = (props) => {

const [data, setData] = useState("")

const ChangeForm = (e) => {
  setData(e.target.value)
}

const SubmitForm = (e) => {
    e.preventDefault()
    props.SendTodo(
        {
            id: uuidv4(),
            work : data,
            status : false
        }
    )
    setData("")
}

    return (
        <div>
            <form onSubmit = {SubmitForm}>
                <input onChange = {ChangeForm} value = {data}></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoItems






























