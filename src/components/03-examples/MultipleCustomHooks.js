import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch';

import './index.css';

export const MultipleCustomHooks = () => {


    const { counter, increment } = useCounter(1);


    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

    const { data, error, loading } = useFetch(url);

    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1> Breacking Bad Quotes </h1>
            <hr />


            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            Laoding...
                        </div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }

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
