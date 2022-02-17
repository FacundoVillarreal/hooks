import React, { useEffect, useState } from 'react';
import './efect.css';
import { Message } from './Message';
;

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey');
    },[])


    
    useEffect(() => {
        // console.log('name cambio');
    },[name])
    
    useEffect(() => {
        // console.log('email cambio');
    },[email])


    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
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

            {(name === '123' ) && <Message />}
        </>
    )
};
