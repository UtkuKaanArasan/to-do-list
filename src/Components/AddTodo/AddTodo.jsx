// Style
import styled from './AddTodo.module.css'
// Dependencies
import { useCallback, useState } from "react";

function AddTodo(props) {

    const [value, setValue] = useState({});
    const [todo, setTodo] = useState("");

    function onChangeHandler(e) {
        setTodo(e.target.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        props.newData(value)
    }

    function onClickHandler() {
        setValue({
            id: todo,
            title: todo,
            done: false
        })
    }

    return (
        <form className={styled.form} onSubmit={onSubmitHandler}>
            <h2 className={styled.formH2}>Add what you want todo later</h2>
            <input
                className={styled.formInput}
                type="text" 
                placeholder='Write here...'
                onChange={onChangeHandler}
            />
            {/* Think p tag like console log */}
            <p>{ todo.title }</p>
            <button onClick={onClickHandler} className={styled.formButton} type="submit">Add</button>
        </form>
    )
}

export default AddTodo;