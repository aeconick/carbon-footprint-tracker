import './Home.css';

export const Home = () => {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Track your emissions</h2>
                <h3>Keep global warming away</h3>
            </div>
            <img src="/images/planet.png" alt="planet" />

            <div id="home-page">
                <h1>Talks from famous climate activists:</h1>

                <div className="log">
                    <div className="image-wrap">
                        <img src="/images/greta.jpg" />
                    </div>
                    <h3>Greta Thunberg</h3>
                    <div class="quotes">
                        <span>lqlqlql</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Read More</a>
                    </div>
                </div>

                <div className="log">
                    <div className="image-wrap">
                        <img src="/images/leonardo.jpg" />
                    </div>
                    <h3>Leonardo Dicaprio</h3>
                    <div class="quotes">
                        <span>lqlqlqlq</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Read More</a>
                    </div>
                </div>

                <div className="log">
                    <div className="image-wrap">
                        <img src="/images/shailene.jpg" />
                    </div>
                    <h3>Shailene Woodley</h3>
                    <div class="quotes">
                        <span>lqlqlq</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Read More</a>
                    </div>
                </div>

            </div>
        </section>
    );
};