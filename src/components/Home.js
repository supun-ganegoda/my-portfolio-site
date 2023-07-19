import "./Home.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--text-color);
  text-stroke: 1px var(--text-color);
  transition: -webkit-text-stroke 0.3s ease;
  transition: text-stroke 0.3s ease;
  ${(props) =>
    props.strokeEffect &&
    `
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke: 2px #fff;
    text-stroke: 2px red; /* Standard syntax */
  `}
`;

const Home = () => {
  const [strokeEffect, setStrokeEffect] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the stroke effect every 1 second
      setStrokeEffect((prevStrokeEffect) => !prevStrokeEffect);
    }, 1000); // 1000ms = 1 second

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="home" id="home">
      <div className="home-text">
        <div className="slide">
          <span className="one">Hello</span>
          <span className="two">I'm</span>
        </div>
        <div className="home-header">
          <StyledH1 strokeEffect={strokeEffect}>Supun </StyledH1>
          <h1 style={{ marginLeft: "8px" }}> Ganegoda</h1>
        </div>
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
        {/* <div className="button">
          <a href="#aboutme" className="btn">
            About me
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Home;
