

const FilterButtons = ({Filter}) => {
    return (
        <div>
            <button onClick = {() => Filter("all")}>All</button>
            <button onClick = {() => Filter("complete")}>Complete</button>
            <button onClick = {() => Filter("active")}>Active</button>
        </div>
    )
}

export default FilterButtons
