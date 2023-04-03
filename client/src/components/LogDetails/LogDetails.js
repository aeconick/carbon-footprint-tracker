import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import './LogDetails.css';

import { logServiceFactory } from '../../services/logService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';
import * as commentService from '../../services/commentService';

export const LogDetails = () => {
    const { userId } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    //const [comments, setComments] = useState([]);
    const { logId } = useParams();
    const [log, setLog] = useState([]);
    const logService = useService(logServiceFactory);

    //TODO: not the best implementation (DONT MIX SERVICES)
    useEffect(() => {
        logService.getOne(logId)
            .then(result => {
                setLog(result);
                // return commentService.getAll(logId);
            }) //promise chaining
        // .then(result => {
        //     setComments(result);
        // });
    }, [logId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        // await commentService.create({
        //     logId,
        //     username,
        //     comment,
        // });

        //TODO: remove later, works for jsonstore only
        await logService.addComment(logId, {
            logId,
            username,
            comment,
        });

        setUsername('');
        setComment('');

    };

    const isOwner = log._ownerId === userId;

    return (
        <section id="log-details">
            <h1>Log Details</h1>
            <div className="info-section">

                <div className="log-header">
                    <img className="log-img" src={log.imageUrl} />
                    <h1>{log.title}</h1>
                    <span className="emissions">Emissions: {log.emissions}</span>
                    <p className="type">{log.category}</p>
                </div>

                <p className="text">{log.summary}</p>

                {/* guests */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* {comments.map(x => {
                            (
                                <li key={x._id} className="comment">
                                    <p>{`${x.username} ${x.comment}`}</p>
                                </li>
                            )
                        })} */}
                        {console.log(log.comments)}
                        {log.comments && Object.values(log.comments).map(x =>
                        (
                            <li key={x._id} className="comment">
                                <p>{`${x.username}: ${x.comment}`}</p>
                            </li>
                        )
                        )}

                    </ul>

                    {/* {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )} */}

                </div>

                {/* edit/delete */}
                {isOwner && (
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                )}
            </div>

            {/* comments */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    {/* TODO: change onChange on username and comment to not be inline */}
                    <input type="text" name="username" placeholder="Nikolay" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" placeholder="Write your comment here..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}