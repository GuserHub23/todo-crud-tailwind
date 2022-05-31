import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FormTodos from './components/FormTodos';
import TodoList from './components/TodoList';
import './app.css';
import Footer from './components/Footer';

const App = () => {

    const [ todoList, setTodoList ] = useState([]);

    const [ todo, setTodo ] = useState({});

    const [ dark, setDark ] = useState(true)

    // DARK MODE
    useEffect(() => {
      const getDarkModeLS = () => {
          const darkLS = JSON.parse(localStorage.getItem('darkMode')) ?? [];
          setDark(darkLS)
      }
      getDarkModeLS();
    }, []);

    // TODOS
    useEffect(() => {
      const getLS = () => {
          const todosLS = JSON.parse(localStorage.getItem('tasks')) ?? [];
          setTodoList(todosLS);
      }
      getLS();
    }, []);

    // TODOS
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todoList));
    }, [todoList]);

    // DARK MODE
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(dark));
    }, [dark]);
     
    const deleteTodo = (id) => {
      setTodoList(todoList.filter(todo => todo.id !== id ? todo : ''))
    }

    return (
      <div 
        className={dark ? "bg-slate-900 min-h-screen" : "bg-slate-200 min-h-screen"}
      >
        <Navbar 
            dark={dark}
            setDark={setDark}
        />
        <Header 
            dark={dark}
        />

        <div
            className="md:flex justify-center md:w-4/5 mx-auto"
        >
          <FormTodos
              todoList={todoList}
              setTodoList={setTodoList}
              todo={todo}
              setTodo={setTodo}
              dark={dark}
          />
          <TodoList 
              todoList={todoList}
              setTodo={setTodo}
              deleteTodo={deleteTodo}
              setTodoList={setTodoList}
              dark={dark}
          />
        </div>
      <Footer 
        dark={dark}
      />
      </div>
    )
}

export default App
