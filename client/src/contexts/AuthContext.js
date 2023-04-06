import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    //TODO: notify user if there is an error
    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            setError('');

            navigate('/catalog');
        } catch (error) {
            setError(error.message); //TODO
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (registerData.password.length <= 5) {
            setError('Password is too short!');
            return;
        }
        if (confirmPassword !== registerData.password) {
            setError('Password do not match!');
            return; //TODO: notify user
        }

        try {
            const result = await authService.register(values);

            setAuth(result);

            setError('');

            navigate('/catalog');
        } catch (error) {
            setError(error.message);
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        error,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken, //truthy => true, falsy => false
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};