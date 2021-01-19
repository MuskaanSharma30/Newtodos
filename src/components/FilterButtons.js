

const FilterButtons = ({Filter}) => {
    return (
        <div className = "align4">
            <button onClick = {() => Filter("all")} className ="b1">All</button>
            <button onClick = {() => Filter("complete")} className ="b2">Complete</button>
            <button onClick = {() => Filter("active")} className ="b3">Active</button>
        </div>
    )
}

export default FilterButtons
// import React, { Component } from 'react'

// export class FilterButtons extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default FilterButtons
