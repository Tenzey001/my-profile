function Hero() {
  return (
    <section className="hero">
      {/* If you want an image, you can style .hero-image in CSS or add an img tag */}
      {/* For now, let's keep it simple */}

      <div className="hero-text">
        <h1>Hi, I'm Tenzin Choden</h1>
        <p>
          I am committed to learning [Programming]with great interest and
          dedication.
        </p>
      </div>

      <div className="hero-links" style={{ marginTop: "1.5rem" }}>
        <a
          href="https://github.com/Tenzey001"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: "1.5rem",
            color: "inherit",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          GitHub
        </a>
        <a
          href="mailto:tendenzincho@gmail.com"
          style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default Hero;
