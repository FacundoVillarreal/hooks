import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });
    const isMounted = useRef(true);

    useEffect(() => {
        return (() => {
            //este cambio no va a disparar nuevamente la renderizacion del componente
            //simplemente estoy manteniendo la referencia al mismo
            isMounted.current = false;
        })
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null })
        fetch(url).then(res => res.json())
            .then(data => {
                    if( isMounted.current ){
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }
            })
    }, [url])

    return state
};
