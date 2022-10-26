import { axiosBase } from '.';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
};

const AlbumsApi = {
    get: (url:string, id?: string | number, header?: any) => {
        let pathUrl = url;
        if (id) pathUrl += `?bandId=${id}`;
        return axiosBase.get(pathUrl, {
            headers: {
                ...headers,
                header
            },
        })
    },
};

export { AlbumsApi };