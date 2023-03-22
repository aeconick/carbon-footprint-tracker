export const Home = () => {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Log your Carbon Emissions</h2>
                <h3>Save the planet</h3>
            </div>
            <img src="./earth.png" alt="planet" />

            <div id="home-page">
                <h1>Latest Logs from our users</h1>

                {/* Display div: with information about every log (if any) */}
                <div className="log">
                    <div className="image-wrap">
                        <img src="" />
                    </div>
                    <h3>Dummie name</h3>

                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="log">
                    <div className="image-wrap">
                        <img src="" />
                    </div>
                    <h3>Dummie name</h3>

                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="log">
                    <div className="image-wrap">
                        <img src="" />
                    </div>
                    <h3>Dummie name</h3>
                    
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
};