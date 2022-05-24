import styled from './TodoItem.module.css';
import {useState} from 'react'


function TodoItem({item}) {

    const [isDone, setIdDone] = useState(item.done)

    console.log(isDone);

    function checkboxHandler() {
        if (isDone === true) {
            setIdDone(false)
        }
        else if (isDone === false) {
            setIdDone(true)
        }
    }

    return (
        < div key={item.id} className={styled.listContainer} >
            <input type="checkbox" onChange={checkboxHandler} />
            <li>{item.title}</li>
        </div >

    )
}

export default TodoItem;