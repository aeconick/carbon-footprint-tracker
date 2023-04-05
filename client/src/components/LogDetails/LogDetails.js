import { useEffect, useState, useContext, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { logServiceFactory } from '../../services/logService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

import './LogDetails.css';
import { AddComment } from './AddComment';
import { logReducer } from '../../reducers/logReducer';



export const LogDetails = () => {
    const { logId } = useParams();
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
    const [log, dispatch] = useReducer(logReducer, {});
    const logService = useService(logServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            logService.getOne(logId),
            commentService.getAll(logId),
        ]).then(([logData, comments]) => {
            const logState = {
                ...logData,
                comments,
            };

            dispatch({ type: 'LOG_FETCH', log: logState });
        });
    }, [logId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(logId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            comment: response,
            userEmail,
        });
    };

    const isOwner = log._ownerId === userId;

    const onDeleteClick = async () => {
        logService.del(log._id);
        //TODO: delete from state
        navigate('/catalog');
    }

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
                        {/* TODO: make username from email and add it to header and to commend */}
                        {log.comments && log.comments.map(x =>
                        (
                            <li key={x._id} className="comment">
                                <p>{`${x.author.email}: ${x.comment}`}</p>
                            </li>
                        )
                        )}
                    </ul>

                    {log.comments?.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}

                </div>

                {/* edit/delete */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${log._id}/edit`} className="button">Edit</Link>
                        <a className="button" onClick={onDeleteClick}>Delete</a>
                    </div>
                )}
            </div>

            {/* comments */}
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

        </section>
    );
}