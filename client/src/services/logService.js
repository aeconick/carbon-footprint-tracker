import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/logs'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const logs = Object.values(result);

    return logs;
};

export const getOne = async (logId) => {
    const result = await request.get(`${baseUrl}/${logId}`);

    return result;
};

export const create = async (logData) => {
    const result = await request.post(baseUrl, logData);

    return result;
}