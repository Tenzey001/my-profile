import React from "react";
import Hero from "../components/Hero";

const Home = () => (
  <>
    <Hero />
    <section
    
      style={{
        padding: "2rem",
        maxWidth: "750px",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <h2>Welcome to my portfolio!</h2>
      <p>This is where I showcase my skills and projects.</p>
    </section>
  </>
);

export default Home;
