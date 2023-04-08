import { useContext } from 'react';

import { LogContext } from '../../contexts/LogContext';

import './Diary.css';
import { CatalogItem } from './CatalogItem';

export const Diary = () => {
    const { personalLogs } = useContext(LogContext);

    let totalEmissions = 0;
    personalLogs.forEach(log => {
        totalEmissions += Number(log.emissions);
    });

    return (
        <section id="diary-page">
            <h1>Your total emissions: {totalEmissions}</h1>

            {personalLogs.map(x => <CatalogItem key={x._id} {...x} />)}

            {personalLogs.length === 0 && (
                <h3 className="no-articles">No logs yet</h3>
            )}
        </section>

    );
};