import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key); //gets item from local storage
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);

            return persistedState; //return token if available
        }

        return initialValue;//return {};
    });

    const setLocalStorage = (value) => {
        setState(value); //set token to state

        localStorage.setItem(key, JSON.stringify(value)); //set token to local storage
    };

    return [
        state,
        setLocalStorage,
    ];
};