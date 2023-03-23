import './Header.css';

export const Header = () => {
    return (
        <header>
            <h1><a className="home" href="#">CarbonTracker</a></h1>
            <nav>
                <a href="#">All logs</a>
                {/* Logged */}
                <div id="user">
                    <a href="#">Log Emission</a>
                    <a href="#">Logout</a>
                </div>
                {/* Guest */}
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    );
};