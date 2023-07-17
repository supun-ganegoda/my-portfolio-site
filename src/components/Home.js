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
          Engineering<span> Undergraduate</span>
        </h3>
        <p>
          I'm currently studying as a 3rd year engineering undergrduate <br />
          at <br />
          Department of Electrical and Information Engineering, <br />
          Faculty of Engineering, <br />
          University of Ruhuna.
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
