import { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch';

import './index.css';

export const LayouEffect = () => {


    const { counter, increment } = useCounter(1);


    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

    const { data, loading } = useFetch(url);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])


    return (
        <div>
            <h1> LayoutEffect </h1>
            <hr />


            <blockquote className='blockquote'>
                <p ref={pTag} className='mb-0'>{quote}</p>
            </blockquote>

            <button
                className='btn btn-primary'
                onClick={() => increment(1)}>
                {
                    loading
                        ?
                        (
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border spinner-border-sm ml-3" role="status" aria-hidden="true"></div>
                            </div>
                        )
                        :
                        (
                            'Next Quote'
                        )
                }
            </button>
        </div>
    )
};
