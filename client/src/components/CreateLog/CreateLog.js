import { useState } from 'react';

import './CreateLog.css';


export const CreateLog = ({
    onCrateLogSubmit,
}) => {
    const [values, setValues] = useState({
        title: '',
        category: '',
        emissions: '',
        imageUrl: '',
        summary: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }
    const onSubmit = (e) => {
        e.preventDefault();

        onCrateLogSubmit(values);
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Log</h1>
                    <label htmlFor="log-title">Log title:</label>
                    <input value={values.title} onChange={onChangeHandler}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter log title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={onChangeHandler}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter log category..."
                    />
                    <label htmlFor="emissions">Emissions:</label>
                    <input value={values.emissions} onChange={onChangeHandler}
                        type="number"
                        id="emissions"
                        name="emissions"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="log-img">Image:</label>
                    <input value={values.imageUrl} onChange={onChangeHandler}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea value={values.summary} onChange={onChangeHandler} name="summary" id="summary" />
                    <input className="btn submit" type="submit" defaultValue="Create Log" />
                </div>
            </form>
        </section>
    );
};