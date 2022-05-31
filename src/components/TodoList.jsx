import Todo from './Todo';

const TodoList = ({todoList, setTodo, deleteTodo, setTodoList, dark}) => {
    
    const editStateTodo = (id) => {
        const editTodos = todoList.map(item => (
            item.id === id ? {...item, stateTodo: !item.stateTodo} : item
        ))
  
        setTodoList(editTodos)
    }
    const textStyle = {
        h2DarkMode : "font-black text-3xl text-center text-slate-200",
        h2LightMode : "font-black text-3xl text-center",
        pDarkMode : "text-lg mt-5 mb-5 text-center text-slate-200 font-black",
        pLightMode : "text-lg mt-5 mb-5 text-center text-slate-800 font-black",
    };
    return (
        <div className="md:w-1/2 lg:w-3/5 mx-5 mt-10">
            {todoList && todoList.length ? (
                <>
                    <h2
                        className={dark ? textStyle.h2DarkMode : textStyle.h2LightMode}
                    >
                        Todo list
                    </h2>
        
                    <p
                    className={dark ? textStyle.pDarkMode : textStyle.pLightMode}
                    >
                        manage your tasks
                    </p>
                </>
            ) : (
                <>
                    <h2
                        className={dark ? textStyle.h2DarkMode : textStyle.h2LightMode}
                        >
                        Here will be your tasks
                    </h2>
        
                    <p
                        className={dark ? textStyle.pDarkMode : textStyle.pLightMode}
                    >
                        you can add them by completing the form
                    </p>
                </>
            )}
    
            <div
                className={todoList.length <= 2 ? 'overflow-y-hidden' : 'md:h-screen overflow-y-scroll'}
            >
                { todoList.map( todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        setTodo={setTodo}
                        deleteTodo={deleteTodo}
                        editStateTodo={editStateTodo}
                    />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList