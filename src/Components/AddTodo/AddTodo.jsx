// Style
import styled from './AddTodo.module.css'
// Dependencies
import { useState } from "react";

function AddTodo(props) {

    const [todo, setTodo] = useState("");

    function onChangeHandler(e) {
        setTodo(e.target.value);
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        console.log(todo);
        setTodo(e.target.value)
        setTodo({
            id: todo,
            title: todo,
            done: false
        })
        console.log(todo);
        await props.newData(todo)
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
            <p>{ todo.title }</p>
            <button className={styled.formButton} type="submit">Add</button>
        </form>
    )
}

export default AddTodo;