import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import '../03-examples/index.css'
import { useState } from 'react';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);


    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button className='btn btn-outline-dark mt-5' onClick={handleClick}>
                Show/Hide
            </button>
        </div>
    )
};
