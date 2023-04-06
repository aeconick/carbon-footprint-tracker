import './About.css';

export const About = () => {
    return (
        <section id="about">

        <div className="about-message">
            <h2>About us:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi, repellat quidem sint explicabo reprehenderit minima voluptates quos aspernatur. Quas, nostrum inventore. Beatae esse itaque, nobis unde aliquid facere architecto officiis minus fugiat, pariatur eligendi sed vel ipsam vitae, quam eum! Sed sint atque ea facilis labore impedit dignissimos itaque sunt qui a dolore incidunt soluta perferendis ipsum excepturi aspernatur.</p>
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