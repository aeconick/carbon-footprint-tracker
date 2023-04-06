import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { logServiceFactory } from '../services/logService';

export const LogContext = createContext();

export const LogProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);
    const logService = logServiceFactory();

    useEffect(() => {
        logService.getAll()
            .then(result => {
                setLogs(result)
            })
    }, []);

    const onCreateLogSubmit = async (data) => {
        const newLog = await logService.create(data);

        setLogs(state => [...state, newLog]);

        navigate('/catalog');
    };

    const onLogEditSubmit = async (values) => {
        const result = await logService.edit(values._id, values);

        setLogs(state => state.map(x => x._id === values._id ? result : x));

        navigate(`catalog/${values._id}`);
    };

    const deleteLog = (logId) => {
        setLogs(state => state.filter(log => log._id !== logId));
    }

    const contextValues = {
        logs,
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