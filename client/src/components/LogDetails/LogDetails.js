import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { logServiceFactory } from '../../services/logService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import './LogDetails.css';
import { AddComment } from './AddComment';

export const LogDetails = () => {
    const { logId } = useParams();
    const { userId, isAuthenticated } = useContext(AuthContext);
    const [log, setLog] = useState([]);
    const { } = useForm({
        comment: '',
    })
    const logService = useService(logServiceFactory);
    const navigate = useNavigate();

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

    const onCommentSubmit = async (values) => {
       const result = await commentService.create(logId,values.comment);

       console.log(result);

        // state

        // setUsername('');
        // setComment('');

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
                        {/* {comments.map(x => {
                            (
                                <li key={x._id} className="comment">
                                    <p>{`${x.username} ${x.comment}`}</p>
                                </li>
                            )
                        })} */}

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