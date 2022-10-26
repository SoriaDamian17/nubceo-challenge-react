import { axiosBase } from '.';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
};

const BandsApi = {
    get: (url:string, id?: string, filter?: any, header?: any) => {
        let pathUrl = `${url}?_sort=name&_order=${filter.sort}`;
        if (id) pathUrl += `&id=${id}`
        if (filter.genre !== 'All bands')
            pathUrl += `&genreCode=${filter.genre}`
        return axiosBase.get(`${pathUrl}`, {
            headers: {
                ...headers,
                header
            },
        })
    },
};

export { BandsApi };