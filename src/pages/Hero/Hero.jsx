import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Simplify your day with Kivo!</h1>
        <p>Stay organized and boost your productivity with our intuitive application</p>
        <div className="hero-cta-buttons">
          <button className="hero-cta" onClick={() => navigate('/signup')}>Get Started</button>
          <button className="hero-cta" onClick={() => navigate('/login')}>Log in</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
