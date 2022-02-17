import React, { useEffect } from 'react';
import { useForm } from '../../hook/useForm';
import './efect.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(()=>{
        
    },[email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    name='name'
                    value={name}
                    placeholder='Ingrese su nombre'
                    autoComplete='off'
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>

                <input
                    type='text'
                    className='form-control'
                    name='email'
                    value={email}
                    placeholder='Ingrese su email'
                    autoComplete='off'
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>

                <input
                    type='password'
                    className='form-control'
                    name='password'
                    value={password}
                    placeholder='*****'
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-warning'>Guardar</button>
        </form>
    )
};
