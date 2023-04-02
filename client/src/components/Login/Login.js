import { useContext } from 'react';

import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/userForm';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <section id="login-page" className="auth">
            <form id="login" method='POST' onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        placeholder="john@gmail.com"
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't a have profile, click <a href="/register">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};