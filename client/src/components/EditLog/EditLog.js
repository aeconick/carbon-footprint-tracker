import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { logServiceFactory } from "../../services/logService";
import { LogContext } from "../../contexts/LogContext";
import { AuthContext } from "../../contexts/AuthContext";

import './EditLog.css';

export const EditLog = () => {
    const { onLogEditSubmit, error } = useContext(LogContext);
    const { userId } = useContext(AuthContext)
    const { logId } = useParams();
    const logService = useService(logServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        emissions: '',
        imageUrl: '',
        summary: '',
    }, onLogEditSubmit);

    useEffect(() => {
        logService.getOne(logId)
            .then(result => {
                changeValues(result);
            })
    }, [logId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Log</h1>
                    <label htmlFor="log-title">Log title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                    />

                    <label htmlFor="emissions">Emissions:</label>
                    <input
                        type="number"
                        id="emissions"
                        name="emissions"
                        min="1"
                        onChange={changeHandler}
                        value={values.emissions}
                    />

                    <label htmlFor="log-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={changeHandler}
                        value={values.imageUrl}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                    {error && <p className="error">{error}</p>}
                    <input className="btn submit" type="submit" value="Edit Log" />

                </div>
            </form>
        </section>
    );
};