import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => { //on change event on form
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => { //on form submit
        e.preventDefault();

        onSubmitHandler(values); //onSubmitHandler is imported from log context

        setValues(initialValues); //clears the form
    };

    //for edit log
    const changeValues = (newValues) => {
        setValues(newValues);
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    }
};