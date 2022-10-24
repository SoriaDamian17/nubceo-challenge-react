import { axiosBase } from '.';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
};

const AlbumsApi = {
    get: (url:string, header?: any) => axiosBase.get(`${url}`, {
        headers: {
            ...headers,
            header
        },
    }),
};

export { AlbumsApi };