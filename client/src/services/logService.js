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
    }

    //TODO: delete later, only work for jsonstore
    const addComment = async (logId, data) => {
        const result = await request.post(`${baseUrl}/${logId}/comments`, data);

        return result;
    }

    return {
        getAll,
        getOne,
        create,
        addComment,
    }
}