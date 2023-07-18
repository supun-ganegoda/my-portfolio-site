import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-text">
        <div className="slide">
          <span className="one">Hello</span>
          <span className="two">I'm</span>
        </div>
        <h1>Supun Ganegoda</h1>
        <h3>
          Computer<span> Enthusiast</span>
        </h3>
        <p>
          Eager and determined, I am a highly motivated individual in pursuit of
          diverse opportunities to demonstrate my unwavering passion and
          relentless perseverance across the realms of <br />
          <strong>software engineering </strong>
          <br />
          <strong>cyber-security </strong>
          <br /> <strong>artificial intelligence</strong> <br /> With a profound
          fascination for cutting-edge technologies, I am enthusiastic about
          taking on challenges that push the boundaries of innovation and
          problem-solving.
        </p>
        <div className="button">
          <a href="#aboutme" className="btn">
            About me
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
