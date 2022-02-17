import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {

        inputRef.current.select();
        console.log(inputRef.current.value);
    };



    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
            ref={inputRef}
                type='text'
                placeholder="Su nombre"
                className="form-control"
            />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>

    )
};
