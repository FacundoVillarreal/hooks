
export const notaReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            return state.filter(nota => nota.id !== action.payload)

        case 'toggle':
            return state.map(todo =>
               ( todo.id === action.payload )
                    ? {
                        ...todo,
                        done: !todo.done
                    }
                    : todo
            )

        default:
            return state;
    }


};
