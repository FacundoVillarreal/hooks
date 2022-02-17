import { useState } from 'react';
import { useCounter } from '../../hook/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);


    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <h1>Counter:{<Small value={counter} />}</h1>
            <div className='mt-5'>
                <button
                    onClick={() => increment(1)}
                    className='btn btn-outline-warning'
                >
                    +
                </button>

                <button
                    className='btn btn-outline-dark ml-5'
                    onClick={() => { setShow(!show) }}
                >
                    Show/hidde {JSON.stringify(show)}
                </button>

            </div>
        </div>
    )
};
