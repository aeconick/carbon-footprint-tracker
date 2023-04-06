import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
    const { onLoginSubmit, error } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <section id="login-page" className="auth">
            <form id="login" method='POST' onSubmit={onSubmit} novalidate="">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@gmail.com"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    {error && <p className="error">{error}</p>}
                    <p className="field">
                        <span>
                            If you don't a have profile, click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};