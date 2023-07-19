import "./Aboutme.css";

const Aboutme = () => {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <img src={process.env.PUBLIC_URL + "/img/pic2.jpg"} alt="profile" />
        {/* <img src="img/pic2.jpg" alt="profile" /> */}
      </div>
      <div className="about-text">
        <h3>
          About <span>me</span>
        </h3>
        <h4>Electrical and Information Engineering Undergraduate</h4>
        <p>
          Hello there! I'm a 3rd year undergraduate pursuing a degree in
          Electrical and Information Engineering at University of Ruhuna. My
          journey in the world of technology has been incredibly rewarding, as
          I've discovered a profound passion for software development. As a
          <b> full-stack </b> web developer, I have actively contributed for
          various projects, harnessing the power of <b>MERN </b> stack to create
          immersive web applications. My expertise extends beyond web
          development, encompassing <b>Java</b> application development and
          crafting <b>C#</b> and <b>.NET</b>
          applications with a specialization in <b>WPF</b>. Throughout my
          endeavors, I've honed my skills in manipulating <b>MySQL</b>{" "}
          databases, allowing me to seamlessly handle data and ensure smooth
          application functionality. I'm excited about the endless possibilities
          that lie ahead in the realm of software engineering, and I am eager to
          embrace new challenges and contribute my skills to create
          transformative solutions.
        </p>
        <a
          href="https://www.linkedin.com/in/supun-ganegoda"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          More About
        </a>
      </div>
    </div>
  );
};
export default Aboutme;
