import { useState, useMemo } from 'react';
import { useCounter } from '../../hook/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter(3000);
    const [show, setShow] = useState(true);

    const procesoPesado = (itereaciones) => {

        for (let index = 0; index < itereaciones; index++) {
            console.log('ahi vamos');
        }

        return `${itereaciones} iteraciones realizadas`
    }


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            <h3>Counter: {counter} </h3>

            <p>{memoProcesoPesado}</p>
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
