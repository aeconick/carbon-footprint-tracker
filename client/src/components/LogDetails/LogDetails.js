import { useEffect, useState, useContext, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { logServiceFactory } from '../../services/logService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';
import { LogContext } from '../../contexts/LogContext';

import './LogDetails.css';
import { AddComment } from './AddComment';
import { logReducer } from '../../reducers/logReducer';

export const LogDetails = () => {
    const { logId } = useParams();
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
    const { deleteLog } = useContext(LogContext);
    const [log, dispatch] = useReducer(logReducer, {});
    const [showModal, setShowModal] = useState(false);
    const [error,setError] = useState('');
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
        if(values.comment.length<2){
            setError('Comment is too short!');
            return;
        }
        const response = await commentService.create(logId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            comment: response,
            userEmail,
        });

        setError('');
    };

    const isOwner = log._ownerId === userId;

    const onDeleteClick = () => {
        setShowModal(true);
    };

    const onModalAccept = async () => {
        await logService.del(log._id);

        deleteLog(log._id);

        setShowModal(false);

        navigate('/catalog');
    };

    const onModalDecline = () => {
        setShowModal(false);
    };


    return (
        <section id="log-details">
            <h1>Log Details</h1>
            <div className="info-section">

                <div className="log-header">
                    <img className="log-img" src={log.imageUrl} alt='something' />
                    <h1>{log.title}</h1>
                    <span className="emissions">Emissions: {log.emissions}</span>
                    <p className="type">{log.category}</p>
                </div>

                <p className="text">{log.summary}</p>

                {/* guests */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {log.comments && log.comments.map(x =>
                        (
                            <li key={x._id} className="comment">
                                <p>{`${(x.author.email).split('@')[0]}: ${x.comment}`}</p>
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

                {/* modal */}
                {showModal && (
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <p className="modal-text">Are you sure you want to delete this Log?</p>
                            <div className="modal-buttons">
                            <button className="button" onClick={onModalAccept}>Yes</button>
                            <button className="button" onClick={onModalDecline}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* comments */}
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} error={error}/>}

        </section>
    );
}