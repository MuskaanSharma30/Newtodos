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
        <div className = "dec">
           
            <div style = {{textDecoration : task.status?"line-through":""}} className = "task">{task.work}</div>
            <div className = "right"><button onClick = {() => Toggle(task.id)} className = "comp">Done</button>
            {/* <button onClick = {RemoveTodo}>Del</button>  */}
             <button onClick = {() => Delete(task.id)} className = "del">X</button></div>
        </div>
    )
}

export default DisplayTodos
