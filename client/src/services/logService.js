import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/logs'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const logs = Object.values(result);

    return logs;
};

export const create = async (logData) => {
    const result = await request.post(baseUrl, logData);

    console.log(result);

    return result;
}