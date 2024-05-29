import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../store/todoSlice';

const TodoItem = ({ setText, todo }) => {
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');


    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleEditStart = (id, text) => {
        setEditId(id);
        setEditText(text);
    };
    const handleEditSave = (id, text) => {
        if (editText.trim() !== '') {
            dispatch(
                editTodo({
                    id: id,
                    newTodo: editText,
                }),
            );
            setEditId(null);
            setEditText('');
        }
    };
    const handleEditCancel = (id, text) => {
        setEditId(null);
        setText('');
    };


    return (
        <li key={todo.id}>
            {todo.id === editId ? (
                <>
                    <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <div>
                        <button onClick={() => handleEditSave(todo.id, todo.text)}>Save</button>
                        <button onClick={handleEditCancel}>Cancel</button>
                    </div>
                </>
            ) : (
                <>
                    <input type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
                    <span>{todo.text}</span>
                    <div>
                        <span>{todo.date}</span>
                        <button onClick={() => handleEditStart(todo.id, todo.text)}>Edit</button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
