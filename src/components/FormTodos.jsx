import { useEffect, useState } from 'react'
import ErrorForm from './ErrorForm';

const FormTodos = ({ todoList, setTodoList, todo, setTodo, dark }) => {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ stateTodo, setStateTodo ] = useState(false);

    const [ error, setError ] = useState(false);



    useEffect(() => {
        if (Object.keys(todo).length > 0) {
            setTitle(todo.title)
            setDescription(todo.description)
            setStateTodo(todo.stateTodo)
        }
    }, [todo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([ title, description ].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        const objectTodo = {
            title,
            description,
            stateTodo
        }

        if (todo.id) {
            objectTodo.id = todo.id

            const updatedTodos = todoList.map(task =>
                task.id === todo.id ? objectTodo : task 
            )

            setTodoList(updatedTodos)
            setTodo({})
        } else {
            objectTodo.id = new Date();
            setTodoList([...todoList, objectTodo])
        }
        setTitle('')
        setDescription('')
        setStateTodo(false)
    }

    const textStyle = {
        h2DarkMode : "font-black text-3xl text-center text-slate-200 my-auto",
        h2LightMode : "font-black text-3xl text-center my-auto",
        pDarkMode : "text-lg mt-5 mb-5 text-center text-slate-200 font-black",
        pLightMode : "text-lg mt-5 mb-5 text-center text-slate-800 font-black",
        labelDarkMode: "block text-white uppercase font-bold",
        labelLightMode : "block text-gray-800 uppercase font-bold"
    };

    const bgStyle = {
        formDark : "bg-blue-900 shadow-xl rounded-md py-10 px-5 font-sans",
        formLight : "bg-white shadow-xl rounded-md py-10 px-5 font-sans",
        inputDark : "text-white w-full p-2 mt-2 placeholder-gray-200 rounded-lg bg-gray-800 outline-none",
        inputLight : "w-full p-2 mt-2 placeholder-gray-500 rounded-lg bg-slate-100 outline-none",
        selectDark : "form-select appearance-none block w-full px-3 py-1.5 text-white bg-gray-800 border border-solid border-gray-800 rounded-lg focus:outline-none mt-2",
        selectLight : "form-select appearance-none block w-full px-3 py-1.5 text-gray-700 bg-slate-100 border border-solid border-gray-300 rounded-lg focus:text-gray-700 focus:outline-none mt-2"
    }
    const errorStyle = {
        input : "text-white w-full p-2 mt-2 placeholder-white rounded-lg bg-red-400 outline-none border-2 border-red-600",
        formError : "bg-red-400 shadow-xl rounded-md py-10 px-5 font-sans border-4 border-red-600",
        selectError : "form-select appearance-none block w-full px-3 py-1.5 text-white bg-red-400 border-2 border-red-600 rounded-lg focus:outline-none"
    }

    return (
        <div 
            className="md:w-1/3 lg:w-2/6 mx-5 mt-10"
        >
            <h2 
                className={dark ? textStyle.h2DarkMode : textStyle.h2LightMode}
            >
                Complete the form
            </h2>
            <p
                className={dark ? textStyle.pDarkMode : textStyle.pLightMode}
            >
                to create a task
            </p>

            <form
                onSubmit={handleSubmit}
                className={error ? errorStyle.formError : dark ? bgStyle.formDark : bgStyle.formLight}
            >
                {error ? <ErrorForm /> : ''}
                
                <div>
                    <label
                        className={dark ? textStyle.labelDarkMode : textStyle.labelLightMode}
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input 
                        autoFocus
                        className={error ? errorStyle.input : dark ? bgStyle.inputDark : bgStyle.inputLight}
                        id="title"
                        type="text" 
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div 
                    className="mt-10"
                >
                    <label
                        className={dark ? textStyle.labelDarkMode : textStyle.labelLightMode}
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea 
                        id="description"
                        className={error ? errorStyle.input : dark ? bgStyle.inputDark : bgStyle.inputLight}
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div 
                    className="mt-10"
                >
                    <label
                        className={dark ? textStyle.labelDarkMode : textStyle.labelLightMode}
                        htmlFor="description"
                    >
                        State
                    </label>

                    <select
                        className={error ? errorStyle.selectError :dark ? bgStyle.selectDark : bgStyle.selectLight}
                    >
                        <option 
                            value="pending"
                        >
                            Pending
                        </option>
                        <option 
                            value="completed"
                        >
                            Completed
                        </option>
                    </select>
                </div>

                
                <input
                    value={ todo.id ? 'EDIT' : 'SUBMIT'}
                    className="bg-emerald-600 w-full p-3 rounded-lg mt-5 text-white uppercase font-bold hover:bg-emerald-700 cursor-pointer transition-all"
                    type="submit"
                />

            </form>
        </div>
    )
}

export default FormTodos