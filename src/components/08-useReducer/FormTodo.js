import React from 'react';
import { useForm } from '../../hook/useForm';

export const FormTodo = ({ handleAddTodo }) => {
    const [{ description }, handleInputValue, reset] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        handleAddTodo(newTodo)
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                autoComplete='off'
                className='form-control'
                name='description'
                placeholder='Aprender ...'
                type="text"
                value={description}
                onChange={handleInputValue}
            />
            <button
                type='submit'
                className='btn btn-outline-dark mt-1 btn-block'
            >
                Agregar
            </button>
        </form>
    );
};
