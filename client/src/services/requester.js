const request = async (method, url) => {
    const response = await fetch(url, {
        method,
    });

    //if server response is 204(no content) .json throws an error
    try {
        const result = await response.json();

        return result;
    } catch (error) {
        return {};
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DEL');
