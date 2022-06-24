// Hooks
import { useRef, useState } from "react";
// Style
import styled from './AddTodo.module.css'

function AddTodo(props) {

    const [todo, setTodo] = useState("");
    const submitButton = useRef()

    function onChangeHandler(e) {
        setTodo(e.target.value);
    }
    
    function onSubmitHandler(e) {
        e.preventDefault();
        const randomId = Math.floor(Math.random() * 255)
        props.newData({
            id: randomId,
            title: todo,
            done: false
        })
        submitButton.current.value = ""
    }
    
    return (
        <form className={styled.form} onSubmit={onSubmitHandler}>
            <h2 className={styled.formH2}>Add what you want todo later</h2>
            <input
                className={styled.formInput}
                type="text" 
                placeholder='Write here...'
                onChange={onChangeHandler}
                ref={submitButton}
            />
            <button className={styled.formButton} type="submit">Add</button>
        </form>
    )
}

export default AddTodo;