import { useForm } from '../../hooks/useForm';
import './CreateLog.css';

//TODO: fix emissions bug


export const CreateLog = ({
    onCrateLogSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        emissions: '',
        imageUrl: '',
        summary: '',
    }, onCrateLogSubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" method='POST' onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Log</h1>
                    <label htmlFor="log-title">Log title:</label>
                    <input value={values.title} onChange={changeHandler}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter log title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={changeHandler}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter log category..."
                    />
                    <label htmlFor="emissions">Emissions:</label>
                    <input value={values.emissions} onChange={changeHandler}
                        type="number"
                        id="emissions"
                        name="emissions"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="log-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea value={values.summary} onChange={changeHandler} name="summary" id="summary" />
                    <input className="btn submit" type="submit" defaultValue="Create Log" />
                </div>
            </form>
        </section>
    );
};