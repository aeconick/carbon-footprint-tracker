import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/logs'

export const logServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const logs = Object.values(result);

        return logs;
    };

    const getOne = async (logId) => {
        const result = await request.get(`${baseUrl}/${logId}`);

        return result;
    };

    const create = async (logData) => {
        const result = await request.post(baseUrl, logData);

        return result;
    };

    const del = (logId) => request.del(`${baseUrl}/${logId}`);

    const edit = (logId, data) => request.put(`${baseUrl}/${logId}`, data);

    return {
        getAll,
        getOne,
        create,
        del,
        edit,
    }
}