// Style
import styled from './AddTodo.module.css'
// Dependencies
import { useState } from "react";

function AddTodo() {

    const [todo, setTodo] = useState("");

    function onChangeHandler(e) {
        setTodo(e.target.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(todo);
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
            <button className={styled.formButton} type="submit">Add</button>
        </form>
    )
}

export default AddTodo;