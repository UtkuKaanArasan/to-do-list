import styled from './TodoItem.module.css';
import { useState } from 'react'

function TodoItem({ item }) {

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

    return (
        < div key={item.id} className={styled.listContainer} >
            <input type="checkbox" onChange={checkboxHandler} />
            <li className={itemStyling}>{item.title}</li>
        </div >
    )
}

export default TodoItem;