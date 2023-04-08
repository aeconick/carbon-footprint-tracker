import { createContext, useState } from "react";
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

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            
            setAuth(result);
            
            //notify user if there is an error
            setError('');

            navigate('/catalog');
        } catch (error) {
            setError(error.message);
        }
    };

    const onRegisterSubmit = async (values) => { //TODO: check email
        const { confirmPassword, ...registerData } = values;

        if (!(/.+\@.+\..+/.test(registerData.email))) {
            setError('Invalid email!');
            return;
        }

        if (confirmPassword !== registerData.password) {
            setError('Password does not match!');
            return;
        }

        if (registerData.password.length <= 5) {
            setError('Password is too short!');
            return;
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