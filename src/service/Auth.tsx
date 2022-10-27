import { IAuth } from '../context/AuthContext';
import { generate_token } from '../shared/utils';

export interface IBody {
    username: string,
    password: string,
}

const AuthApi = {
    post: (url:string, data:IBody) => new Promise((resolve, reject) => {
        if (
            data.username === process.env.REACT_APP_USER_EMAIL ||
            data.password === process.env.REACT_APP_USER_PASSWORD
        ) {
            const Auth: IAuth = {
                expiration: 'never',
                expiresIn: 0,
                refreshToken: '',
                token: generate_token(32),
                user: data.username,
            }
            return resolve(Auth)
        } else {
            return reject("Error credentials!")
        }
    }),
};

export { AuthApi };