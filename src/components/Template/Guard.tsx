import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

interface GuardProviderProps {
    children: React.ReactNode | any
}

const GuardProvider: React.FC<GuardProviderProps> = ({
  children,
}: GuardProviderProps) => {
  const {auth} = useContext(AuthContext);

  // return auth.token ? children : <Navigate to="/" />;
  return children;
}

export default GuardProvider
