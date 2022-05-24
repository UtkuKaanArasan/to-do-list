import styled from './Todo.module.css'
import TodoItem from './TodoItem';

function Todo({ data }) {
    
    return (
        <section className={styled.container}>
            <h2>To do</h2>
                <ol className={styled.listStyle}>
                    {
                        data.map((item) => {
                            return (
                                <TodoItem key={item.id} item={item} />
                            )
                        })
                    }
                </ol>
        </section>
    )
}

export default Todo;