import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { logServiceFactory } from '../services/logService';

export const LogContext = createContext();

export const LogProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);
    const [error, setError] = useState('');
    const logService = logServiceFactory();

    useEffect(() => {
        logService.getAll()
            .then(result => {
                setLogs(result)
            })
    }, []);

    const onCreateLogSubmit = async (data) => {
        if ((data.category === '') || (data.emissions === '') || (data.imageUrl === '') || (data.summary === '') || (data.title === '')) {
            setError('All fields must be filled!');
            return;
        }
        if (!(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(data.imageUrl))) {
            setError('Invalid image url!');
            return;
        }

        const newLog = await logService.create(data);

        setLogs(state => [...state, newLog]);

        setError('');

        navigate('/catalog');
    };

    const onLogEditSubmit = async (values) => {
        console.log(values);
        if ((values.category === '') || (values.emissions === '') || (values.imageUrl === '') || (values.summary === '') || (values.title === '')) {
            setError('All fields must be filled!');
            return;
        }
        if (!(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(values.imageUrl))) {
            setError('Invalid image url!'); //TODO:maybe a bug
            return;
        }

        const result = await logService.edit(values._id, values);

        setLogs(state => state.map(x => x._id === values._id ? result : x));

        setError('');

        navigate(`catalog/${values._id}`);
    };

    const deleteLog = (logId) => {
        setLogs(state => state.filter(log => log._id !== logId));
    }

    const contextValues = {
        logs,
        error,
        deleteLog,
        onCreateLogSubmit,
        onLogEditSubmit,
    };

    return (
        <LogContext.Provider value={contextValues}>
            {children}
        </LogContext.Provider>
    );
};