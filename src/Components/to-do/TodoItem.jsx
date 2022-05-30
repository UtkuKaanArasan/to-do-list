// Style
import styled from './TodoItem.module.css';
// Dependencies
import { useState } from 'react'

function TodoItem({ item, remove }) {

    const [isDone, setIdDone] = useState(item.done)
    const [itemStyling, setItemStyling] = useState("")

    function checkboxHandler() {
        if (isDone === true) {
            setIdDone(false)
            setItemStyling(null)
        }
        else if (isDone === false) {
            setIdDone(true)
            setItemStyling(styled.listItemDone)
        }
    }

    function removeHandler() {
        // prop drilling goes to "Todo" component
        remove(item.id)
    }

    return (
        < div key={item.id} className={styled.listContainer} >
            <input type="checkbox" onChange={checkboxHandler} />
            <li className={itemStyling}>{item.title}</li>
            <button onClick={removeHandler}>Remove</button>
        </div >
    )
}

export default TodoItem;