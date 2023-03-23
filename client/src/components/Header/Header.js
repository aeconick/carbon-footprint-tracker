import { Link } from 'react-router-dom'

import './Header.css';

export const Header = () => {
    return (
        <header>
            <h1><Link className="home" to="/">CarbonTracker</Link></h1>
            <nav>
                <Link to="/catalog">All logs</Link>
                {/* Logged */}
                <div id="user">
                    <Link to="/create-log">Log Emission</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                {/* Guest */}
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
};