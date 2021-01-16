// import React from 'react'

// const DisplayTodos = ({todo}) => {
//     return (
//         <div>
//             {
//               todo.task
//             }
//         </div>
//     )
// }

// export default DisplayTodos


// import React from 'react'

// export const DisplayTodos = ({todo}) => {
//     return (
//         <div>
//             {
//                 todo.task
//             }
//         </div>
//     )
// }




const DisplayTodos = ({task,Delete,Toggle}) => {

// RemoveTodo = () => {
//     Delete(task.id)
// }
 

    return (
        <div>
           
            <div style = {{textDecoration : task.status?"line-through":""}}>{task.work}</div>
            <button onClick = {() => Toggle(task.id)}>Comp</button>
            {/* <button onClick = {RemoveTodo}>Del</button>  */}
             <button onClick = {() => Delete(task.id)}>Del</button>
        </div>
    )
}

export default DisplayTodos
