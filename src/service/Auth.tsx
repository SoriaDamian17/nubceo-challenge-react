import { axiosBase } from '.';
import { IAuth } from '../context/AuthContext';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
};

export interface IBody {
    username: string,
    password: string,
}

const AuthApi = {
    post: (url:string, data:IBody) => new Promise((resolve, reject) => {
        console.log('data', data)
        console.log('process.env.REACT_APP_USER_EMAIL', process.env.REACT_APP_USER_EMAIL)
        console.log('process.env.REACT_APP_USER_PASSWORD', process.env.REACT_APP_USER_PASSWORD)
        if (
            data.username !== process.env.REACT_APP_USER_EMAIL ||
            data.password !== process.env.REACT_APP_USER_PASSWORD
        ) {
            console.log('reject')
            return reject("Error credentials!")
        }
        const Auth: IAuth = {
            expiration: 'never',
            expiresIn: 0,
            refreshToken: '',
            token: 'test',
            user: data.username,
        }
        console.log('resolve')
        return resolve(Auth)
    }),
};

export { AuthApi };