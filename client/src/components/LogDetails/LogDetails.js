import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './LogDetails.css';

import * as logService from '../../services/logService';


export const LogDetails = () => {
    const { logId } = useParams();
    const [log, setLog] = useState([]);

    useEffect(() => {
        logService.getOne(logId)
            .then(result => {
                console.log(result);
                setLog(result);
            });
    }, [logId]);

    return (
        <section id="log-details">
            <h1>Log Details</h1>
            <div className="info-section">

                <div className="log-header">
                    <img className="log-img" src={log.imageUrl} />
                    <h1>{log.title}</h1>
                    <span className="levels">Emissions: {log.emissions}</span>
                    <p className="type">{log.category}</p>
                </div>

                <p className="text">{log.summary}</p>

                {/* guests */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current log (If any) */}
                        <li className="comment">
                            <p>Don't eat.</p>
                        </li>
                        <li className="comment">
                            <p>Content: lqlqlqlq</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no logs in the database */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* edit/delete */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* comments */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Write your comment here..."></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}