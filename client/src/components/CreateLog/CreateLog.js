import './CreateLog.css';

export const CreateLog = () => {
    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Create Log</h1>
                    <label htmlFor="log-title">Log title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter log title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter log category..."
                    />
                    <label htmlFor="emissions">Emissions:</label>
                    <input
                        type="number"
                        id="emissions"
                        name="emissions"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="log-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Create Log" />
                </div>
            </form>
        </section>
    );
};