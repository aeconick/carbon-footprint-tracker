import './Home.css';

export const Home = () => {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Track your emissions</h2>
                <h3>Keep global warming away</h3>
            </div>
            <img src="/images/planet.jpg" alt="planet" />

            <div id="home-page">
                <h1>Reviews from famous climate activists:</h1>

                <div className="log">
                    <div className="image-wrap">
                        <img src="/images/greta.jpg" />
                    </div>
                    <h3>Greta Thunberg</h3>

                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Review</a>
                    </div>
                </div>

                <div className="log">
                    <div className="image-wrap">
                        <img src="" />
                    </div>
                    <h3>Dummie name</h3>

                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Review</a>
                    </div>
                </div>

                <div className="log">
                    <div className="image-wrap">
                        <img src="" />
                    </div>
                    <h3>Dummie name</h3>
                    
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Review</a>
                    </div>
                </div>

                <div className="log">
                    <div className="image-wrap">
                        <img src="" />
                    </div>
                    <h3>Dummie name</h3>
                    
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Review</a>
                    </div>
                </div>
                
            </div>
        </section>
    );
};