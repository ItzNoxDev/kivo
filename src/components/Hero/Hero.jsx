import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>simplify your day with Kivo!</h1>
        <p>Stay organized and boost your productivity with our intuitive application</p>
        <div className="hero-cta-buttons">
          <button className="hero-cta">Get Started</button>
          <button className="hero-cta">Log in</button>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
