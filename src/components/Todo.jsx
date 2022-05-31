
const Todo = ({todo, setTodo, deleteTodo, editStateTodo}) => {

    const { title, description, stateTodo, id } = todo;

    const handleDeleteTodo = () => {
        const res = confirm('do you want to delete this task?');
        if (res) {
            deleteTodo(id)
        }
    }

    const styleTodo = {
        stylePending : "mx-5 mb-10 bg-gray-100 shadow-md px-5 py-10 rounded-md transition-all border-4 border-red-400",
        styleCompleted : "mx-5 mb-10 bg-emerald-600 shadow-md px-5 py-10 rounded-md transition-all",
        pDarkMode : "font-bold mb-3 text-white uppercase",
        pLightMode : "font-bold mb-3 uppercase",
        spanDarkMode : "normal-case text-gray-200 font-black",
        spanLightMode : "normal-case text-slate-800 font-black"
    }

    return (
        <div
            className={stateTodo ? styleTodo.styleCompleted : styleTodo.stylePending}
        >
            {/*  */}
            <p
                className={stateTodo ? styleTodo.pDarkMode : styleTodo.pLightMode}
            >
                Title: {''}

                <span
                    className={stateTodo ? styleTodo.spanDarkMode: styleTodo.spanLightMode}
                >
                    {title}
                </span>
            </p>

            <p
                className={stateTodo ? styleTodo.pDarkMode : styleTodo.pLightMode}
            >
                Description: {''}
                <span
                    className={stateTodo ? styleTodo.spanDarkMode: styleTodo.spanLightMode}
                >
                    {description}
                </span>
            </p>

            <p
                className={stateTodo ? styleTodo.pDarkMode : styleTodo.pLightMode}
            >
                State: {''}
            <span
                className={stateTodo ? styleTodo.spanDarkMode: styleTodo.spanLightMode}
            >
                {stateTodo ? 'completed' : 'pending'}
            </span>
            </p>

            <div
                className="flex flex-wrap"
            >
                <button
                    type='button'
                    onClick={() => editStateTodo(id)}
                    className="py-2 px-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-md mr-5 mt-3 uppercase transition-all"
                >
                    State
                </button>
                <button
                    type='button'
                    onClick={() => setTodo(todo)}
                    className="py-2 px-5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-md mr-5 mt-3 uppercase transition-all"
                >
                    Edit
                </button>
                <button
                    type='button'
                    onClick={handleDeleteTodo}
                    className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md mt-3 uppercase transition-all"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Todo;
