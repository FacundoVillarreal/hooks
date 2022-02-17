import React from 'react';

export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {

    return (

        <li
            className='list-group-item '
            key={todo.id}

        >
            <p className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id, todo.description)}
            >
                {i + 1}. {todo.description}
            </p>

            <button
                className='btn btn-danger btn-md'
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
};
