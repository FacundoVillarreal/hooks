import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { FormTodo } from './FormTodo';

import './style.css'


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggle = (id) => {
        const action = {
            type: 'toggle',
            payload: id
        }

        dispatch(action)
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr />

            <div className='row'>
                <div className='col-7 '>
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>

                <div className='col-5'>
                    <h4>Agregar todo</h4>
                    <hr />

                    <FormTodo
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    );
};
