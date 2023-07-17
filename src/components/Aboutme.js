import "./Aboutme.css";

const Aboutme = () => {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <img src="Profile.png" alt="profile"></img>
      </div>
      <div className="about-text">
        <h3>
          About <span>me</span>
        </h3>
        <h4>Web Developer</h4>
        <p>
          I'm a 3rd year undergraduate of Electrical and Information Engineering
          at the University of Ruhuna. With a passion for software development,
          I already made a significant impact as a Front-end developer, having
          successfully contributed to a variety of projects. Skilled in HTML,
          CSS, JavaScript, DOM manipulation, and AJAX, I possesses a strong
          foundation in the technologies and techniques necessary to design and
          implement effective user interfaces. With a dedication to staying
          current with the latest industry trends and best practices, I'm an
          asset to any software development team looking to build innovative and
          engaging user experiences
        </p>
        <a href="#" className="btn">
          More About
        </a>
      </div>
    </div>
  );
};
export default Aboutme;
