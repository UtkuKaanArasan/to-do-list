// Style
import styled from './Todo.module.css'
// Components
import TodoItem from './TodoItem';

function Todo({ data, remove }) {

    function removeHandler(data) {
        /* this is prop drilling, because the app is small, i use prop
        drilling even though i shouldn't */
        // goes to "App" component
        remove(data);
    }

    return (
        <section className={styled.container}>
            <h2>To do</h2>
            <ol className={styled.listStyle}>
                {
                    data.map((item) => {
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                remove={removeHandler}
                            />
                        )
                    })
                }
            </ol>
        </section>
    )
}

export default Todo;