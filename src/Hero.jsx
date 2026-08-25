function Hero({ title, description }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">JOSHUA DIGITAL</p>

        <h1>{title}</h1>

        <p className="hero-description">{description}</p>

        <div className="hero-actions">
          <button>Start a Project</button>
          <button className="secondary-button">View Our Services</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;