import React, { useEffect, useReducer, useState } from 'react';
import { notaReducer } from './notaReducer';


import './style.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {


    const [inputValue, setInputValue] = useState('');


    const [todos, dispatch] = useReducer(notaReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            description: inputValue,
            done: false
        };

        if (newTodo.description.length <= 0) {
            return
        }

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
        setInputValue('');
    }


    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleDelete = (notaId) => {
        const action = {
            type: 'delete',
            payload: notaId
        }

        dispatch(action)
    }


    const handleToggle = (todoId) => {

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);
    }

    return (

        <div className='row'>
            <div className='col-7'>
                <h1>Notas ( {todos.length} )</h1>
                <hr />

                <ul className='list-group list-group-flush'>
                    {
                        todos.map((todo, i) => (
                            <li key={todo.id}
                                className='list-group-item'
                            >
                                <p className={`${ todo.done && 'complete' }`}
                                    onClick={() => handleToggle(todo.id)}
                                >
                                    {i + 1} .  {todo.description}
                                </p>

                                <button
                                    className='btn btn-info'
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Borrar
                                </button>
                            </li>
                        )
                        )
                    }
                    <hr />
                </ul>
            </div>


            <div className='col-5'>
                <h1>Agregar Nota</h1>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='description'
                        className='form-control'
                        placeholder='Escribe una nota'
                        autoComplete='off'
                        value={inputValue}
                        onChange={handleChange}
                    />

                    <button
                        className='btn btn-outline-info mt-1 btn-block'
                        type='submit'
                    >
                        Agregar
                    </button>
                </form>

            </div>
        </div>
    )
};
