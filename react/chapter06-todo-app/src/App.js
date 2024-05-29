import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from './store/todoSlice';
import TodoItem from './components/TodoItem';

function App() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const [text, setText] = useState('');
    const [filter, setFilter] = useState('all')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };
    

    
    const filterCompleted = todos.filter(todo => todo.completed === true)
    const filterActive = todos.filter(todo => todo.completed === false)
    const handleFilter = (e) => {
        setFilter(e.target.id)
    }

    
    
    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
            <div className='filters'>
                <button onClick={e => handleFilter(e)} id="all">모두 보기</button>
                <button onClick={e => handleFilter(e)} id="completed">완료 된 할일 목록</button>
                <button onClick={e => handleFilter(e)} id="active">미완료 된 할 일 목록</button>
            </div>
            <ul>
                {(filter === 'all') && todos.map((todo) => (
                    <TodoItem setText={setText} todo={todo}/>
                ))}
                {(filter === 'completed') && filterCompleted.map((todo) => (
                    <TodoItem setText={setText} todo={todo}/>
                ))}
                {(filter === 'active') && filterActive.map((todo) => (
                    <TodoItem setText={setText} todo={todo}/>
                ))}
            </ul>
        </div>
    );
}

export default App;
