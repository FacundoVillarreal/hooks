import { useCallback, useState } from "react";
import { ShowIncremet } from "./ShowIncremet";

export const CallbackHook = () => {


    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter( c => c + num);
    },[setCounter]);    

    return (
        <div>
            <h1>CallbackHook {counter} </h1>
            <hr />

            <ShowIncremet increment={increment} />
        </div>
    );
};
