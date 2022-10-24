import { createContext, FC, ReactNode, useState } from "react";

interface AuthContextProps {
    children: ReactNode,
}

interface IAuth {
    expiration: string;
    expiresIn: number;
    refreshToken: string;
    token: string;
    viewerToken: string;
    user: string;
}

export interface IAContext {
    auth: IAuth,
    setAuth: React.Dispatch<React.SetStateAction<IAuth>>
}

const defaultValue = {
    auth: {
        expiration: '',
        expiresIn: 0,
        refreshToken: '',
        token: '',
        viewerToken: '',
        user: '',
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setAuth: () => {},
};

export const AuthContext = createContext<IAContext>(defaultValue);

const AuthContextProvider: FC<AuthContextProps> = ({
    children
}) => {
    const InitialState: IAuth = {
        expiration: '',
        expiresIn: 0,
        refreshToken: '',
        token: '',
        viewerToken: '',
        user: '',
    };
    const [auth, setAuth] = useState<IAuth>(InitialState);

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;