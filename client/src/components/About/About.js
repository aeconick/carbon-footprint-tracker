import './About.css';

export const About = () => {
    return (
        <section id="about">

        <div className="about-message">
            <h2>About us:</h2>
            <p>Carbon Footprint Tracker is a web application (Single Page Application) using React.js i've made as a final project for SoftUni's ReactJS Course. The app is a basic tracking system that lets users track their carbon footprint via Logs(activity and emissions) and connect to one another using the comments under every post. The application uses SoftUni's Practice Server as a backend.</p>
        </div>
        <img src="/images/about.png" alt="planet" />

        <div id="about-page">
            <h1>Quotes from famous climate activists:</h1>

            <div className="log">
                <div className="image-wrap">
                    <img src="/images/greta.jpg" />
                </div>
                <h3>Greta Thunberg</h3>
                <div className="quotes">
                    <p>"Once we start to act, hope is everywhere."</p>
                </div>
            </div>

            <div className="log">
                <div className="image-wrap">
                    <img src="/images/leonardo.jpg" />
                </div>
                <h3>Leonardo Dicaprio</h3>
                <div className="quotes">
                    <p>"Climate change is real. It is happening right now."</p>
                </div>
            </div>

            <div className="log">
                <div className="image-wrap">
                    <img src="/images/shailene.jpg" />
                </div>
                <h3>Shailene Woodley</h3>
                <div className="quotes">
                    <p>"The earth is neither for you or against you"</p>
                </div>
            </div>

        </div>
    </section>
    );
}